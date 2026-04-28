"use client";

import { lineOaUrl } from "../_lib/site-content";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-[#102722] px-5 py-8 text-center text-white">
        <p className="font-bold">{t.brand}</p>
        <p className="mt-2 text-sm text-white/70">Baan APA Resort</p>
      </footer>

      <a
        href={lineOaUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-md bg-[#06c755] px-5 py-3 font-bold text-white shadow-lg hover:bg-[#05b34c]"
      >
        {t.common.line}
      </a>
    </>
  );
}
