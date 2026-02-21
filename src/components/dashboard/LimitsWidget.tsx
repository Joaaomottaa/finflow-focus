import { categoryLimits } from "@/lib/mockData";
import { usePrivacy } from "@/contexts/PrivacyContext";
import { AlertTriangle, UtensilsCrossed, Car, Gamepad2, Heart } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed, Car, Gamepad2, Heart,
};

export default function LimitsWidget() {
  const { formatValue } = usePrivacy();

  return (
    <div className="glass-card p-5 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-warning" />
        <h3 className="text-sm font-semibold text-foreground">Limites de Gastos</h3>
      </div>
      <div className="space-y-4">
        {categoryLimits.map((item) => {
          const pct = (item.spent / item.limit) * 100;
          const isOver = pct >= 80;
          const Icon = iconMap[item.icon] || Heart;
          return (
            <div key={item.id}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{item.category}</span>
                </div>
                <span className={`text-xs font-medium ${isOver ? "text-expense" : "text-muted-foreground"}`}>
                  {formatValue(item.spent)} / {formatValue(item.limit)}
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isOver ? "bg-expense" : "bg-primary"
                  }`}
                  style={{ width: `${Math.min(pct, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
