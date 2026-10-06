import React, { useState, useRef } from 'react';
import { User, Phone, Lock, Flame } from 'lucide-react';
import { storeConfig } from '../config/storeConfig';

interface OrderFormProps {
  formRef: React.RefObject<HTMLDivElement | null>;
  nameInputRef: React.RefObject<HTMLInputElement | null>;
}

export function OrderForm({ formRef, nameInputRef }: OrderFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState('');

  const { price, currency, discountTag } = storeConfig.product;
  const { phoneNumber, formatOrderMessage, generalMessage } = storeConfig.whatsapp;

  // Build real-time WhatsApp URL with prefilled user order details
  const getWhatsAppOrderUrl = () => {
    const message =
      fullName.trim() && phone.trim()
        ? formatOrderMessage(fullName.trim(), phone.trim())
        : generalMessage;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!fullName.trim()) {
      e.preventDefault();
      setFormError('المرجو إدخال الاسم الكامل أولاً');
      nameInputRef.current?.focus();
      return;
    }

    if (!phone.trim()) {
      e.preventDefault();
      setFormError('المرجو إدخال رقم الهاتف للتواصل معك');
      return;
    }

    setFormError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setFormError('المرجو إدخال الاسم ورقم الهاتف لتأكيد الطلب');
      return;
    }

    // Open WhatsApp safely in a new tab without iframe interference
    const link = document.createElement('a');
    link.href = getWhatsAppOrderUrl();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={formRef}
      className="bg-white rounded-3xl border-2 border-emerald-800/35 shadow-xl p-4 sm:p-6 relative overflow-hidden"
    >
      {/* Price & Discount Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="text-right">
          <span className="text-[#134938] font-['Cairo',sans-serif] font-black text-2xl sm:text-3xl tracking-tight">
            فقط بـ {price} {currency}
          </span>
        </div>

        <div className="bg-[#d45237] text-white px-3.5 py-1.5 rounded-full font-black text-xs sm:text-sm shadow-md flex items-center gap-1">
          <Flame className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
          <span>{discountTag}</span>
        </div>
      </div>

      <h2 className="text-[#134938] font-['Cairo',sans-serif] font-black text-lg sm:text-xl text-center mt-3">
        ادخل معلوماتك لتأكيد الطلب
      </h2>

      <div className="w-20 h-0.5 bg-gray-500/70 mx-auto my-2.5 rounded-full"></div>

      {/* Form Fields */}
      <form onSubmit={handleFormSubmit} className="space-y-3 mt-3">
        {/* Full Name Input */}
        <div>
          <label className="sr-only" htmlFor="fullname">
            الاسم الكامل
          </label>
          <div className="relative">
            <input
              ref={nameInputRef}
              id="fullname"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="الاسم الكامل"
              className="w-full bg-white border-2 border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 rounded-2xl py-3 pr-11 pl-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 transition-all outline-none"
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-5 h-5 text-emerald-800/70" />
            </div>
          </div>
        </div>

        {/* Phone Input */}
        <div>
          <label className="sr-only" htmlFor="phone">
            رقم الهاتف
          </label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="رقم الهاتف (مثال: 0612345678)"
              className="w-full bg-white border-2 border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 rounded-2xl py-3 pr-11 pl-4 text-sm font-semibold text-slate-800 placeholder:text-slate-400 transition-all outline-none"
              dir="ltr"
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-5 h-5 text-emerald-800/70" />
            </div>
          </div>
        </div>

        {/* Form Error Display */}
        {formError && (
          <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-bold text-center">
            {formError}
          </div>
        )}

        {/* Animated WhatsApp Submit Button */}
        <a
          href={getWhatsAppOrderUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="w-full bg-[#1b5b48] hover:bg-[#144738] active:scale-[0.98] text-white font-['Cairo',sans-serif] font-black text-lg sm:text-xl py-3.5 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-emerald-500/30 animate-cta-bounce text-center"
        >
          <span className="text-2xl animate-finger-tap-h">👉</span>
          <span>اضغط هنا لطلب الباقة عبر واتساب !</span>
        </a>

        {/* Encryption & Security Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium pt-1">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>معلوماتك مشفرة ومحمية ولن نشاركها مع أي جهة</span>
        </div>
      </form>
    </section>
  );
}
