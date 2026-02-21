import { useState } from "react";
import { Plus } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import SummaryCards from "@/components/dashboard/SummaryCards";
import CategoryChart from "@/components/dashboard/CategoryChart";
import InstallmentsWidget from "@/components/dashboard/InstallmentsWidget";
import SubscriptionsWidget from "@/components/dashboard/SubscriptionsWidget";
import LimitsWidget from "@/components/dashboard/LimitsWidget";
import GoalsWidget from "@/components/dashboard/GoalsWidget";
import AiTipCard from "@/components/dashboard/AiTipCard";
import AddTransactionModal from "@/components/AddTransactionModal";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Visão geral das suas finanças</p>
          </div>
        </div>

        <SummaryCards />

        <AiTipCard />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <CategoryChart />
          <InstallmentsWidget />
          <SubscriptionsWidget />
          <LimitsWidget />
        </div>

        <GoalsWidget />
      </div>

      {/* FAB */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-24 md:bottom-8 right-6 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-105 transition-transform z-20"
      >
        <Plus className="w-6 h-6" />
      </button>

      <AddTransactionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </AppLayout>
  );
}
