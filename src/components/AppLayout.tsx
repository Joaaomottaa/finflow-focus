import { ReactNode, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Target,
  User,
  Eye,
  EyeOff,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { usePrivacy } from "@/contexts/PrivacyContext";

const navItems = [
  { label: "Home", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Transações", icon: ArrowLeftRight, path: "/transactions" },
  { label: "Metas", icon: Target, path: "/goals" },
  { label: "Perfil", icon: User, path: "/profile" },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { isPrivate, togglePrivacy } = usePrivacy();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-sidebar fixed inset-y-0 left-0 z-30">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
          <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">FinFlow</span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-border">
          <button
            onClick={togglePrivacy}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all w-full"
          >
            {isPrivate ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            <span>{isPrivate ? "Mostrar valores" : "Ocultar valores"}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen pb-20 md:pb-0">
        {/* Top bar mobile */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-muted">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-foreground">FinFlow</span>
            </div>
          </div>
          <button onClick={togglePrivacy} className="p-2 rounded-lg hover:bg-muted">
            {isPrivate ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
          </button>
        </header>

        {/* Mobile slide-out menu */}
        {sidebarOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
            <div className="w-64 h-full bg-sidebar border-r border-border p-4 space-y-1" onClick={(e) => e.stopPropagation()}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>

      {/* Mobile Bottom Tabs */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-background/90 backdrop-blur-xl border-t border-border">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" : ""}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
