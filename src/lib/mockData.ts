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

export const transactions: Transaction[] = [
  { id: "1", description: "Salário", amount: 8500, type: "income", category: "Salário", date: "2024-03-01", icon: "Briefcase" },
  { id: "2", description: "iFood", amount: 45.9, type: "expense", category: "Alimentação", date: "2024-03-15", icon: "UtensilsCrossed" },
  { id: "3", description: "Uber", amount: 32.5, type: "expense", category: "Transporte", date: "2024-03-14", icon: "Car" },
  { id: "4", description: "Freelance Design", amount: 2200, type: "income", category: "Freelance", date: "2024-03-10", icon: "Palette" },
  { id: "5", description: "Mercado Livre", amount: 189.9, type: "expense", category: "Compras", date: "2024-03-13", icon: "ShoppingBag" },
  { id: "6", description: "Cinema", amount: 60, type: "expense", category: "Lazer", date: "2024-03-12", icon: "Film" },
  { id: "7", description: "Farmácia", amount: 78.5, type: "expense", category: "Saúde", date: "2024-03-11", icon: "Heart" },
  { id: "8", description: "Restaurante", amount: 120, type: "expense", category: "Alimentação", date: "2024-03-09", icon: "UtensilsCrossed" },
  { id: "9", description: "Gasolina", amount: 250, type: "expense", category: "Transporte", date: "2024-03-08", icon: "Fuel" },
  { id: "10", description: "Rendimento CDB", amount: 156.3, type: "income", category: "Investimentos", date: "2024-03-05", icon: "TrendingUp" },
];

export const categoryExpenses = [
  { name: "Alimentação", value: 1250, color: "hsl(340, 82%, 60%)" },
  { name: "Transporte", value: 820, color: "hsl(217, 91%, 60%)" },
  { name: "Lazer", value: 380, color: "hsl(38, 92%, 60%)" },
  { name: "Saúde", value: 290, color: "hsl(152, 100%, 50%)" },
  { name: "Compras", value: 560, color: "hsl(280, 70%, 60%)" },
];

export const installments: Installment[] = [
  { id: "1", name: "iPhone 15 Pro", totalInstallments: 12, currentInstallment: 4, monthlyAmount: 749.92, totalAmount: 8999 },
  { id: "2", name: "Notebook Dell", totalInstallments: 10, currentInstallment: 7, monthlyAmount: 459.9, totalAmount: 4599 },
  { id: "3", name: "Smart TV 55\"", totalInstallments: 8, currentInstallment: 2, monthlyAmount: 412.37, totalAmount: 3299 },
];

export const subscriptions: Subscription[] = [
  { id: "1", name: "Netflix", amount: 55.9, icon: "Tv", color: "hsl(0, 72%, 51%)", nextBilling: "2024-04-05" },
  { id: "2", name: "Spotify", amount: 21.9, icon: "Music", color: "hsl(141, 73%, 42%)", nextBilling: "2024-04-12" },
  { id: "3", name: "iCloud", amount: 12.9, icon: "Cloud", color: "hsl(217, 91%, 60%)", nextBilling: "2024-04-01" },
  { id: "4", name: "ChatGPT Plus", amount: 104, icon: "Bot", color: "hsl(152, 100%, 50%)", nextBilling: "2024-04-20" },
  { id: "5", name: "Amazon Prime", amount: 14.9, icon: "Package", color: "hsl(38, 92%, 60%)", nextBilling: "2024-04-08" },
];

export const categoryLimits: CategoryLimit[] = [
  { id: "1", category: "Alimentação", spent: 1250, limit: 1500, icon: "UtensilsCrossed" },
  { id: "2", category: "Transporte", spent: 820, limit: 1000, icon: "Car" },
  { id: "3", category: "Lazer", spent: 380, limit: 500, icon: "Gamepad2" },
  { id: "4", category: "Saúde", spent: 290, limit: 400, icon: "Heart" },
];

export const savingsGoals: SavingsGoal[] = [
  { id: "1", name: "Viagem de Férias", current: 3200, target: 8000, icon: "Plane", color: "hsl(217, 91%, 60%)" },
  { id: "2", name: "Reserva de Emergência", current: 12500, target: 25000, icon: "Shield", color: "hsl(152, 100%, 50%)" },
  { id: "3", name: "Carro Novo", current: 18000, target: 60000, icon: "Car", color: "hsl(38, 92%, 60%)" },
];

export const aiTips = [
  "Você gastou 15% a mais com iFood esta semana do que na média. Que tal cozinhar hoje? 🍳",
  "Sua reserva de emergência já cobre 3 meses de despesas. Continue assim! 🎯",
  "Você economizou R$ 340 em transporte este mês usando menos Uber. Parabéns! 🚗",
  "Seu gasto com assinaturas representa 2.5% da renda. Está dentro do ideal! ✅",
];

export const summary = {
  balance: 24850.6,
  income: 10856.3,
  expenses: 3300.2,
  investments: 45200,
};
