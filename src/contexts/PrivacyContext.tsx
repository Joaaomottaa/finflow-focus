import { useState, createContext, useContext, ReactNode } from "react";

interface PrivacyContextType {
  isPrivate: boolean;
  togglePrivacy: () => void;
  formatValue: (value: number) => string;
}

const PrivacyContext = createContext<PrivacyContextType>({
  isPrivate: false,
  togglePrivacy: () => {},
  formatValue: () => "",
});

export const usePrivacy = () => useContext(PrivacyContext);

export const PrivacyProvider = ({ children }: { children: ReactNode }) => {
  const [isPrivate, setIsPrivate] = useState(false);

  const togglePrivacy = () => setIsPrivate((prev) => !prev);

  const formatValue = (value: number) => {
    if (isPrivate) return "••••••";
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <PrivacyContext.Provider value={{ isPrivate, togglePrivacy, formatValue }}>
      {children}
    </PrivacyContext.Provider>
  );
};
