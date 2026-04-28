"use client";

import { BookingForm } from "../_components/BookingForm";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { useLanguage } from "../_components/LanguageProvider";

export default function BookingPage() {
  const { t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.booking.eyebrow}
          title={t.booking.title}
          body={t.booking.body}
          image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80"
        />

        <section className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
          <div className="mx-auto max-w-3xl">
            <BookingForm />
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
