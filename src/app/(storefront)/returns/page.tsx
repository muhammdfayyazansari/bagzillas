import type { Metadata } from "next";
import Link from "next/link";
import {
  RotateCcw,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CreditCard,
  Truck,
  FileCheck2,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Camera,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description:
    "Return & Refund Policy for Bagzillas.com. 7-day hassle-free returns, digital COD refunds, and transparent exchange guidelines.",
};

export default function ReturnsPolicyPage() {
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
          <span className="text-stone-900 font-medium">Return &amp; Refund Policy</span>
        </nav>

        {/* HERO / HEADER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs mb-8 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-0 opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <RotateCcw className="w-3.5 h-3.5 text-[#8B5E3C]" />
              Customer Protection &amp; Guarantee
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif mb-2">
              Return &amp; Refund Policy
            </h1>

            <p className="text-stone-600 text-base sm:text-lg font-medium mb-3">
              Return &amp; Refund Policy for <span className="text-stone-900 font-bold">Bagzillas.com</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>Last updated: {lastUpdated}</span>
              <span>•</span>
              <span>7-Day Return Window</span>
              <span>•</span>
              <span>Fast Digital Refunds</span>
            </div>
          </div>
        </div>

        {/* INTRO CALLOUT */}
        <div className="bg-[#8B5E3C]/5 border border-[#8B5E3C]/20 rounded-2xl p-5 sm:p-6 mb-8 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p className="font-medium">
            At <strong className="text-stone-900">Bagzillas.com</strong>, we strive to ensure customer satisfaction.
            If you are not completely satisfied with your purchase, you may request a return or exchange under the
            terms outlined below.
          </p>
        </div>

        {/* QUICK PROCESS OVERVIEW BANNER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8B5E3C] flex items-center justify-center shrink-0 font-bold text-xs">
              01
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">Contact Us</h3>
              <p className="text-xs text-stone-500">Reach out within 7 days via WhatsApp with your order number &amp; photos</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8B5E3C] flex items-center justify-center shrink-0 font-bold text-xs">
              02
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">Quick Inspection</h3>
              <p className="text-xs text-stone-500">Ship the unused bag in original condition with tags intact</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8B5E3C] flex items-center justify-center shrink-0 font-bold text-xs">
              03
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">Refund / Exchange</h3>
              <p className="text-xs text-stone-500">Receive digital refund via Bank/JazzCash/EasyPaisa or replacement</p>
            </div>
          </div>
        </div>

        {/* MAIN POLICY CONTENT */}
        <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs">

          {/* SECTION 1: RETURN ELIGIBILITY */}
          <section id="return-eligibility" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Return Eligibility
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Requirements for returning or exchanging an item
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-0 sm:pl-11">
              {/* 1.1 Time Frame */}
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-1">
                    1.1 Time Frame
                  </h3>
                  <p className="text-stone-700 text-sm">
                    Returns or exchange requests must be made within{" "}
                    <strong className="text-stone-900 font-semibold underline decoration-[#8B5E3C] decoration-2">
                      7 days
                    </strong>{" "}
                    of receiving your order.
                  </p>
                </div>
              </div>

              {/* 1.2 Condition of Items */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-sm font-bold text-stone-900 mb-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8B5E3C]" />
                  1.2 Condition of Items
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  To be eligible for a return:
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Item must be unused and must in original condition</span>
                  </li>
                  <li className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>All tags and packaging must be intact</span>
                  </li>
                  <li className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Item must not be damaged by the customer</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 2: NON-RETURNABLE ITEMS */}
          <section id="non-returnable-items" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Non-Returnable Items
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Items exempt from return or exchange
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-3">
                The following items are not eligible for return:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-sm block">Sale / Discounted</span>
                    <span className="text-xs text-stone-600">Sale or discounted items</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-sm block">Customized Items</span>
                    <span className="text-xs text-stone-600">Customized or personalized products</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 text-sm block">Misuse Damage</span>
                    <span className="text-xs text-stone-600">Items damaged due to misuse</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 3: REASONS FOR RETURN/EXCHANGE */}
          <section id="reasons-for-return" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                3
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Reasons for Return / Exchange
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Valid cases accepted for processing
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-3">
                We accept returns or exchanges in the following cases:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">Wrong Item Delivered</span>
                    <span className="text-xs text-stone-600">You received an item different from your placed order</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">Damaged or Defective Product</span>
                    <span className="text-xs text-stone-600">Item arrived with structural damage or manufacturing defect</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 4: RETURN PROCESS */}
          <section id="return-process" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                4
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Return Process
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Simple steps to initiate and complete your request
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-0 sm:pl-11">
              {/* 4.1 Request a Return */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#8B5E3C]" />
                  4.1 Request a Return
                </h3>
                <p className="text-stone-600 text-sm mb-3">To initiate a return:</p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] mt-2 shrink-0" />
                    <span>
                      Contact us via{" "}
                      <a
                        href="https://wa.me/923412345061"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#8B5E3C] font-semibold hover:underline"
                      >
                        +92 341 2345061
                      </a>{" "}
                      within 7 days
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] mt-2 shrink-0" />
                    <span>Provide your order number and clear images of the product</span>
                  </li>
                </ul>
              </div>

              {/* 4.2 Approval */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-sm font-bold text-stone-900 mb-1 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#8B5E3C]" />
                  4.2 Approval
                </h3>
                <p className="text-stone-700 text-sm">
                  Once approved, we will guide you on the return process and provide the return parcel delivery address.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 5: REFUND POLICY */}
          <section id="refund-policy" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                5
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Refund Policy
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Payout options, processing channels, and turnaround times
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-0 sm:pl-11">
              {/* 5.1 Refund Method */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#8B5E3C]" />
                  5.1 Refund Method
                </h3>
                <p className="text-stone-600 text-sm mb-3">Refunds are issued via:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-semibold text-stone-900">
                    Bank Transfer
                  </span>
                  <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-semibold text-stone-900">
                    EasyPaisa
                  </span>
                  <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-semibold text-stone-900">
                    JazzCash
                  </span>
                </div>
                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-stone-800 font-medium">
                    Cash on Delivery (COD) orders are refunded digitally (not in cash) directly to your Bank account, EasyPaisa, or JazzCash wallet.
                  </p>
                </div>
              </div>

              {/* 5.2 Processing Time */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-1">
                    5.2 Processing Time
                  </h3>
                  <p className="text-stone-700 text-sm">
                    Refunds are processed within{" "}
                    <strong className="text-stone-900 font-semibold">
                      8–12 business days
                    </strong>{" "}
                    after we receive and inspect the returned item.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 6: EXCHANGE POLICY */}
          <section id="exchange-policy" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                6
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Exchange Policy
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Product availability and substitutions
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-2.5 text-sm text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <RefreshCw className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>Exchanges are subject to product availability.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>If the requested item is unavailable, a refund will be issued instead.</span>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 7: SHIPPING COSTS */}
          <section id="shipping-costs" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                7
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Shipping Costs
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Courier charges breakdown for returns and exchanges
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div className="space-y-1.5 text-sm text-stone-700">
                  <p>
                    Customers are responsible for return shipping charges unless:
                  </p>
                  <p className="font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
                    ✓ The item received was defective or incorrect
                  </p>
                  <p className="text-xs text-stone-500 pt-1">
                    Delivery charges must be charged for return or exchange.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 8: DAMAGED OR INCORRECT ITEMS */}
          <section id="damaged-or-incorrect-items" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                8
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Damaged or Incorrect Items
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Immediate 48-hour reporting procedure
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <p className="text-sm font-semibold text-stone-900">
                  If you receive a damaged or wrong item:
                </p>
                <ul className="space-y-2 text-sm text-stone-800">
                  <li className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      Report it within{" "}
                      <strong className="text-stone-900 underline decoration-amber-500">
                        48 hours of delivery
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Camera className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Provide photo/video proof for quick resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 9: CONTACT US */}
          <section id="contact-us" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                9
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Contact Us
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Need help with a return or refund? Get in touch today.
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-4">
                For returns, refunds, or queries:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:mianfaizan3781@gmail.com"
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
                      mianfaizan3781@gmail.com
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
