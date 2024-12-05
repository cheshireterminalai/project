import { 
  Connection, 
  PublicKey, 
  Transaction, 
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import { 
  TOKEN_PROGRAM_ID,
  createTransferInstruction,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  getAccount
} from '@solana/spl-token';
import { config } from './config';

const GRIN_TOKEN_ADDRESS = new PublicKey(config.grin.tokenAddress);
const PAYMENT_AMOUNT = config.grin.requiredAmount * LAMPORTS_PER_SOL; // Convert to lamports
const RECEIVER_WALLET = new PublicKey(config.grin.receiverAddress);

interface PaymentResult {
  success: boolean;
  error?: string;
  signature?: string;
}

export const processGrinPayment = async (
  payerPublicKey: PublicKey,
  signTransaction: (transaction: Transaction) => Promise<Transaction>
): Promise<PaymentResult> => {
  try {
    const connection = new Connection(config.helius.rpcUrl);

    // Get the associated token accounts for both payer and receiver
    const payerATA = await getAssociatedTokenAddress(
      GRIN_TOKEN_ADDRESS,
      payerPublicKey
    );

    const receiverATA = await getAssociatedTokenAddress(
      GRIN_TOKEN_ADDRESS,
      RECEIVER_WALLET
    );

    // Check if payer has enough balance
    try {
      const payerAccount = await getAccount(connection, payerATA);
      const balance = Number(payerAccount.amount);
      if (balance < PAYMENT_AMOUNT) {
        return {
          success: false,
          error: `Insufficient GRIN balance. Required: ${config.grin.requiredAmount} GRIN`
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'Error accessing GRIN token account'
      };
    }

    // Create transaction
    let transaction = new Transaction();
    
    // Check if receiver's ATA exists, if not create it
    try {
      await getAccount(connection, receiverATA);
    } catch (error) {
      transaction.add(
        createAssociatedTokenAccountInstruction(
          payerPublicKey,
          receiverATA,
          RECEIVER_WALLET,
          GRIN_TOKEN_ADDRESS
        )
      );
    }

    // Add transfer instruction
    transaction.add(
      createTransferInstruction(
        payerATA,
        receiverATA,
        payerPublicKey,
        PAYMENT_AMOUNT
      )
    );

    // Get recent blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = payerPublicKey;

    // Sign and send transaction
    const signedTransaction = await signTransaction(transaction);
    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    
    // Confirm transaction
    const confirmation = await connection.confirmTransaction(signature);
    
    if (confirmation.value.err) {
      return {
        success: false,
        error: 'Transaction failed to confirm',
        signature
      };
    }

    return {
      success: true,
      signature
    };
  } catch (error) {
    console.error('Error processing GRIN payment:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const verifyPayment = async (signature: string): Promise<boolean> => {
  try {
    const connection = new Connection(config.helius.rpcUrl);
    const transaction = await connection.getTransaction(signature);
    
    if (!transaction) {
      return false;
    }

    // Verify the transaction was successful
    if (transaction.meta?.err) {
      return false;
    }

    // Verify it was a token transfer
    const programIds = transaction.transaction.message.programIds().map(p => p.toString());
    if (!programIds.includes(TOKEN_PROGRAM_ID.toString())) {
      return false;
    }

    // Additional verification could be added here
    // Such as verifying the exact amount, sender, and receiver

    return true;
  } catch (error) {
    console.error('Error verifying payment:', error);
    return false;
  }
};
