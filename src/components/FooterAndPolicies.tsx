import { useState } from 'react';
import { X } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

export function FooterAndPolicies() {
  const [activeModal, setActiveModal] = useState<'terms' | 'return' | 'privacy' | null>(null);

  const { terms, returnPolicy, privacy } = storeConfig.policies;

  return (
    <>
      {/* Footer Navigation */}
      <footer className="text-center pt-4 pb-8 space-y-2 text-[11px] sm:text-xs text-slate-600 font-semibold border-t border-slate-300/60">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <button
            type="button"
            onClick={() => setActiveModal('terms')}
            className="hover:text-emerald-800 underline decoration-slate-400 hover:decoration-emerald-700 cursor-pointer"
          >
            شروط الاستخدام
          </button>
          <span className="text-slate-400">|</span>
          <button
            type="button"
            onClick={() => setActiveModal('return')}
            className="hover:text-emerald-800 underline decoration-slate-400 hover:decoration-emerald-700 cursor-pointer"
          >
            سياسة الاستبدال والاسترجاع
          </button>
          <span className="text-slate-400">|</span>
          <button
            type="button"
            onClick={() => setActiveModal('privacy')}
            className="hover:text-emerald-800 underline decoration-slate-400 hover:decoration-emerald-700 cursor-pointer"
          >
            سياسة الخصوصية
          </button>
        </div>

        <p className="text-slate-500 font-medium">
          شروط وأحكام البيع (COD) | الدفع عند الاستلام بعد المعاينة
        </p>
      </footer>

      {/* Policy Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-right shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'terms' && (
              <div className="space-y-3">
                <h3 className="font-['Cairo',sans-serif] font-bold text-xl text-emerald-900 mb-2">
                  {terms.title}
                </h3>
                {terms.content.map((p, idx) => (
                  <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {activeModal === 'return' && (
              <div className="space-y-3">
                <h3 className="font-['Cairo',sans-serif] font-bold text-xl text-emerald-900 mb-2">
                  {returnPolicy.title}
                </h3>
                {returnPolicy.content.map((p, idx) => (
                  <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-3">
                <h3 className="font-['Cairo',sans-serif] font-bold text-xl text-emerald-900 mb-2">
                  {privacy.title}
                </h3>
                {privacy.content.map((p, idx) => (
                  <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2 rounded-xl text-sm transition-colors cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
