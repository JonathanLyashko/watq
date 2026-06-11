import Image from "next/image";
import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-violet-300/35 bg-white shadow-lg shadow-violet-500/10">
        <Image
          src="/WATQ_logo_Q_Color_pink_red.png"
          alt="WatQ logo"
          fill
          sizes="44px"
          className="object-contain p-1"
          priority
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-[var(--font-display)] text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
          WatQ
        </span>
        <span className="truncate font-mono text-[0.6rem] uppercase tracking-[0.16em] text-slate-500 sm:text-[0.68rem] sm:tracking-[0.18em]">
          Quantum Design Team
        </span>
      </span>
    </Link>
  );
}
