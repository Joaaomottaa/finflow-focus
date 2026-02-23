export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  icon: string;
}

export interface Installment {
  id: string;
  name: string;
  totalInstallments: number;
  currentInstallment: number;
  monthlyAmount: number;
  totalAmount: number;
}

export interface Subscription {
  id: string;
  name: string;
  amount: number;
  icon: string;
  color: string;
  nextBilling: string;
}

export interface CategoryLimit {
  id: string;
  category: string;
  spent: number;
  limit: number;
  icon: string;
}

export interface SavingsGoal {
  id: string;
  name: string;
  current: number;
  target: number;
  icon: string;
  color: string;
}

export const transactions: Transaction[] = [];

export const categoryExpenses: { name: string; value: number; color: string }[] = [];

export const installments: Installment[] = [];

export const subscriptions: Subscription[] = [];

export const categoryLimits: CategoryLimit[] = [];

export const savingsGoals: SavingsGoal[] = [];

export const aiTips = [
  "Adicione sua primeira transação clicando no botão + abaixo! 🚀",
  "Configure suas categorias em Perfil > Configurações para personalizar seu controle financeiro. ⚙️",
  "Registre suas receitas e despesas diariamente para ter uma visão completa das suas finanças. 📊",
  "Defina metas de economia para se manter motivado! 🎯",
];

export const summary = {
  balance: 0,
  income: 0,
  expenses: 0,
  investments: 0,
};
