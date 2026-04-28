"use client";

import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { useLanguage } from "../_components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          body={t.about.body}
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
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
