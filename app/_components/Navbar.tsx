"use client";

import Link from "next/link";
import { lineOaUrl, navLinks } from "../_lib/site-content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/20 bg-[#17352f]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <Link href="/" className="text-base font-bold sm:text-lg">
          {t.brand}
        </Link>

        <nav className="order-3 flex w-full gap-2 overflow-x-auto pb-1 text-sm font-medium lg:order-2 lg:w-auto lg:items-center lg:gap-5 lg:overflow-visible lg:pb-0">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-2 py-1 hover:bg-white/10 hover:text-[#f2c36b]"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 lg:order-3">
          <LanguageSwitcher />
          <a
            href={lineOaUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#06c755] px-3 py-2 text-sm font-bold text-white hover:bg-[#05b34c] sm:px-4"
          >
            {t.common.line}
          </a>
        </div>
      </div>
    </header>
  );
}
