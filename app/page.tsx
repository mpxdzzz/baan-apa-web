"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "./_components/PublicLayout";
import { ResortImage } from "./_components/ResortImage";
import {
  galleryImages,
  heroImage,
  lineOaUrl,
  roomOptions,
} from "./_lib/site-content";
import { useLanguage } from "./_components/LanguageProvider";

export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <section className="relative min-h-screen overflow-hidden text-white">
          <Image
            src={heroImage}
            alt={
              language === "th"
                ? "ภาพมุมสูงของบ้านอาปารีสอร์ท"
                : "Aerial view of Baan APA Resort"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,23,20,0.74),rgba(8,23,20,0.38)_42%,rgba(8,23,20,0.86)),radial-gradient(circle_at_center,rgba(242,195,107,0.18),transparent_42%)]" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-28 text-center">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#f2c36b]">
                Nature Retreat in Kanchanaburi
              </p>
              <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
                Baan APA Erawan Resort
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
                Nature Retreat in Kanchanaburi
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/booking"
                  className="rounded-md bg-[#f2c36b] px-8 py-4 font-bold text-[#17352f] shadow-lg shadow-black/20 hover:bg-[#ffd982]"
                >
                  Book Now
                </Link>
                <a
                  href={lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/80 px-8 py-4 font-bold text-white shadow-lg shadow-black/20 hover:bg-white hover:text-[#17352f]"
                >
                  Contact via LINE
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold text-[#b6782e]">
                {t.about.eyebrow}
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
                {t.about.title}
              </h2>
              <p className="text-lg leading-8 text-[#52635d]">{t.about.body}</p>
              <Link
                href="/about"
                className="mt-6 inline-block rounded-md bg-[#17352f] px-5 py-3 font-bold text-white hover:bg-[#25564c]"
              >
                {t.common.learnMore}
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {t.about.stats.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#e2d4bd] bg-white p-5 text-lg font-bold shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-[#17352f]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-bold text-[#b6782e]">
                  {t.rooms.eyebrow}
                </p>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  {t.rooms.title}
                </h2>
              </div>
              <Link
                href="/rooms"
                className="rounded-md border border-[#17352f] px-5 py-3 text-center font-bold text-[#17352f] hover:bg-[#17352f] hover:text-white"
              >
                {t.common.viewRooms}
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {roomOptions.map((room) => {
                const translatedRoom = t.rooms.items[room.value];

                return (
                  <article
                    key={room.value}
                    className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] shadow-sm"
                  >
                    <ResortImage
                      src={room.image}
                      alt={translatedRoom.title}
                      className="h-64 rounded-none"
                    />
                    <div className="p-6">
                      <p className="mb-2 text-sm font-bold text-[#b6782e]">
                        {translatedRoom.type}
                      </p>
                      <h3 className="mb-3 text-2xl font-bold">
                        {translatedRoom.title}
                      </h3>
                      <p className="leading-7 text-[#52635d]">
                        {translatedRoom.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#17352f] px-5 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold text-[#f2c36b]">
              {t.facilities.eyebrow}
            </p>
            <h2 className="mb-8 text-3xl font-bold leading-tight sm:text-4xl">
              {t.facilities.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.facilities.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/20 bg-white/10 p-5 text-lg font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-[#17352f]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-bold text-[#b6782e]">
                  {t.gallery.eyebrow}
                </p>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  {t.gallery.title}
                </h2>
              </div>
              <Link
                href="/gallery"
                className="rounded-md border border-[#17352f] px-5 py-3 text-center font-bold text-[#17352f] hover:bg-[#17352f] hover:text-white"
              >
                {t.common.viewGallery}
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.slice(0, 8).map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] shadow-sm"
                >
                  <ResortImage
                    src={item.src}
                    alt={language === "th" ? item.altTh : item.altEn}
                    className="h-72 rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
