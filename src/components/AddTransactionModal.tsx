import { useState } from "react";
import { X, Plus } from "lucide-react";

const categories = ["Alimentação", "Transporte", "Lazer", "Saúde", "Compras", "Moradia", "Educação", "Outros"];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddTransactionModal({ open, onClose }: Props) {
  const [type, setType] = useState<"expense" | "income">("expense");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock — would save to backend
    onClose();
    setAmount("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full sm:max-w-md bg-card border border-border rounded-t-3xl sm:rounded-2xl p-6 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-foreground">Nova Transação</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl">
            <button
              type="button"
              onClick={() => setType("expense")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                type === "expense" ? "bg-expense text-white" : "text-muted-foreground"
              }`}
            >
              Gasto
            </button>
            <button
              type="button"
              onClick={() => setType("income")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                type === "income" ? "bg-income text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Receita
            </button>
          </div>

          {/* Amount */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Valor</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">R$</span>
              <input
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0,00"
                className="w-full bg-muted border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Descrição</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Almoço no restaurante"
              className="w-full bg-muted border border-border rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-muted border border-border rounded-xl py-3 px-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Data</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-muted border border-border rounded-xl py-3 px-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
              type === "expense"
                ? "bg-expense hover:bg-expense/90 text-white"
                : "bg-income hover:bg-income/90 text-primary-foreground"
            }`}
          >
            <Plus className="w-4 h-4 inline-block mr-1" />
            Adicionar {type === "expense" ? "Gasto" : "Receita"}
          </button>
        </form>
      </div>
    </div>
  );
}
