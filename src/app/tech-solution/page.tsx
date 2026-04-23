"use client";

import { useState } from "react";
import { CoverPage } from "./pages/CoverPage";
import { OverviewPage } from "./pages/OverviewPage";
import { ArchitecturePage } from "./pages/ArchitecturePage";
import { CloudDatabasePage } from "./pages/CloudDatabasePage";
import { DataEnginePage } from "./pages/DataEnginePage";
import { AIReportPage } from "./pages/AIReportPage";
import { IntegrationsPage } from "./pages/IntegrationsPage";
import { SecurityPage } from "./pages/SecurityPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { BackCoverPage } from "./pages/BackCoverPage";

const pages = [
  { component: CoverPage, label: "Cover" },
  { component: OverviewPage, label: "Overview" },
  { component: ArchitecturePage, label: "Architecture" },
  { component: CloudDatabasePage, label: "Cloud & DB" },
  { component: DataEnginePage, label: "Data Engine" },
  { component: AIReportPage, label: "AI Reports" },
  { component: IntegrationsPage, label: "Integrations" },
  { component: SecurityPage, label: "Security" },
  { component: DeliveryPage, label: "Delivery" },
  { component: BackCoverPage, label: "Back" },
];

export default function TechSolutionPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center py-10 gap-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="px-4 py-2 rounded-lg bg-white/10 text-white/60 text-sm font-sans disabled:opacity-30 hover:bg-white/20 transition-colors"
        >
          ← Prev
        </button>
        <div className="flex gap-1.5">
          {pages.map((p, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all ${
                i === currentPage
                  ? "bg-white text-[#134A32] font-medium"
                  : "bg-white/10 text-white/50 hover:bg-white/20"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage(Math.min(pages.length - 1, currentPage + 1))
          }
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 rounded-lg bg-white/10 text-white/60 text-sm font-sans disabled:opacity-30 hover:bg-white/20 transition-colors"
        >
          Next →
        </button>
      </div>

      <div
        id="a4-page"
        className="bg-white shadow-2xl relative overflow-hidden"
        style={{ width: 595, height: 842 }}
      >
        <CurrentPageComponent />
      </div>

      <p className="text-white/30 text-xs font-sans">
        Page {currentPage + 1} of {pages.length} · A4 Portrait · Technical
        Solution Package (M0 deliverable)
      </p>
    </div>
  );
}
