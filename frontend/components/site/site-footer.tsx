import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { navLinks, socialLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1fr_auto] md:px-8">
        <div className="space-y-4">
          <BrandMark />
          <Image
            src="/WATQ_logo_full_name_BW.png"
            alt="WatQ wordmark"
            width={440}
            height={110}
            className="h-auto w-full max-w-[15rem] opacity-70"
          />
          <p className="max-w-md text-sm leading-7 text-slate-600">
            A student-led design team exploring quantum systems through
            hardware, software, and technical experimentation.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="eyebrow">Pages</p>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="eyebrow">Social</p>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              {socialLinks.map((link, index) => (
                <Link key={`${link.label}-${index}`} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
