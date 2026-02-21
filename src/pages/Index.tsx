import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight, PieChart, CreditCard, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: PieChart, title: "Visão Raio-X", desc: "Entenda para onde vai cada centavo" },
  { icon: CreditCard, title: "Parcelas & Assinaturas", desc: "Controle tudo em um só lugar" },
  { icon: Shield, title: "Modo Privacidade", desc: "Oculte seus valores em público" },
  { icon: Sparkles, title: "Dicas Inteligentes", desc: "Insights personalizados com IA" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">FinFlow</span>
        </div>
        <Link
          to="/dashboard"
          className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
        >
          Entrar
        </Link>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 md:py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">Controle financeiro inteligente</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] max-w-4xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Controle suas finanças{" "}
          <span className="gradient-text">em segundos</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Visualize gastos, parcelas e metas em um dashboard intuitivo.
          Sem planilhas, sem complicação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/dashboard"
            className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all glow-primary flex items-center gap-2"
          >
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 md:mt-28 max-w-4xl w-full">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card-hover p-5 text-left animate-fade-in"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-muted-foreground border-t border-border/50">
        © 2024 FinFlow. Todos os direitos reservados.
      </footer>
    </div>
  );
}
