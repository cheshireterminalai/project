import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Sparkles } from 'lucide-react';

export const CustomWalletButton = () => {
  const { connected } = useWallet();

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center">
        <WalletMultiButton className="!bg-transparent hover:!bg-transparent flex items-center gap-2 group-hover:scale-105 transition-all duration-300">
          <Sparkles className="w-5 h-5 text-purple-400 group-hover:animate-spin transition-all duration-500" />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-bold">
            {connected ? 'Connected' : 'Select Wallet'}
          </span>
        </WalletMultiButton>
      </div>
      <div className="absolute inset-0 rounded-lg bg-purple-600/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};