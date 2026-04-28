"use client";

import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { galleryImages } from "../_lib/site-content";
import { useLanguage } from "../_components/LanguageProvider";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          body={t.gallery.intro}
          image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=80"
        />

        <section className="bg-white px-5 py-20 text-[#17352f]">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((item) => (
              <figure
                key={item.key}
                className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] shadow-sm"
              >
                <div
                  className="h-80 w-full bg-cover bg-center"
                  role="img"
                  aria-label={t.gallery.items[item.key]}
                  style={{ backgroundImage: `url(${item.src})` }}
                />
                <figcaption className="p-4 text-lg font-bold">
                  {t.gallery.items[item.key]}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
