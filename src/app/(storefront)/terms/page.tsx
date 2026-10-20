import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  ShoppingBag,
  CreditCard,
  Ban,
  Truck,
  RotateCcw,
  Info,
  ShieldAlert,
  AlertTriangle,
  RefreshCw,
  Landmark,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Bagzillas.com. Please review our legal terms, conditions, order acceptance policies, and usage guidelines.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-stone-50 min-h-screen py-8 sm:py-14">
      <SectionContainer className="max-w-4xl">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-900 font-medium">Terms of Service</span>
        </nav>

        {/* HERO / HEADER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs mb-8 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-0 opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5 text-[#8B5E3C]" />
              Legal Terms &amp; Conditions
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif mb-2">
              Terms of Service
            </h1>

            <p className="text-stone-600 text-base sm:text-lg font-medium mb-3">
              Terms of Service for <span className="text-stone-900 font-bold">Bagzillas.com</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>Last updated: {lastUpdated}</span>
              <span>•</span>
              <span>Governed by the laws of Pakistan</span>
              <span>•</span>
              <span>Applies to all visitors and customers</span>
            </div>
          </div>
        </div>

        {/* WELCOME / SUMMARY BANNER */}
        <div className="bg-[#8B5E3C]/5 border border-[#8B5E3C]/20 rounded-2xl p-5 sm:p-6 mb-8 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p className="font-medium">
            Please read these Terms of Service carefully before accessing or using our website. By accessing or
            using any part of <strong className="text-stone-900">Bagzillas.com</strong>, you agree to be bound by
            these terms and conditions.
          </p>
        </div>

        {/* MAIN POLICY CONTENT */}
        <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs">

          {/* SECTION 1: OVERVIEW */}
          <section id="overview" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Overview
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  General operational framework
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-sm text-stone-700 leading-relaxed">
                This website is operated by <strong className="text-stone-900">Bagzillas.com</strong>. Throughout
                the site, the terms “we”, “us” and “our” refer to Bagzillas.com. By visiting our site and/or
                purchasing something from us, you agree to be bound by the following Terms of Service.
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 2: ONLINE STORE TERMS */}
          <section id="online-store-terms" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Online Store Terms
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  User eligibility and compliance
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <p className="text-stone-600 text-sm">By using this website, you confirm that:</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You are at least the age of majority in your country or have permission from a guardian</span>
                </li>
                <li className="flex items-start gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You will not use our products for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex items-start gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You will not violate any laws in your jurisdiction</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 3: PRODUCTS AND SERVICES */}
          <section id="products-and-services" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                3
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Products and Services
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Availability, limits, and product depiction
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-2.5 text-sm text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>All products are subject to availability.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>We reserve the right to limit quantities or discontinue products at any time.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>
                  We try to display product colors and images accurately, but we cannot guarantee exact matches due to screen differences.
                </span>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 4: PRICING AND PAYMENTS */}
          <section id="pricing-and-payments" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                4
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Pricing and Payments
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Currency, modifications, and payment channels
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#8B5E3C]" />
                  <span className="font-semibold text-stone-900">
                    Prices are listed in PKR (Rs.) unless stated otherwise.
                  </span>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm">
                  We reserve the right to change prices at any time without notice.
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-sm font-bold text-stone-900 mb-2">We offer payment methods such as:</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-semibold text-stone-900">
                    Cash on Delivery (COD)
                  </span>
                  <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-semibold text-stone-900">
                    Bank Transfer / Mobile Wallets
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  Orders will only be processed after confirmation (for COD) or payment verification (for prepaid orders).
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 5: ORDER ACCEPTANCE & CANCELLATION */}
          <section id="order-acceptance" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                5
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Order Acceptance &amp; Cancellation
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Order review, refusal, and cancellation guidelines
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <p className="text-stone-700 text-sm">
                We reserve the right to refuse or cancel any order at our discretion. Orders may be canceled due to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm text-stone-700">
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-stone-600 shrink-0" />
                  <span>Product unavailability</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-stone-600 shrink-0" />
                  <span>Incorrect pricing / errors</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-stone-600 shrink-0" />
                  <span>Suspicious / fraud activity</span>
                </li>
              </ul>
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-800 font-medium">
                  Customers can cancel orders before dispatch only.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 6: SHIPPING & DELIVERY */}
          <section id="shipping-and-delivery" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                6
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Shipping &amp; Delivery
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Courier logistics and estimated timelines
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-2.5 text-sm text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>Delivery times are estimates and may vary depending on location.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>We are not responsible for delays caused by courier services or unforeseen circumstances.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>Shipping charges (if applicable) are displayed at checkout.</span>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 7: EXCHANGE POLICY */}
          <section id="exchange-policy" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                7
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Exchange Policy
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Exchange conditions and timeframes
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#8B5E3C]" />
                  <span className="font-semibold text-stone-900">
                    We follow a No Refund Policy.
                  </span>
                </div>
                <p className="text-stone-600">
                  Exchanges are only accepted under specific conditions (as outlined in our Return &amp; Exchange Policy).
                </p>
                <p className="text-xs text-stone-500 pt-1">
                  Customers must request exchanges within the given time frame.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 8: ACCURACY OF INFORMATION */}
          <section id="accuracy-of-information" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                8
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Accuracy of Information
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  General content disclaimer
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                <Info className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p>
                  We are not responsible if information on this site is not accurate, complete, or current.
                  Content is provided for general information only and may be updated without notice.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 9: PROHIBITED USES */}
          <section id="prohibited-uses" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                9
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Prohibited Uses
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Unlawful or disruptive platform activities
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <p className="text-stone-600 text-sm">You are prohibited from using the site:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-stone-700">
                <div className="p-3 bg-red-50/50 border border-red-200/60 rounded-xl flex items-center gap-2">
                  <Ban className="w-4 h-4 text-red-600 shrink-0" />
                  <span>For unlawful purposes</span>
                </div>
                <div className="p-3 bg-red-50/50 border border-red-200/60 rounded-xl flex items-center gap-2">
                  <Ban className="w-4 h-4 text-red-600 shrink-0" />
                  <span>To violate any laws or regulations</span>
                </div>
                <div className="p-3 bg-red-50/50 border border-red-200/60 rounded-xl flex items-center gap-2">
                  <Ban className="w-4 h-4 text-red-600 shrink-0" />
                  <span>To transmit viruses or malicious code</span>
                </div>
                <div className="p-3 bg-red-50/50 border border-red-200/60 rounded-xl flex items-center gap-2">
                  <Ban className="w-4 h-4 text-red-600 shrink-0" />
                  <span>To attempt to hack, spam, or disrupt</span>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 10: LIMITATION OF LIABILITY */}
          <section id="limitation-of-liability" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                10
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Limitation of Liability
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Legal scope and indemnity boundaries
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <p className="text-stone-600 text-sm">We shall not be liable for any:</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <ShieldAlert className="w-4 h-4 text-[#8B5E3C]" />
                  <span>Direct or indirect damages</span>
                </li>
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <ShieldAlert className="w-4 h-4 text-[#8B5E3C]" />
                  <span>Losses related to the use of our products or website</span>
                </li>
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <ShieldAlert className="w-4 h-4 text-[#8B5E3C]" />
                  <span>Delays, errors, or interruptions in service</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 11: CHANGES TO TERMS */}
          <section id="changes-to-terms" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                11
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Changes to Terms
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Right of modification
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                <RefreshCw className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p>
                  We reserve the right to update or modify these Terms of Service at any time. Changes will take
                  effect immediately upon posting on this page.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 12: GOVERNING LAW */}
          <section id="governing-law" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                12
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Governing Law
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Applicable jurisdiction
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                <Landmark className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p>
                  These Terms shall be governed by and interpreted in accordance with the laws of{" "}
                  <strong className="text-stone-900">Pakistan</strong>.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 13: CONTACT INFORMATION */}
          <section id="contact-information" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                13
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Legal and service inquiries
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-4">
                For any questions regarding these Terms:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:mianfaizan3881@gmail.com"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#8B5E3C] shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-stone-900 group-hover:text-[#8B5E3C] transition-colors break-all">
                      mianfaizan3881@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:03432878749"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#8B5E3C] shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-stone-900 group-hover:text-[#8B5E3C] transition-colors">
                      +92 341 2345061
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923412345061"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp: +92 341 2345061
                </a>
              </div>
            </div>
          </section>

        </div>
      </SectionContainer>
    </div>
  );
}
