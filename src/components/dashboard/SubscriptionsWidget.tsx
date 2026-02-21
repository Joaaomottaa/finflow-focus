import { subscriptions } from "@/lib/mockData";
import { usePrivacy } from "@/contexts/PrivacyContext";
import { Tv, Music, Cloud, Bot, Package } from "lucide-react";
import { RepeatIcon } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tv, Music, Cloud, Bot, Package,
};

export default function SubscriptionsWidget() {
  const { formatValue } = usePrivacy();
  const total = subscriptions.reduce((s, sub) => s + sub.amount, 0);

  return (
    <div className="glass-card p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <RepeatIcon className="w-4 h-4 text-expense" />
          <h3 className="text-sm font-semibold text-foreground">Assinaturas</h3>
        </div>
        <span className="text-xs text-muted-foreground">{formatValue(total)}/mês</span>
      </div>
      <div className="space-y-3">
        {subscriptions.map((sub) => {
          const Icon = iconMap[sub.icon] || Tv;
          return (
            <div key={sub.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${sub.color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color: sub.color }} />
                </div>
                <span className="text-sm text-foreground">{sub.name}</span>
              </div>
              <span className="text-sm font-medium text-foreground">{formatValue(sub.amount)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
