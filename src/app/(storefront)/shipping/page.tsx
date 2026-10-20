import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Clock,
  PhoneCall,
  Calendar,
  CreditCard,
  Search,
  MapPin,
  AlertTriangle,
  AlertCircle,
  Camera,
  Globe2,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Package,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Shipping Policy for Bagzillas.com. Nationwide delivery across Pakistan in 3-5 business days, COD confirmation, tracking updates, and delivery guidelines.",
};

export default function ShippingPolicyPage() {
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
          <span className="text-stone-900 font-medium">Shipping Policy</span>
        </nav>

        {/* HERO / HEADER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs mb-8 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-0 opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Truck className="w-3.5 h-3.5 text-[#8B5E3C]" />
              Nationwide Delivery &amp; Logistics
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif mb-2">
              Shipping Policy
            </h1>

            <p className="text-stone-600 text-base sm:text-lg font-medium mb-3">
              Shipping Policy for <span className="text-stone-900 font-bold">Bagzillas.com</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>Last updated: {lastUpdated}</span>
              <span>•</span>
              <span>3–5 Business Days Nationwide</span>
              <span>•</span>
              <span>Cash on Delivery (COD) Available</span>
            </div>
          </div>
        </div>

        {/* WELCOME / SUMMARY BANNER */}
        <div className="bg-[#8B5E3C]/5 border border-[#8B5E3C]/20 rounded-2xl p-5 sm:p-6 mb-8 text-stone-800 text-sm sm:text-base leading-relaxed">
          <p className="font-medium">
            At <strong className="text-stone-900">Bagzillas.com</strong>, we are committed to delivering your
            orders safely, quickly, and transparently anywhere across Pakistan. Please review our shipping policy
            below for comprehensive details on dispatch timelines, courier tracking, and delivery expectations.
          </p>
        </div>

        {/* 3-STEP QUICK SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8B5E3C] flex items-center justify-center shrink-0 font-bold text-xs">
              01
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">Order Confirmation</h3>
              <p className="text-xs text-stone-500">COD orders confirmed via call or WhatsApp message before dispatch</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8B5E3C] flex items-center justify-center shrink-0 font-bold text-xs">
              02
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">Tracking Sent</h3>
              <p className="text-xs text-stone-500">Courier tracking ID provided via SMS or WhatsApp upon dispatch</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8B5E3C] flex items-center justify-center shrink-0 font-bold text-xs">
              03
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">Doorstep Delivery</h3>
              <p className="text-xs text-stone-500">Delivered within 3–5 business days across all cities in Pakistan</p>
            </div>
          </div>
        </div>

        {/* MAIN POLICY CONTENT */}
        <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs">

          {/* SECTION 1: ORDER PROCESSING */}
          <section id="order-processing" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Order Processing
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  How we verify and prepare your parcel for dispatch
                </p>
              </div>
            </div>

            <div className="space-y-3 pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p className="text-stone-700 text-sm">
                  All orders are processed within{" "}
                  <strong className="text-stone-900 font-semibold underline decoration-[#8B5E3C] decoration-2">
                    3 to 5 business days
                  </strong>{" "}
                  after confirmation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p className="text-stone-700 text-sm">
                  Orders placed on weekends or public holidays will be processed on the next working day.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <p className="text-stone-700 text-sm">
                  For Cash on Delivery (COD), orders are confirmed via call or message before dispatch.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 2: DELIVERY TIME */}
          <section id="delivery-time" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Delivery Time
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Estimated transit schedules across Pakistan
                </p>
              </div>
            </div>

            <div className="space-y-3 pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 text-sm block">Nationwide Delivery (Pakistan)</span>
                  <span className="text-sm text-stone-700 font-medium">
                    3–5 business days
                  </span>
                </div>
              </div>

              <p className="text-stone-600 text-sm">
                Delivery times may vary depending on your location and courier service availability.
              </p>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 3: SHIPPING CHARGES */}
          <section id="shipping-charges" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                3
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Shipping Charges
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Calculation and fee policies
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pl-0 sm:pl-11 text-sm text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>Shipping charges are calculated at checkout (if applicable).</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                <span>Any delivery charges paid are non-refundable.</span>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 4: ORDER TRACKING */}
          <section id="order-tracking" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                4
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Order Tracking
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Live updates on your parcel status
                </p>
              </div>
            </div>

            <div className="space-y-3 pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <Search className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div className="text-sm text-stone-700 space-y-1">
                  <p>
                    Once your order is shipped, you will receive a tracking ID via SMS or WhatsApp number.
                  </p>
                  <p className="text-stone-500 text-xs">
                    You can track your order through the courier’s official tracking system in real time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 5: DELIVERY ATTEMPTS */}
          <section id="delivery-attempts" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                5
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Delivery Attempts
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Ensuring successful delivery at your doorstep
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-sm text-stone-800">
                <p className="font-semibold text-stone-900">
                  Please ensure your contact number and address are correct when placing your order.
                </p>
                <p className="text-stone-700">
                  Couriers typically make up to 2–3 delivery attempts. If the order is not received or customer is unreachable, it may be returned to us.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 6: DELAYS IN SHIPPING */}
          <section id="delays-in-shipping" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                6
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Delays in Shipping
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Unforeseen circumstances and operational constraints
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-3">
              <p className="text-stone-600 text-sm">
                While we aim to deliver within the estimated time, delays may occur due to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-stone-700">
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Weather conditions</span>
                </li>
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Public holidays</span>
                </li>
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Courier service issues</span>
                </li>
                <li className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Remote locations</span>
                </li>
              </ul>
              <p className="text-xs text-stone-500 pt-1">
                We are not responsible for delays caused by third-party courier services.
              </p>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 7: INCORRECT ADDRESS */}
          <section id="incorrect-address" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                7
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Incorrect Address
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Accuracy of customer delivery details
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11 space-y-2.5 text-sm text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B5E3C] shrink-0 mt-0.5" />
                <span>Customers are responsible for providing accurate and complete shipping details.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                <span>We are not responsible for failed deliveries due to incorrect or incomplete addresses.</span>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 8: DAMAGED OR MISSING ITEMS */}
          <section id="damaged-or-missing-items" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                8
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Damaged or Missing Items
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Urgent reporting protocol for parcel discrepancies
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <p className="text-sm font-semibold text-stone-900">
                  If your order arrives damaged or incomplete:
                </p>
                <ul className="space-y-2 text-sm text-stone-800">
                  <li className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      Contact us within{" "}
                      <strong className="text-stone-900 underline decoration-amber-500">
                        24–48 hours
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Camera className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Provide clear photos/videos for verification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>We will assist you according to our Exchange Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 9: INTERNATIONAL SHIPPING */}
          <section id="international-shipping" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                9
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  International Shipping
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Geographical coverage
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-[#8B5E3C] shrink-0 mt-0.5" />
                <div className="text-sm text-stone-700 space-y-1">
                  <p className="font-semibold text-stone-900">
                    Currently, we only deliver within Pakistan.
                  </p>
                  <p className="text-stone-600">
                    International shipping is not available at this time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* SECTION 10: CONTACT US */}
          <section id="contact-us" className="scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-900 font-bold text-sm shrink-0">
                10
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                  Contact Us
                </h2>
                <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
                  Have inquiries regarding your shipment or delivery schedule?
                </p>
              </div>
            </div>

            <div className="pl-0 sm:pl-11">
              <p className="text-stone-600 text-sm mb-4">
                For shipping-related questions:
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
