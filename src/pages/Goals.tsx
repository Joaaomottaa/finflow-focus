import AppLayout from "@/components/AppLayout";
import GoalsWidget from "@/components/dashboard/GoalsWidget";

export default function Goals() {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Metas</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas metas de economia</p>
        </div>
        <GoalsWidget />
      </div>
    </AppLayout>
  );
}
