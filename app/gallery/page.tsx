"use client";

import { GalleryGrid } from "../_components/GalleryGrid";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { useLanguage } from "../_components/LanguageProvider";

export default function GalleryPage() {
  const { language, t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          body={t.gallery.intro}
          image="/images/view4.jpg"
          imageAlt={
            language === "th"
              ? "วิวธรรมชาติภายในบ้านอาปารีสอร์ท"
              : "Natural view inside Baan APA Resort"
          }
        />

        <section className="bg-white px-5 py-20 text-[#17352f]">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 max-w-3xl text-lg leading-8 text-[#52635d]">
              {t.gallery.intro}
            </p>
            <GalleryGrid />
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
