/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroBanner } from './components/HeroBanner';
import { OrderForm } from './components/OrderForm';
import { TrustGuarantees } from './components/TrustGuarantees';
import { FooterAndPolicies } from './components/FooterAndPolicies';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  // وضع المعاينة على شاشات الكمبيوتر (عرض الهاتف vs العرض الكامل)
  const [viewMode, setViewMode] = useState<'mobile' | 'fluid'>('mobile');

  // مراجع للتمرير السلس لحقل الاسم
  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="min-h-screen bg-[#e9ece9] text-slate-800 font-['Tajawal',sans-serif] selection:bg-emerald-700 selection:text-white"
      dir="rtl"
    >
      {/* 🖥️ أداة تبديل وضع العرض على شاشات الكمبيوتر (Desktop Preview Bar) */}
      <aside
        aria-label="أدوات العرض"
        className="hidden lg:flex items-center justify-between px-6 py-2.5 bg-[#152e24] text-emerald-100 text-xs border-b border-emerald-800/40 sticky top-0 z-50"
      >
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>معاينة متجاوبة - تصميم أصلي ومطابق للموبايل والكمبيوتر</span>
        </div>
        <div className="flex items-center gap-2 bg-emerald-950/60 p-1 rounded-lg border border-emerald-700/50">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-300 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>عرض الهاتف (Mobile Frame)</span>
          </button>
          <button
            onClick={() => setViewMode('fluid')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'fluid'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-300 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>عرض متجاوب كامل (Full Responsive)</span>
          </button>
        </div>
      </aside>

      {/* 📱 الإطار الرئيسي للصفحة (Main Landing Page Container) */}
      <main
        className={`mx-auto transition-all duration-300 ${
          viewMode === 'mobile'
            ? 'max-w-[430px] my-0 lg:my-6 lg:rounded-[40px] lg:shadow-2xl lg:ring-1 lg:ring-black/10 overflow-hidden'
            : 'max-w-2xl px-0 sm:px-4 my-0 sm:my-6'
        } bg-[#f9faf9] border-x border-slate-300/40`}
      >
        {/* 1. الشريط الإخباري العلوي */}
        <AnnouncementBar />

        {/* 2. الصورة الرئيسية المنحنية مع شارة الجودة */}
        <HeroBanner />

        {/* 3. باقي أقسام المحتوى الداخلي */}
        <div className="p-3.5 sm:p-5 pt-3 space-y-5">
          {/* استمارة تأكيد الطلب مع التحويل المباشر للواتساب */}
          <OrderForm formRef={formRef} nameInputRef={nameInputRef} />

          {/* بطاقات الضمان الأربعة وزر التحويل السريع للواتساب */}
          <TrustGuarantees />

          {/* تذييل الصفحة وروابط السياسات */}
          <FooterAndPolicies />
        </div>
      </main>

      {/* 🚀 الشريط السفلي العائم للهواتف الذكية مع تأثير الحركة (Sticky CTA Bar) */}
      <StickyBottomBar />
    </div>
  );
}
