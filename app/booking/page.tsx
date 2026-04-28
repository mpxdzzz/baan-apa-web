"use client";

import { BookingForm } from "../_components/BookingForm";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { useLanguage } from "../_components/LanguageProvider";
import { bookingBannerImage } from "../_lib/site-content";

export default function BookingPage() {
  const { language, t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.booking.eyebrow}
          title={t.booking.title}
          body={t.booking.body}
          image={bookingBannerImage}
          imageAlt={
            language === "th"
              ? "บ้านพักสำหรับการจองบ้านอาปารีสอร์ท"
              : "Resort house for booking at Baan APA"
          }
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
