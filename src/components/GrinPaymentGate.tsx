import { FC, ReactNode } from 'react';
import { useGrinGate } from '../hooks/useGrinGate';
import { Lock } from 'lucide-react';

interface Props {
  children: ReactNode;
}

export const GrinPaymentGate: FC<Props> = ({ children }) => {
  const { hasGrin, isChecking, balance, requiredAmount } = useGrinGate();

  if (isChecking) {
    return (
      <div className="text-center text-purple-400">
        Checking GRIN balance...
      </div>
    );
  }

  if (!hasGrin) {
    return (
      <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center">
        <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-purple-400 mb-2">Feature Locked</h3>
        <div className="text-gray-400 mb-4">
          <p className="mb-2">
            Current Balance: {balance?.toFixed(2) || '0'} GRIN
          </p>
          <p>
            Required Amount: {requiredAmount} GRIN per generation
          </p>
          <a 
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=7JofsgKgD3MerQDa7hEe4dfkY3c3nMnsThZzUuYyTFpE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline block mt-2"
          >
            Get GRIN tokens
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
