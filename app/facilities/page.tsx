"use client";

import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { useLanguage } from "../_components/LanguageProvider";

export default function FacilitiesPage() {
  const { t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.facilities.eyebrow}
          title={t.facilities.title}
          body={t.facilities.intro}
          noImage
        />

        <section className="bg-[#17352f] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.facilities.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/20 bg-white/10 p-6 text-xl font-bold shadow-lg"
                >
                  {item}
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
