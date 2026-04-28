"use client";

import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { ResortImage } from "../_components/ResortImage";
import { facilityCards } from "../_lib/site-content";
import { useLanguage } from "../_components/LanguageProvider";

export default function FacilitiesPage() {
  const { language, t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.facilities.eyebrow}
          title={t.facilities.title}
          body={t.facilities.intro}
          image="/images/pool1.jpg"
          imageAlt={
            language === "th"
              ? "สระว่ายน้ำกลางแจ้งบ้านอาปารีสอร์ท"
              : "Outdoor pool at Baan APA Resort"
          }
        />

        <section className="bg-[#17352f] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.facilities.items.map((item, index) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-lg border border-white/20 bg-white/10 text-xl font-bold shadow-lg"
                >
                  <ResortImage
                    src={facilityCards[index].image}
                    alt={
                      language === "th"
                        ? facilityCards[index].altTh
                        : facilityCards[index].altEn
                    }
                    className="h-56 rounded-none"
                  />
                  <div className="p-5">{item}</div>
                </div>
              ))}
            </div>
            <Link
              href="/booking"
              className="mt-10 inline-block rounded-md bg-[#f2c36b] px-5 py-3 font-bold text-[#17352f] hover:bg-[#ffd982]"
            >
              {t.common.bookNow}
            </Link>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
