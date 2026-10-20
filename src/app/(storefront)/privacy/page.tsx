import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileText,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  Database,
  Truck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Bagzillas.com. Learn how we collect, use, and protect your personal information when you shop with us.",
};

export default function PrivacyPolicyPage() {
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
          <span className="text-stone-900 font-medium">Privacy Policy</span>
        </nav>

        {/* HERO / HEADER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs mb-8 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-0 opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B5E3C]" />
              Legal &amp; Transparency
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif mb-2">
              Privacy Policy
            </h1>

            <p className="text-stone-600 text-base sm:text-lg font-medium mb-3">
              Privacy Policy for <span className="text-stone-900 font-bold">Bagzillas.com</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>Last updated: {lastUpdated}</span>
              <span>•</span>
              <span>Applies to all visitors and customers</span>
            </div>
          </div>
        </div>

        {/* WELCOME / INTRO CALLOUT */}
        <div className="bg-[#8B5E3C]/5 border border-[#8B5E3C]/20 rounded-2xl p-5 sm:p-6 mb-8 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p className="font-medium">
            Welcome to <strong className="text-stone-900">Bagzillas.com</strong>. Your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your personal information when you
            visit or make a purchase from our website.
          </p>
        </div>

        {/* MAIN POLICY CONTENT */}
        <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs">

          {/* SECTION 1 */}
          <section id="information-we-collect" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Information We Collect
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  The data we gather to deliver a seamless shopping experience
                </p>
              </div>
            </div>

            <div className="space-y-5 pl-0 sm:pl-11">
              {/* 1.1 Personal Information */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#8B5E3C]" />
                  1.1 Personal Information
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  When you place an order or interact with our store, we may collect:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-stone-700">
                  <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full name</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Billing and shipping address</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Phone number</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Email address</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200 sm:col-span-2">
                    <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Payment details (processed securely via third-party providers)</span>
                  </li>
                </ul>
              </div>

              {/* 1.2 Order Information */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#8B5E3C]" />
                  1.2 Order Information
                </h3>
                <p className="text-stone-600 text-sm mb-3">
                  Details related to your purchases, including:
                </p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
                    <span>Products ordered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
                    <span>Order value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C]" />
                    <span>Transaction history</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 2 */}
          <section id="how-we-use-your-information" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  How We Use Your Information
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Ensuring prompt deliveries, secure transactions, and exceptional support
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-3">We use your information to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <Truck className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                  <span>Process and deliver your orders</span>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                  <span>Communicate with you regarding your purchases</span>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                  <span>Provide customer support</span>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                  <span>Improve our website and services</span>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                  <span>Prevent fraud and enhance security</span>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                  <span>Send promotional offers (only if you opt in)</span>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 3 */}
          <section id="sharing-your-information" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                3
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Sharing Your Information
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Strict privacy boundaries and trusted operational partners
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>We do not sell your personal information.</strong> Your trust is our highest priority.
                </span>
              </div>

              <p className="text-stone-600 text-sm">
                However, we may share your data with:
              </p>

              <ul className="space-y-2.5 text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] mt-2 shrink-0" />
                  <span>Payment gateways and banks for transaction processing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] mt-2 shrink-0" />
                  <span>Courier and delivery services for order fulfillment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] mt-2 shrink-0" />
                  <span>Service providers (e.g., Shopify, analytics tools)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] mt-2 shrink-0" />
                  <span>Legal authorities if required by law</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 4 */}
          <section id="data-retention" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                4
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Data Retention
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  How long we hold records on our systems
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-3">
                We retain your personal information only as long as necessary to:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#8B5E3C]" />
                  <span>Fulfill orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#8B5E3C]" />
                  <span>Comply with legal obligations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#8B5E3C]" />
                  <span>Resolve disputes</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 5 */}
          <section id="data-security" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                5
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Data Security
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Protecting your sensitive data with modern standards
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p className="text-stone-700 text-sm leading-relaxed">
                  We take reasonable precautions and follow industry best practices to protect your
                  personal information from unauthorized access, misuse, or disclosure.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 6 */}
          <section id="your-rights" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                6
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Your Rights
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Full control over your personal records
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <p className="text-stone-600 text-sm">You have the right to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm text-stone-700">
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] shrink-0" />
                  <span>Access your personal data</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] shrink-0" />
                  <span>Request corrections or updates</span>
                </li>
                <li className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] shrink-0" />
                  <span>Opt out of marketing communications</span>
                </li>
              </ul>
              <p className="text-stone-500 text-xs pt-1">
                To exercise these rights, contact us at the details below.
              </p>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 7 */}
          <section id="changes-to-policy" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                7
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Ongoing compliance and updates
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-stone-700 text-sm leading-relaxed">
                  We may update this policy from time to time. Changes will be posted on this page with an
                  updated effective date.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 8 */}
          <section id="contact-us" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                8
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Contact Us
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Questions regarding your privacy? We are here to assist.
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
                      03432878749
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923432878749"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp: 03432878749
                </a>
              </div>
            </div>
          </section>

        </div>
      </SectionContainer>
    </div>
  );
}
