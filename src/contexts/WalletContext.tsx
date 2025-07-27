import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  balance: number;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState(1000); // Starting balance

  const generateRandomAddress = () => {
    const chars = "0123456789abcdef";
    let result = "0x";
    for (let i = 0; i < 40; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const connectWallet = () => {
    const randomAddress = generateRandomAddress();
    setAddress(randomAddress);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setAddress(null);
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        balance,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};