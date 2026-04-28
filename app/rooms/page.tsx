"use client";

import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { roomOptions } from "../_lib/site-content";
import { useLanguage } from "../_components/LanguageProvider";

export default function RoomsPage() {
  const { t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <PageHeader
          eyebrow={t.rooms.eyebrow}
          title={t.rooms.title}
          body={t.rooms.intro}
          image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
        />

        <section className="bg-white px-5 py-20 text-[#17352f]">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {roomOptions.map((room) => {
              const translatedRoom = t.rooms.items[room.value];

              return (
                <article
                  key={room.value}
                  className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] shadow-sm"
                >
                  <div
                    className="h-72 w-full bg-cover bg-center"
                    role="img"
                    aria-label={translatedRoom.title}
                    style={{ backgroundImage: `url(${room.image})` }}
                  />
                  <div className="p-6 sm:p-8">
                    <p className="mb-2 text-sm font-bold text-[#b6782e]">
                      {translatedRoom.type}
                    </p>
                    <h2 className="mb-4 text-3xl font-bold">
                      {translatedRoom.title}
                    </h2>
                    <p className="mb-4 leading-7 text-[#52635d]">
                      {translatedRoom.desc}
                    </p>
                    <p className="leading-7 text-[#52635d]">
                      {translatedRoom.detail}
                    </p>
                    <Link
                      href="/booking"
                      className="mt-6 inline-block rounded-md bg-[#17352f] px-5 py-3 font-bold text-white hover:bg-[#25564c]"
                    >
                      {t.rooms.select}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
