"use client";

import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { PublicLayout } from "../_components/PublicLayout";
import { lineOaUrl, roomOptions } from "../_lib/site-content";
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
          noImage
        />

        <section className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {roomOptions.map((room) => {
              const translatedRoom = t.rooms.items[room.value];

              return (
                <article
                  key={room.value}
                  className="flex min-h-full flex-col rounded-2xl border border-[#e2d4bd] bg-white p-6 shadow-xl shadow-[#6f4a2a]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
                >
                  <div className="flex-1">
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
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {room.labels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full bg-[#f7efe2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#5b3a22]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={lineOaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-block rounded-md bg-[#17352f] px-5 py-3 text-center font-bold text-white hover:bg-[#25564c]"
                  >
                    {t.rooms.select}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
