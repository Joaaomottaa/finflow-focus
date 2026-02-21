import { TrendingUp, TrendingDown, Wallet, PiggyBank } from "lucide-react";
import { usePrivacy } from "@/contexts/PrivacyContext";
import { summary } from "@/lib/mockData";

const cards = [
  { label: "Saldo Total", value: summary.balance, icon: Wallet, colorClass: "text-primary", bgClass: "bg-primary/10" },
  { label: "Receitas do Mês", value: summary.income, icon: TrendingUp, colorClass: "text-income", bgClass: "bg-income/10" },
  { label: "Gastos do Mês", value: summary.expenses, icon: TrendingDown, colorClass: "text-expense", bgClass: "bg-expense/10" },
  { label: "Investimentos", value: summary.investments, icon: PiggyBank, colorClass: "text-invest", bgClass: "bg-invest/10" },
];

export default function SummaryCards() {
  const { formatValue } = usePrivacy();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {cards.map((card) => (
        <div key={card.label} className="glass-card p-4 md:p-5 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs md:text-sm text-muted-foreground font-medium">{card.label}</span>
            <div className={`w-8 h-8 rounded-lg ${card.bgClass} flex items-center justify-center`}>
              <card.icon className={`w-4 h-4 ${card.colorClass}`} />
            </div>
          </div>
          <p className={`text-lg md:text-2xl font-bold ${card.colorClass}`}>
            {formatValue(card.value)}
          </p>
        </div>
      ))}
    </div>
  );
}
