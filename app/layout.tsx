import type { Metadata } from "next";
import { LanguageProvider } from "./_components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "บ้านอาปา รีสอร์ท | Baan APA Resort",
  description:
    "บ้านอาปา รีสอร์ท ที่พักบรรยากาศสงบใกล้ธรรมชาติ พร้อมสระว่ายน้ำ สวน ที่จอดรถ และระบบจองห้องพักออนไลน์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
