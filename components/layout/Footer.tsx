import Link from "next/link";

const mainPages = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Request Quote", href: "/contact" },
];

const serviceDisciplines = [
  { label: "Online Class Management", href: "/services#management" },
  { label: "Assignment & Essay Help", href: "/services#assignments" },
  { label: "Quiz & Proctored Exam Prep", href: "/services#exams" },
  { label: "Discussion Forum Posts", href: "/services#discussions" },
  { label: "Full Term Coursework", href: "/services#coursework" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-12 border-t border-white/10" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Top Callout */}
        <div className="pb-16 mb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              Academic Support Redefined
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ready to elevate your online education experience?
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Confidential, professional coursework and class management support for busy students nationwide.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-charcoal hover:bg-gold hover:text-white rounded-full font-semibold text-sm transition-all duration-200 shadow-lg group"
            >
              <span>Consult Academic Specialist</span>
              <span className="w-2 h-2 rounded-full bg-gold group-hover:bg-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-white tracking-tight">
                tmocu<span className="text-gold">°</span>
              </span>
            </Link>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              TakeMyOnlineClassUSA (TMOCU) provides dedicated academic support services for higher education students managing rigorous coursework, tight deadlines, and complex online portals.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Specialists Available 24/7
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {mainPages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceDisciplines.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>
            © {new Date().getFullYear()} TakeMyOnlineClassUSA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
