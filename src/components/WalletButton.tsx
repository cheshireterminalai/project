import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Loader2 } from 'lucide-react';
import '@solana/wallet-adapter-react-ui/styles.css';

export function WalletButton() {
  const { connecting } = useWallet();

  return (
    <div className="fixed top-4 right-4 z-[100]" style={{ zIndex: 999 }}>
      {connecting ? (
        <div className="bg-purple-500 text-white px-4 py-2 rounded-md flex items-center">
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          Connecting...
        </div>
      ) : (
        <WalletMultiButton 
          className="!bg-purple-500 hover:!bg-purple-600 transition-colors !h-[48px] !px-6 !rounded-md"
          style={{
            background: 'rgb(168 85 247)',
            height: '48px',
            borderRadius: '6px',
            color: 'white',
            fontSize: '16px',
            border: 'none'
          }}
        />
      )}
    </div>
  );
}
