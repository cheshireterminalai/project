import { ReactNode } from 'react';
import { WalletModalProvider as BaseWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

interface Props {
  children: ReactNode;
}

export function WalletModalProvider({ children }: Props) {
  return (
    <BaseWalletModalProvider>
      {children}
    </BaseWalletModalProvider>
  );
}
