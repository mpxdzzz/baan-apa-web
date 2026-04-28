"use client";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
