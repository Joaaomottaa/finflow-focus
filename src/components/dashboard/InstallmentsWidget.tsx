import { installments } from "@/lib/mockData";
import { usePrivacy } from "@/contexts/PrivacyContext";
import { CreditCard } from "lucide-react";

export default function InstallmentsWidget() {
  const { formatValue } = usePrivacy();

  return (
    <div className="glass-card p-5 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-4 h-4 text-accent" />
        <h3 className="text-sm font-semibold text-foreground">Parcelas</h3>
      </div>
      <div className="space-y-4">
        {installments.map((item) => {
          const progress = (item.currentInstallment / item.totalInstallments) * 100;
          return (
            <div key={item.id}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-foreground font-medium">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  {item.currentInstallment}/{item.totalInstallments}
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{formatValue(item.monthlyAmount)}/mês</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
