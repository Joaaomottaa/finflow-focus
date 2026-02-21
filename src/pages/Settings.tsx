import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { useFinance, Category } from "@/contexts/FinanceContext";
import { ArrowLeft, Plus, Pencil, Trash2, X, Check } from "lucide-react";
import { Link } from "react-router-dom";

const colorOptions = [
  "hsl(340, 82%, 60%)", "hsl(217, 91%, 60%)", "hsl(38, 92%, 60%)",
  "hsl(152, 100%, 50%)", "hsl(280, 70%, 60%)", "hsl(200, 70%, 50%)",
  "hsl(0, 72%, 51%)", "hsl(141, 73%, 42%)", "hsl(60, 70%, 50%)",
  "hsl(0, 0%, 50%)",
];

export default function SettingsPage() {
  const { categories, addCategory, updateCategory, removeCategory } = useFinance();
  const [editingName, setEditingName] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editColor, setEditColor] = useState(colorOptions[0]);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState(colorOptions[0]);

  const startEdit = (cat: Category) => {
    setEditingName(cat.name);
    setEditValue(cat.name);
    setEditColor(cat.color);
  };

  const saveEdit = () => {
    if (editingName && editValue.trim()) {
      updateCategory(editingName, { name: editValue.trim(), color: editColor });
    }
    setEditingName(null);
  };

  const handleAdd = () => {
    if (newName.trim()) {
      addCategory({ name: newName.trim(), color: newColor });
      setNewName("");
      setNewColor(colorOptions[0]);
      setAdding(false);
    }
  };

  return (
    <AppLayout>
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/profile" className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Configurações</h1>
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Categorias</h2>
            <button
              onClick={() => setAdding(true)}
              className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Plus className="w-4 h-4" /> Adicionar
            </button>
          </div>

          <div className="glass-card overflow-hidden divide-y divide-border">
            {adding && (
              <div className="p-4 space-y-3">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Nome da categoria"
                  className="w-full bg-muted border border-border rounded-xl py-2.5 px-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
                <div className="flex gap-2 flex-wrap">
                  {colorOptions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setNewColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${newColor === c ? "border-foreground scale-110" : "border-transparent"}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={handleAdd} className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                    <Check className="w-4 h-4 inline mr-1" /> Salvar
                  </button>
                  <button onClick={() => setAdding(false)} className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm">
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {categories.map((cat) => (
              <div key={cat.name} className="px-4 py-3">
                {editingName === cat.name ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full bg-muted border border-border rounded-xl py-2.5 px-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      autoFocus
                    />
                    <div className="flex gap-2 flex-wrap">
                      {colorOptions.map((c) => (
                        <button
                          key={c}
                          onClick={() => setEditColor(c)}
                          className={`w-7 h-7 rounded-full border-2 transition-all ${editColor === c ? "border-foreground scale-110" : "border-transparent"}`}
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={saveEdit} className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                        <Check className="w-4 h-4 inline mr-1" /> Salvar
                      </button>
                      <button onClick={() => setEditingName(null)} className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm">
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cat.color }} />
                      <span className="text-sm text-foreground">{cat.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => startEdit(cat)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button onClick={() => removeCategory(cat.name)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Trash2 className="w-4 h-4 text-expense" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
