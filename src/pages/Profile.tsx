import AppLayout from "@/components/AppLayout";
import { User, Settings, Bell, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <AppLayout>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Perfil</h1>

        <div className="glass-card p-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Usuário FinFlow</p>
            <p className="text-sm text-muted-foreground">usuario@email.com</p>
          </div>
        </div>

        <div className="glass-card overflow-hidden">
          {[
            { icon: Settings, label: "Configurações" },
            { icon: Bell, label: "Notificações" },
            { icon: LogOut, label: "Sair" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-5 py-4 text-sm text-foreground hover:bg-muted/50 transition-colors border-b border-border last:border-0"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
