"use client";

import { lineOaUrl } from "../_lib/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-[#e3d0b4] bg-[#102722] px-5 py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-bold">Baan APA Erawan Resort</p>
          <p className="text-sm text-white/60">
            Copyright (c) {year} Baan APA Erawan Resort. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href={lineOaUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-md bg-[#06c755] px-5 py-3 font-bold text-white shadow-lg hover:bg-[#05b34c]"
      >
        LINE OA
      </a>
    </>
  );
}
