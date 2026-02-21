import { Sparkles } from "lucide-react";
import { aiTips } from "@/lib/mockData";
import { useState, useEffect } from "react";

export default function AiTipCard() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((i) => (i + 1) % aiTips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-5 animate-fade-in border-primary/20">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-1">Dica Inteligente</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{aiTips[tipIndex]}</p>
        </div>
      </div>
    </div>
  );
}
