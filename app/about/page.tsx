"use client";

import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { useLanguage } from "../_components/LanguageProvider";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const story =
    language === "th"
      ? "“บ้านอาปา” ตั้งตามคำที่เราเรียกคุณพ่อ “อาปา” ผู้เป็นเจ้าของบ้านหลังนี้ และอนุรักษ์จุดเด่นความเป็นบ้านทรงไทยนี้ให้คงอยู่ และเป็น “บ้าน” ที่คนพักอาศัยรู้สึกอยู่แล้วสบาย อบอุ่น ปลอดภัย ท่ามกลางความเป็นธรรมชาติของต้นไม้ ภูเขา ที่เป็นเสน่ห์เฉพาะตัวของกาญจนบุรี"
      : "“Baan APA” is named after the word we use for our father, “Apa,” the owner of this home. We preserve the character of this Thai-style house so it remains a true home where guests feel comfortable, warm, and safe among the trees, mountains, and natural charm of Kanchanaburi.";

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          body={t.about.body}
          noImage
        />

        <section className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="grid gap-4">
              {t.about.stats.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#e2d4bd] bg-white p-6 text-xl font-bold shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-[#e2d4bd] bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-6 border-l-2 border-[#c28b41] pl-5 text-lg font-semibold leading-8 text-[#5b3a22]">
                {story}
              </p>
              <p className="mb-5 text-lg leading-8 text-[#52635d]">
                {t.about.body}
              </p>
              <p className="text-lg leading-8 text-[#52635d]">
                {t.about.extended}
              </p>
              <Link
                href="/booking"
                className="mt-8 inline-block rounded-md bg-[#17352f] px-5 py-3 font-bold text-white hover:bg-[#25564c]"
              >
                {t.common.bookNow}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
