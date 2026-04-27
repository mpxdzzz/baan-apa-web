import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
