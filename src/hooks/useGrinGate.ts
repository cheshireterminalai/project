import { useState, useEffect, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getGrinBalance } from '../utils/tokenChecker';
import { config } from '../utils/config';

export const useGrinGate = () => {
  const { connected, publicKey } = useWallet();
  const [hasGrin, setHasGrin] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [balance, setBalance] = useState<number>(0);
  const requiredAmount = config.grin.requiredAmount;

  const checkAccess = useCallback(async () => {
    if (!connected || !publicKey) {
      setHasGrin(false);
      setBalance(0);
      return;
    }

    setIsChecking(true);
    try {
      const currentBalance = await getGrinBalance(publicKey.toString());
      setBalance(currentBalance);
      setHasGrin(currentBalance >= requiredAmount);
    } catch (error) {
      console.error('Error checking GRIN access:', error);
      setHasGrin(false);
      setBalance(0);
    } finally {
      setIsChecking(false);
    }
  }, [connected, publicKey, requiredAmount]);

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  return { 
    hasGrin, 
    isChecking, 
    balance,
    requiredAmount,
    refreshBalance: checkAccess
  };
};
