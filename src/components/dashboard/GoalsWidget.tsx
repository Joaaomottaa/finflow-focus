import { savingsGoals } from "@/lib/mockData";
import { usePrivacy } from "@/contexts/PrivacyContext";
import { Plane, Shield, Car, Target } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane, Shield, Car,
};

export default function GoalsWidget() {
  const { formatValue } = usePrivacy();

  return (
    <div className="glass-card p-5 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">Metas de Economia</h3>
      </div>
      <div className="space-y-4">
        {savingsGoals.map((goal) => {
          const pct = (goal.current / goal.target) * 100;
          const Icon = iconMap[goal.icon] || Target;
          return (
            <div key={goal.id}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${goal.color}20` }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: goal.color }} />
                  </div>
                  <span className="text-sm text-foreground font-medium">{goal.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{pct.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: goal.color }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {formatValue(goal.current)} de {formatValue(goal.target)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
