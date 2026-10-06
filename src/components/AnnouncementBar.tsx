import { Info } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

export function AnnouncementBar() {
  return (
    <header className="bg-[#124b3b] text-white px-3 py-2.5 sm:px-4 flex items-center justify-center gap-2 text-center text-xs sm:text-[13px] font-bold tracking-wide shadow-inner">
      <Info className="w-4 h-4 shrink-0 text-emerald-200" />
      <p className="leading-snug">
        {storeConfig.announcement.text}
      </p>
    </header>
  );
}
