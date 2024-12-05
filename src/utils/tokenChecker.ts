import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { config } from './config';

const GRIN_TOKEN_ADDRESS = new PublicKey(config.grin.tokenAddress);
const REQUIRED_AMOUNT = config.grin.requiredAmount;

interface ParsedAccountInfo {
  data: {
    parsed: {
      info: {
        mint: string;
        tokenAmount: {
          amount: string;
        };
      };
    };
  };
}

interface TokenAccount {
  account: ParsedAccountInfo;
}

export const checkGrinBalance = async (walletAddress: string): Promise<boolean> => {
  try {
    const connection = new Connection(config.helius.rpcUrl);
    const walletPubKey = new PublicKey(walletAddress);
    
    // Get all token accounts for this wallet
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      walletPubKey,
      { programId: TOKEN_PROGRAM_ID }
    );

    // Find GRIN token account
    const grinAccount = tokenAccounts.value.find(
      (account: TokenAccount) => account.account.data.parsed.info.mint === GRIN_TOKEN_ADDRESS.toString()
    );

    if (!grinAccount) {
      return false;
    }

    const balance = Number(grinAccount.account.data.parsed.info.tokenAmount.amount) / LAMPORTS_PER_SOL;
    return balance >= REQUIRED_AMOUNT;
  } catch (error) {
    console.error('Error checking GRIN balance:', error);
    return false;
  }
};

export const getGrinBalance = async (walletAddress: string): Promise<number> => {
  try {
    const connection = new Connection(config.helius.rpcUrl);
    const walletPubKey = new PublicKey(walletAddress);
    
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      walletPubKey,
      { programId: TOKEN_PROGRAM_ID }
    );

    const grinAccount = tokenAccounts.value.find(
      (account: TokenAccount) => account.account.data.parsed.info.mint === GRIN_TOKEN_ADDRESS.toString()
    );

    if (!grinAccount) {
      return 0;
    }

    return Number(grinAccount.account.data.parsed.info.tokenAmount.amount) / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error('Error getting GRIN balance:', error);
    return 0;
  }
};
