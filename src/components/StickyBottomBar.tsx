import { storeConfig } from '../config/storeConfig';

export function StickyBottomBar() {
  const { price, currency } = storeConfig.product;
  const { phoneNumber, generalMessage } = storeConfig.whatsapp;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(generalMessage)}`;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 z-40 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="text-right">
        <p className="text-xs text-slate-500 font-medium">السعر شامل التوصيل</p>
        <p className="text-emerald-900 font-black text-base sm:text-lg leading-tight">
          {price} {currency}
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1b5b48] hover:bg-[#144738] text-white font-black text-sm px-6 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer animate-cta-bounce"
      >
        <span>اطلب الآن عبر واتساب</span>
        <span className="text-base animate-finger-tap">👆</span>
      </a>
    </div>
  );
}
