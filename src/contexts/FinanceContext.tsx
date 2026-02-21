import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import {
  transactions as initialTransactions,
  Transaction,
} from "@/lib/mockData";

export interface Category {
  name: string;
  color: string;
}

const defaultCategories: Category[] = [
  { name: "Alimentação", color: "hsl(340, 82%, 60%)" },
  { name: "Transporte", color: "hsl(217, 91%, 60%)" },
  { name: "Lazer", color: "hsl(38, 92%, 60%)" },
  { name: "Saúde", color: "hsl(152, 100%, 50%)" },
  { name: "Compras", color: "hsl(280, 70%, 60%)" },
  { name: "Moradia", color: "hsl(200, 70%, 50%)" },
  { name: "Educação", color: "hsl(60, 70%, 50%)" },
  { name: "Salário", color: "hsl(152, 80%, 40%)" },
  { name: "Freelance", color: "hsl(30, 80%, 55%)" },
  { name: "Investimentos", color: "hsl(217, 60%, 50%)" },
  { name: "Outros", color: "hsl(0, 0%, 50%)" },
];

interface FinanceContextType {
  transactions: Transaction[];
  addTransaction: (t: Omit<Transaction, "id">) => void;
  categories: Category[];
  addCategory: (c: Category) => void;
  updateCategory: (oldName: string, c: Category) => void;
  removeCategory: (name: string) => void;
  categoryExpenses: { name: string; value: number; color: string }[];
  summary: { balance: number; income: number; expenses: number };
}

const FinanceContext = createContext<FinanceContextType>(null!);

export const useFinance = () => useContext(FinanceContext);

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [categories, setCategories] = useState<Category[]>(defaultCategories);

  const addTransaction = (t: Omit<Transaction, "id">) => {
    setTransactions((prev) => [
      { ...t, id: crypto.randomUUID() },
      ...prev,
    ]);
  };

  const addCategory = (c: Category) => {
    setCategories((prev) => [...prev, c]);
  };

  const updateCategory = (oldName: string, c: Category) => {
    setCategories((prev) => prev.map((cat) => (cat.name === oldName ? c : cat)));
    // Also update transactions with old category name
    if (oldName !== c.name) {
      setTransactions((prev) =>
        prev.map((t) => (t.category === oldName ? { ...t, category: c.name } : t))
      );
    }
  };

  const removeCategory = (name: string) => {
    setCategories((prev) => prev.filter((c) => c.name !== name));
  };

  const categoryExpenses = useMemo(() => {
    const map = new Map<string, number>();
    transactions.forEach((t) => {
      if (t.type === "expense") {
        map.set(t.category, (map.get(t.category) || 0) + t.amount);
      }
    });
    return categories
      .map((c) => ({ name: c.name, value: map.get(c.name) || 0, color: c.color }))
      .filter((c) => c.value > 0);
  }, [transactions, categories]);

  const summary = useMemo(() => {
    const income = transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const expenses = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
    return { balance: income - expenses, income, expenses };
  }, [transactions]);

  return (
    <FinanceContext.Provider
      value={{ transactions, addTransaction, categories, addCategory, updateCategory, removeCategory, categoryExpenses, summary }}
    >
      {children}
    </FinanceContext.Provider>
  );
}
