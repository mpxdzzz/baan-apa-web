"use client";

import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { contactImage, lineOaUrl } from "../_lib/site-content";
import { useLanguage } from "../_components/LanguageProvider";
import { ResortImage } from "../_components/ResortImage";

export default function ContactPage() {
  const { language, t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          body={t.contact.body}
          image={contactImage}
          imageAlt={
            language === "th"
              ? "วิวสงบภายในบ้านอาปารีสอร์ท"
              : "Calming resort view at Baan APA"
          }
        />

        <section className="bg-white px-5 py-20 text-[#17352f]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] p-6 shadow-sm sm:p-8">
              <ResortImage
                src={contactImage}
                alt={
                  language === "th"
                    ? "ภาพรีสอร์ทบรรยากาศสงบ"
                    : "Calming resort image"
                }
                className="mb-6 h-72 shadow-md"
              />
              <p className="mb-3 text-2xl font-bold">{t.brand}</p>
              <p className="mb-2 text-[#52635d]">{t.contact.location}</p>
              <p className="mb-6 text-[#52635d]">{t.contact.note}</p>
              <a
                href={lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-md bg-[#06c755] px-5 py-3 font-bold text-white hover:bg-[#05b34c]"
              >
                {t.contact.line}
              </a>
            </div>

            <div className="rounded-lg border border-[#e2d4bd] bg-[#17352f] p-6 text-white shadow-sm sm:p-8">
              <p className="mb-4 text-sm font-bold uppercase text-[#f2c36b]">
                {t.booking.eyebrow}
              </p>
              <h2 className="mb-4 text-3xl font-bold">{t.booking.title}</h2>
              <p className="mb-6 leading-8 text-white/80">{t.booking.body}</p>
              <a
                href="/booking"
                className="inline-block rounded-md bg-[#f2c36b] px-5 py-3 font-bold text-[#17352f] hover:bg-[#ffd982]"
              >
                {t.common.bookNow}
              </a>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
