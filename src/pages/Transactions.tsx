import { useState, useMemo } from "react";
import { Search, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { transactions } from "@/lib/mockData";
import { usePrivacy } from "@/contexts/PrivacyContext";

const filterOptions = ["Todos", "Receitas", "Gastos"];

export default function Transactions() {
  const { formatValue } = usePrivacy();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      const matchSearch = t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        filter === "Todos" ? true :
        filter === "Receitas" ? t.type === "income" :
        t.type === "expense";
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Transações</h1>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar transação..."
              className="w-full bg-card border border-border rounded-xl py-3 pl-10 pr-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex gap-2 p-1 bg-card border border-border rounded-xl">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-2">
          {filtered.map((t) => (
            <div key={t.id} className="glass-card p-4 flex items-center justify-between animate-fade-in">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  t.type === "income" ? "bg-income/10" : "bg-expense/10"
                }`}>
                  {t.type === "income" ? (
                    <ArrowDownLeft className="w-5 h-5 text-income" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-expense" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.description}</p>
                  <p className="text-xs text-muted-foreground">{t.category} • {new Date(t.date).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
              <span className={`text-sm font-semibold ${t.type === "income" ? "text-income" : "text-expense"}`}>
                {t.type === "income" ? "+" : "-"}{formatValue(t.amount)}
              </span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              Nenhuma transação encontrada.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
