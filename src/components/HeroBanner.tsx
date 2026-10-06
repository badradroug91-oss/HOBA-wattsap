import { storeConfig } from '../config/storeConfig';

export function HeroBanner() {
  const { image, fullTitle, ribbonText } = storeConfig.product;

  return (
    <div>
      {/* Curved Container for Hero Product Image */}
      <div className="relative w-full overflow-hidden bg-[#163f33] m-0 p-0 rounded-b-[36px] sm:rounded-b-[44px] shadow-[0_12px_28px_rgba(18,75,59,0.22)] border-b-2 border-[#caa45b]/40">
        <div className="relative w-full m-0 p-0 overflow-hidden">
          <img
            src={image}
            alt={fullTitle}
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            className="w-full h-auto block object-cover object-center m-0 p-0 filter brightness-[1.03] contrast-[1.07] saturate-[1.06] transition-transform duration-500 hover:scale-[1.01]"
          />

          {/* Soft ambient gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Trust & Authenticity Ribbon */}
      <div className="flex justify-center -mt-3.5 relative z-10 px-4">
        <div className="bg-gradient-to-r from-[#143d31] via-[#1d5543] to-[#143d31] border border-[#caa45b] text-[#fae8b4] px-4 py-1 rounded-full shadow-md text-[11px] sm:text-xs font-black flex items-center gap-1.5 tracking-wide">
          <span className="text-[#caa45b]">✦</span>
          <span>{ribbonText}</span>
          <span className="text-[#caa45b]">✦</span>
        </div>
      </div>
    </div>
  );
}
