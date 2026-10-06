import { Leaf, Package, RotateCcw, MessageCircle } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

export function TrustGuarantees() {
  const { phoneNumber, generalMessage } = storeConfig.whatsapp;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(generalMessage)}`;

  // Icon mapper helper
  const renderIcon = (type: string) => {
    switch (type) {
      case 'leaf':
        return <Leaf className="w-6 h-6" />;
      case 'package':
        return <Package className="w-6 h-6" />;
      case 'rotate':
        return <RotateCcw className="w-6 h-6" />;
      case 'message':
      default:
        return <MessageCircle className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* 4 Trust Guarantee Cards */}
      <section className="space-y-3 pt-1">
        {storeConfig.guarantees.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-xs transition-colors"
          >
            <div className="space-y-0.5 text-right flex-1">
              <h3 className="font-bold text-sm sm:text-base text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-tight">
                {item.description}
              </p>
            </div>
            <div className={`w-11 h-11 rounded-full ${item.colorClass.split(' ').pop()} text-white flex items-center justify-center shrink-0 shadow-sm`}>
              {renderIcon(item.iconType)}
            </div>
          </div>
        ))}
      </section>

      {/* Secondary Bottom WhatsApp Action Button */}
      <section className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#1b5b48] hover:bg-[#144738] active:scale-[0.98] text-white font-['Cairo',sans-serif] font-black text-lg sm:text-xl py-4 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-emerald-500/30 text-center animate-cta-bounce"
        >
          <span className="text-2xl animate-finger-tap-h">👉</span>
          <span>احصل على باقتك الطبيعية الآن (واتساب)</span>
        </a>
      </section>
    </div>
  );
}
