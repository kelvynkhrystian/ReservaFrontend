import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: LucideIcon;
}

export default function StatCard({ title, value, icon: Icon }: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-4xl font-bold text-slate-800">{value}</h2>
        </div>

        <div className="rounded-2xl bg-orange-100 p-4">
          <Icon size={28} className="text-orange-500" />
        </div>
      </div>
    </div>
  );
}
