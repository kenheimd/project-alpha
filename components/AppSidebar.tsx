"use client";

import Link from "next/link";
import {
  Activity,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Clock3,
  FileText,
  TrendingUp,
} from "lucide-react";

type AppSidebarProps = {
  active: "workspace" | "portfolio" | "opportunities" | "agents" | "knowledge" | "reports" | "settings";
};

const items = [
  { id: "workspace", label: "Arbeidsflate", href: "/", icon: BarChart3 },
  { id: "portfolio", label: "Portefølje", href: "/#portefolje", icon: BriefcaseBusiness },
  { id: "opportunities", label: "Muligheter", href: "/#muligheter", icon: TrendingUp },
  { id: "agents", label: "Agenter", href: "/#agenter", icon: BrainCircuit },
  { id: "knowledge", label: "Kunnskap", href: "/#kunnskap", icon: Activity },
  { id: "reports", label: "Rapporter", href: "/#rapporter", icon: FileText },
  { id: "settings", label: "Innstillinger", href: "/settings", icon: Clock3 },
] as const;

export default function AppSidebar({ active }: AppSidebarProps) {
  return (
    <aside>
      <Link className="brand" href="/" aria-label="Project Alpha arbeidsflate">
        <div className="mark">A</div>
        <div>
          <b>PROJECT</b>
          <strong>ALPHA</strong>
        </div>
      </Link>

      <nav aria-label="Hovedmeny">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={active === item.id ? "active" : undefined}
              aria-current={active === item.id ? "page" : undefined}
            >
              <Icon size={18} /> <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="systemStatus">
        <span className="pulse" />
        <span className="systemStatusText">Systemet er aktivt</span>
        <small>v0.2 private beta</small>
      </div>
    </aside>
  );
}
