"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "./_components/PublicLayout";
import { ResortImage } from "./_components/ResortImage";
import {
  experienceImages,
  galleryImages,
  heroImage,
  roomOptions,
} from "./_lib/site-content";
import { useLanguage } from "./_components/LanguageProvider";

export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <PublicLayout>
      <main>
        <section className="relative min-h-screen overflow-hidden pt-32 text-white sm:pt-28">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b26]/95 to-[#0f2b26]/45" />
          <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center px-5 pb-16">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase text-[#f2c36b]">
                {t.hero.eyebrow}
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mb-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                {t.hero.body}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/booking"
                  className="rounded-md bg-[#f2c36b] px-6 py-3 font-bold text-[#17352f] hover:bg-[#ffd982]"
                >
                  {t.hero.primary}
                </Link>
                <Link
                  href="/rooms"
                  className="rounded-md border border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-[#17352f]"
                >
                  {t.hero.secondary}
                </Link>
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

            <div className="grid gap-4 sm:grid-cols-3">
              {experienceImages.map((item) => (
                <ResortImage
                  key={item.src}
                  src={item.src}
                  alt={language === "th" ? item.altTh : item.altEn}
                  className="h-72 shadow-lg"
                />
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
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef]"
                >
                  <ResortImage
                    src={item.src}
                    alt={language === "th" ? item.altTh : item.altEn}
                    className="h-72 rounded-none"
                  />
                  <figcaption className="p-4 font-bold">
                    {language === "th" ? item.altTh : item.altEn}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
