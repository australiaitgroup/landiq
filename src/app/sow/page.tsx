"use client";

import { useState } from "react";
import { CoverPage } from "./pages/CoverPage";
import { DefinitionsPage } from "./pages/DefinitionsPage";
import { ScopeInPage } from "./pages/ScopeInPage";
import { AssumptionsPage } from "./pages/AssumptionsPage";
import { DeliveryABPage } from "./pages/DeliveryABPage";
import { DeliveryCDPage } from "./pages/DeliveryCDPage";
import { FeesPage } from "./pages/FeesPage";
import { GovernancePage } from "./pages/GovernancePage";
import { LegalPage } from "./pages/LegalPage";
import { SignOffPage } from "./pages/SignOffPage";

const pages = [
  { component: CoverPage, label: "Cover" },
  { component: DefinitionsPage, label: "Parties" },
  { component: ScopeInPage, label: "In Scope" },
  { component: AssumptionsPage, label: "Assumptions" },
  { component: DeliveryABPage, label: "Stages 1–2" },
  { component: DeliveryCDPage, label: "Stages 3–4" },
  { component: FeesPage, label: "Fees" },
  { component: GovernancePage, label: "Governance" },
  { component: LegalPage, label: "Legal" },
  { component: SignOffPage, label: "Sign-off" },
];

export default function SoWPage() {
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
        Page {currentPage + 1} of {pages.length} · A4 Portrait · Statement
        of Works — Phase 1 MVP
      </p>
    </div>
  );
}
