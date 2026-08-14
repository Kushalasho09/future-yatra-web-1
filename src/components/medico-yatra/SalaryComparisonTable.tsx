"use client";

import { useState } from "react";
import { AlertTriangle, ArrowUpRight, CheckCircle, Sparkles, Filter } from "lucide-react";
import { SALARY_TABLE_DATA, COST_RECOVERY_EXAMPLES, CAREER_OPTIONS } from "@/lib/medicoData";

interface SalaryComparisonTableProps {
  selectedCareer: string;
  onScrollToFinder: () => void;
}

export default function SalaryComparisonTable({
  selectedCareer,
  onScrollToFinder,
}: SalaryComparisonTableProps) {
  const [currencyToggle, setCurrencyToggle] = useState<"USD" | "INR">("USD");
  const [activeColumn, setActiveColumn] = useState<string>(
    selectedCareer && selectedCareer !== "all"
      ? CAREER_OPTIONS.find((c) => c.id === selectedCareer)?.columnKey || "nurse"
      : "nurse"
  );

  const currentColumnKey =
    selectedCareer && selectedCareer !== "all"
      ? CAREER_OPTIONS.find((c) => c.id === selectedCareer)?.columnKey || activeColumn
      : activeColumn;

  const currentCareerObj = CAREER_OPTIONS.find((c) => c.columnKey === currentColumnKey) || CAREER_OPTIONS[2];

  const costRecoveryData =
    COST_RECOVERY_EXAMPLES[currentColumnKey] || COST_RECOVERY_EXAMPLES["nurse"];

  const formatSalary = (val: number) => {
    if (currencyToggle === "INR") {
      const inrLakhs = Math.round((val * 83) / 100000);
      return `~₹${inrLakhs} L/yr`;
    }
    return `~$${val.toLocaleString()}`;
  };

  const columns = [
    { key: "physician", label: "Physician (MBBS)" },
    { key: "dentist", label: "Dentist (BDS)" },
    { key: "nurse", label: "Nurse" },
    { key: "pharmacist", label: "Pharmacist" },
    { key: "physiotherapist", label: "Physiotherapist" },
    { key: "respiratoryTherapist", label: "Respiratory / MLT" },
  ];

  return (
    <section id="salary-table" className="w-full max-w-6xl mx-auto space-y-6 scroll-mt-28 font-poppins">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-[#0263CC] rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Global Earning Insights
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-manjari text-slate-900">
          Where Could a Healthcare Career Take You?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
          A healthcare qualification can open doors worldwide. Below is an illustrative comparison of indicative average annual salaries (approx., for qualified & licensed professionals) across ten countries. Use it to explore possibilities — not as a promise.
        </p>
      </div>

      {/* ⚠️ Mandatory Legal Disclaimer Banner Above Table */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl text-amber-900 shadow-sm flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold">IMPORTANT DISCLAIMER:</strong> Figures are illustrative & approximate, for qualified and licensed professionals. They vary widely by experience, city, employer, currency and year. Earning these salaries requires meeting each country's licensing/registration and immigration requirements. Verify with official sources before relying on them.
        </div>
      </div>

      {/* Table Controls & Finder Linkage Tag */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {selectedCareer && selectedCareer !== "all" && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0263CC] text-white text-xs font-bold rounded-full shadow-sm">
              <CheckCircle className="w-3.5 h-3.5 text-amber-300" />
              Highlighted because you selected {currentCareerObj.label} in the Country Finder
            </span>
          )}
          <span className="text-xs text-slate-500 font-semibold hidden md:inline">
            Click column headers to highlight profession
          </span>
        </div>

        {/* Currency Display Toggle */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-end sm:self-auto">
          <button
            onClick={() => setCurrencyToggle("USD")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              currencyToggle === "USD" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrencyToggle("INR")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              currencyToggle === "INR" ? "bg-[#0263CC] text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            INR (₹) Approx
          </button>
        </div>
      </div>

      {/* Interactive Responsive Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-slate-900 text-white font-manjari">
                <th className="p-4 font-bold border-b border-slate-800">Country</th>
                {columns.map((col) => {
                  const isHighlighted = currentColumnKey === col.key;
                  return (
                    <th
                      key={col.key}
                      onClick={() => setActiveColumn(col.key)}
                      className={`p-4 font-bold border-b border-slate-800 cursor-pointer transition-colors ${
                        isHighlighted ? "bg-[#0263CC] text-white" : "hover:bg-slate-800 text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span>{col.label}</span>
                        {isHighlighted && <Sparkles className="w-3.5 h-3.5 text-amber-300 ml-auto" />}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {SALARY_TABLE_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2 bg-slate-50/40">
                    <span className="text-xl">{row.flag}</span>
                    <span>{row.country}</span>
                  </td>
                  <td className={`p-4 ${currentColumnKey === "physician" ? "bg-blue-50/80 font-bold text-[#0263CC]" : ""}`}>
                    {formatSalary(row.physicianVal)}
                  </td>
                  <td className={`p-4 ${currentColumnKey === "dentist" ? "bg-blue-50/80 font-bold text-[#0263CC]" : ""}`}>
                    {formatSalary(row.dentistVal)}
                  </td>
                  <td className={`p-4 ${currentColumnKey === "nurse" ? "bg-blue-50/80 font-bold text-[#0263CC]" : ""}`}>
                    {formatSalary(row.nurseVal)}
                  </td>
                  <td className={`p-4 ${currentColumnKey === "pharmacist" ? "bg-blue-50/80 font-bold text-[#0263CC]" : ""}`}>
                    {formatSalary(row.pharmacistVal)}
                  </td>
                  <td className={`p-4 ${currentColumnKey === "physiotherapist" ? "bg-blue-50/80 font-bold text-[#0263CC]" : ""}`}>
                    {formatSalary(row.physiotherapistVal)}
                  </td>
                  <td className={`p-4 ${currentColumnKey === "respiratoryTherapist" ? "bg-blue-50/80 font-bold text-[#0263CC]" : ""}`}>
                    {formatSalary(row.respiratoryTherapistVal)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Cost-Recovery ROI Calculation Line */}
      <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-indigo-50 border border-blue-200/80 p-5 rounded-2xl shadow-sm text-slate-800">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#0263CC] text-white rounded-xl flex-shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <span className="font-bold text-[#0263CC] uppercase tracking-wider text-[11px]">
              Dynamic ROI & Cost Recovery Example — {costRecoveryData.profession}
            </span>
            <p className="leading-relaxed text-slate-700 italic">
              "Illustrative example only: at an indicative entry-level salary of{" "}
              <strong className="text-slate-900 not-italic">{costRecoveryData.salary}</strong> ({costRecoveryData.country}) against an illustrative total programme cost of{" "}
              <strong className="text-slate-900 not-italic">{costRecoveryData.cost}</strong>, a graduate could realistically recover their total study investment within roughly{" "}
              <strong className="text-[#0263CC] not-italic">{costRecoveryData.timeline}</strong> — before accounting for living costs, tax, or currency movement. This is a simplified example, not a forecast for any individual student."
            </p>
          </div>
        </div>
      </div>

      {/* Honest Framing Line */}
      <p className="text-xs text-slate-600 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200">
        <strong className="text-slate-900">Honest Framing:</strong> These are possibilities for licensed professionals, not guarantees. To work in these countries you'll typically need to clear local licensing/registration exams — for example USMLE (physicians, USA), NCLEX (nurses, USA/Canada), PLAB / UKMLA (doctors, UK), AMC (doctors, Australia), and equivalents for other professions — plus meet visa/immigration rules. This is exactly where Medico Yatra helps — we plan the licensing pathway with you from the start.
      </p>

      {/* CTA Inside Section */}
      <div className="text-center pt-2">
        <button
          onClick={onScrollToFinder}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-[#0263CC] text-white font-bold text-sm rounded-xl shadow-md transition-all group"
        >
          <span>Find the Right Career & Country for Me</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
