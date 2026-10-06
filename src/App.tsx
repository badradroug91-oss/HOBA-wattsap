/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
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
