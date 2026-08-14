"use client";

import { useState } from "react";
import { X, CheckCircle2, PhoneCall, Sparkles, Send, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCareer?: string;
  initialCountry?: string;
}

export default function CounsellingModal({
  isOpen,
  onClose,
  initialCareer = "",
  initialCountry = "",
}: CounsellingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    career: initialCareer || "MBBS / Medicine",
    budget: "₹25–50 Lakh",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden font-poppins"
        >
          {/* Header Bar with Medico Brand Gradient */}
          <div className="bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              100% Free · No Commitment
            </div>
            <h3 className="text-2xl font-bold font-manjari text-white">Book Free Counselling Session</h3>
            <p className="text-sm text-blue-50/90 mt-1">
              Talk directly with a healthcare-education specialist. Parents welcomed at every step.
            </p>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold font-manjari text-slate-800">Counselling Session Requested!</h4>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name || "Student"}</span>. Our senior healthcare career advisor will connect with you via WhatsApp & Call within 2 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0263CC] focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-800 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0263CC] focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-800 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="aarav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0263CC] focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-800 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Healthcare Interest
                    </label>
                    <div className="relative">
                      <select
                        value={formData.career}
                        onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                        className="w-full h-11 px-4 py-2.5 pr-10 rounded-xl border border-slate-200 focus:border-[#0263CC] focus:ring-2 focus:ring-blue-500/20 text-sm font-medium text-slate-800 outline-none transition-all bg-white appearance-none cursor-pointer"
                      >
                        <option>MBBS / Medicine</option>
                        <option>Dentistry (BDS)</option>
                        <option>Nursing</option>
                        <option>Pharmacy</option>
                        <option>Physiotherapy</option>
                        <option>Respiratory Therapy / MLT</option>
                        <option>Other Allied Health</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Approx. Budget
                    </label>
                    <div className="relative">
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full h-11 px-4 py-2.5 pr-10 rounded-xl border border-slate-200 focus:border-[#0263CC] focus:ring-2 focus:ring-blue-500/20 text-sm font-medium text-slate-800 outline-none transition-all bg-white appearance-none cursor-pointer"
                      >
                        <option>Under ₹25 Lakh</option>
                        <option>₹25–50 Lakh</option>
                        <option>₹50–75 Lakh</option>
                        <option>₹75 Lakh+</option>
                        <option>Not Sure — Need Guidance</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Specific Question or Concern (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Want to know about NMC rules for Georgia vs Russia..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0263CC] focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-800 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#4DA5EC] hover:from-[#0252ad] hover:to-[#0291a3] text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 transition-all group"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Confirm & Book Free Session</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 leading-tight">
                  🔒 We respect your privacy. No spam. 100% honest counselling without sales pressure.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
