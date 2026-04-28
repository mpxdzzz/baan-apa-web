"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#102722] px-5 py-6 text-center text-white">
      <p className="text-sm text-white/60">
        Copyright (c) {year} Baan APA Erawan Resort. All rights reserved.
      </p>
    </footer>
  );
}
