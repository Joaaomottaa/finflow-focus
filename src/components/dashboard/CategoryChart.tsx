import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { categoryExpenses } from "@/lib/mockData";
import { usePrivacy } from "@/contexts/PrivacyContext";

export default function CategoryChart() {
  const { formatValue, isPrivate } = usePrivacy();
  const total = categoryExpenses.reduce((s, c) => s + c.value, 0);

  return (
    <div className="glass-card p-5 animate-fade-in">
      <h3 className="text-sm font-semibold text-foreground mb-4">Visão Raio-X</h3>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-44 h-44 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryExpenses}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={72}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {categoryExpenses.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatValue(value)}
                contentStyle={{
                  background: "hsl(240 5% 9%)",
                  border: "1px solid hsl(240 4% 20%)",
                  borderRadius: "12px",
                  color: "hsl(0 0% 95%)",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-xs text-muted-foreground">Total</span>
            <span className="text-sm font-bold text-foreground">{formatValue(total)}</span>
          </div>
        </div>

        <div className="flex-1 space-y-2 w-full">
          {categoryExpenses.map((cat) => (
            <div key={cat.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-muted-foreground">{cat.name}</span>
              </div>
              <span className="font-medium text-foreground">{isPrivate ? "••••" : formatValue(cat.value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
