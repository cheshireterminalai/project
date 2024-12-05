import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const WalletStatus = () => {
  const { connected } = useWallet();

  return (
    <div className="flex justify-between items-center bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
      <WalletMultiButton />
      <div className="text-green-400">
        {connected ? 'Connected' : 'Please connect your wallet'}
      </div>
    </div>
  );
};