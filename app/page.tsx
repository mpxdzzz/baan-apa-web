"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "./_components/PublicLayout";
import {
  galleryImages,
  heroImage,
  lineOaUrl,
  roomOptions,
} from "./_lib/site-content";
import { useLanguage } from "./_components/LanguageProvider";

const homeCopy = {
  th: {
    heroSubtitle: "Luxury Nature Retreat in Kanchanaburi",
    book: "จองห้องพัก",
    line: "Contact via LINE",
    badges: ["Nature Stay", "Family Friendly", "Near Erawan", "Private Retreat"],
    introEyebrow: "Baan APA Erawan Resort",
    introTitle: "รีสอร์ทธรรมชาติสำหรับการพักผ่อนที่สงบและมีระดับ",
    introBody:
      "บ้านอาปาเอราวัณรีสอร์ทออกแบบเพื่อให้ทุกช่วงเวลารู้สึกผ่อนคลาย เป็นส่วนตัว และอบอุ่น เหมาะสำหรับครอบครัว คู่รัก และกลุ่มเพื่อนที่อยากพักใกล้ธรรมชาติในกาญจนบุรี",
    introQuote: "พักให้ช้าลง หายใจให้ลึกขึ้น และปล่อยให้ธรรมชาติดูแลวันหยุดของคุณ",
    experiencesEyebrow: "Signature Experiences",
    experiencesTitle: "ประสบการณ์พักผ่อนที่เป็นเอกลักษณ์",
    experiences: [
      {
        title: "Nature Retreat",
        body: "พื้นที่สีเขียว วิวธรรมชาติ และบรรยากาศสงบสำหรับการพักผ่อนอย่างแท้จริง",
        image: "/images/view4.jpg",
      },
      {
        title: "Family Stay",
        body: "ห้องพักและพื้นที่ส่วนกลางที่เหมาะกับครอบครัวหรือทริปกลุ่มเพื่อน",
        image: "/images/house2.jpg",
      },
      {
        title: "Local Experience",
        body: "สัมผัสกิจกรรมริมน้ำ แพ เรือ และเสน่ห์เรียบง่ายของกาญจนบุรี",
        image: "/images/raft2.jpg",
      },
    ],
    roomsEyebrow: "Stay",
    roomsTitle: "ห้องพักอบอุ่นสำหรับทุกทริป",
    roomsBody: "เลือกห้องพักที่เหมาะกับจำนวนผู้เข้าพักและจังหวะการพักผ่อนของคุณ",
    viewRooms: "ดูห้องพักทั้งหมด",
    facilitiesEyebrow: "Facilities",
    facilitiesTitle: "ครบสำหรับวันพักผ่อนที่ง่ายและสบาย",
    facilities: ["สระว่ายน้ำ", "สวนและพื้นที่พักผ่อน", "ที่จอดรถ", "แพและกิจกรรมท้องถิ่น"],
    viewFacilities: "ดูสิ่งอำนวยความสะดวก",
    galleryEyebrow: "Gallery",
    galleryTitle: "ภาพบรรยากาศแห่งการพักผ่อน",
    viewGallery: "ดูแกลเลอรี",
    ctaTitle: "พร้อมเริ่มต้นวันพักผ่อนที่บ้านอาปาแล้วหรือยัง",
    ctaBody: "ส่งคำขอจอง หรือคุยกับทีมงานผ่าน LINE เพื่อเช็กห้องว่างและรายละเอียดก่อนเข้าพัก",
    contactEyebrow: "Contact & Location",
    contactTitle: "ติดต่อและแผนที่",
    resortName: "Baan APA Erawan Resort",
    address: "199 หมู่2 ตำบล ช่องสะเดา อำเภอเมืองกาญจนบุรี กาญจนบุรี 71190",
    phone: "080-591-9199",
    mapTitle: "แผนที่บ้านอาปาเอราวัณรีสอร์ท",
  },
  en: {
    heroSubtitle: "Luxury Nature Retreat in Kanchanaburi",
    book: "Book Now",
    line: "Contact via LINE",
    badges: ["Nature Stay", "Family Friendly", "Near Erawan", "Private Retreat"],
    introEyebrow: "Baan APA Erawan Resort",
    introTitle: "A calm nature resort crafted for refined rest",
    introBody:
      "Baan APA Erawan Resort is designed for peaceful, private, and warm stays near nature in Kanchanaburi, ideal for families, couples, and friends seeking a slower kind of holiday.",
    introQuote: "Slow down, breathe deeper, and let nature shape your retreat.",
    experiencesEyebrow: "Signature Experiences",
    experiencesTitle: "Retreat moments with a local soul",
    experiences: [
      {
        title: "Nature Retreat",
        body: "Green spaces, natural views, and a calm atmosphere made for meaningful rest.",
        image: "/images/view4.jpg",
      },
      {
        title: "Family Stay",
        body: "Comfortable rooms and easy shared spaces for families or groups of friends.",
        image: "/images/house2.jpg",
      },
      {
        title: "Local Experience",
        body: "Riverside moments, raft activities, boats, and the simple charm of Kanchanaburi.",
        image: "/images/raft2.jpg",
      },
    ],
    roomsEyebrow: "Stay",
    roomsTitle: "Warm rooms for every retreat",
    roomsBody: "Choose the room that fits your group size and the pace of your stay.",
    viewRooms: "View All Rooms",
    facilitiesEyebrow: "Facilities",
    facilitiesTitle: "Everything needed for an effortless stay",
    facilities: ["Swimming pool", "Garden lounge areas", "Parking", "Raft and local activities"],
    viewFacilities: "View Facilities",
    galleryEyebrow: "Gallery",
    galleryTitle: "A visual sense of rest",
    viewGallery: "View Gallery",
    ctaTitle: "Ready to begin your Baan APA retreat?",
    ctaBody: "Send a booking request or talk with our team on LINE to check availability and stay details.",
    contactEyebrow: "Contact & Location",
    contactTitle: "Contact and map",
    resortName: "Baan APA Erawan Resort",
    address: "199 Moo 2, Chong Sadao, Mueang Kanchanaburi, Kanchanaburi 71190",
    phone: "080-591-9199",
    mapTitle: "Map to Baan APA Erawan Resort",
  },
} as const;

export default function HomePage() {
  const { language, t } = useLanguage();
  const copy = homeCopy[language];

  return (
    <PublicLayout>
      <main className="bg-[#f7efe2] text-[#17352f]">
        <section className="relative min-h-screen overflow-hidden text-white">
          <Image
            src={heroImage}
            alt={
              language === "th"
                ? "ภาพมุมสูงของบ้านอาปาเอราวัณรีสอร์ท"
                : "Aerial view of Baan APA Erawan Resort"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,23,20,0.78),rgba(8,23,20,0.34)_45%,rgba(8,23,20,0.9)),radial-gradient(circle_at_center,rgba(194,139,65,0.24),transparent_40%)]" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-28 text-center">
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#f2c36b] sm:text-sm">
                {copy.heroSubtitle}
              </p>
              <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
                Baan APA Erawan Resort
              </h1>
              <p className="mx-auto mb-9 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
                {copy.heroSubtitle}
              </p>
              <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/booking"
                  className="rounded-md bg-[#f2c36b] px-8 py-4 font-bold text-[#17352f] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffd982]"
                >
                  {copy.book}
                </Link>
                <a
                  href={lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/80 px-8 py-4 font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white hover:text-[#17352f]"
                >
                  {copy.line}
                </a>
              </div>
              <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
                {copy.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#b6782e]">
                {copy.introEyebrow}
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#17352f] sm:text-5xl">
                {copy.introTitle}
              </h2>
            </div>
            <div className="rounded-2xl border border-[#e3d0b4] bg-[#fffaf1] p-7 shadow-xl shadow-[#6f4a2a]/10 sm:p-9">
              <p className="text-lg leading-8 text-[#52635d]">{copy.introBody}</p>
              <p className="mt-6 border-l-2 border-[#c28b41] pl-5 text-xl font-semibold leading-8 text-[#5b3a22]">
                {copy.introQuote}
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#b6782e]">
              {copy.experiencesEyebrow}
            </p>
            <h2 className="mb-10 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {copy.experiencesTitle}
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {copy.experiences.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-[#e3d0b4] bg-[#fffaf1] shadow-xl shadow-[#6f4a2a]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                    <p className="leading-7 text-[#52635d]">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf1] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#b6782e]">
                  {copy.roomsEyebrow}
                </p>
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {copy.roomsTitle}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-[#52635d]">
                  {copy.roomsBody}
                </p>
              </div>
              <Link
                href="/rooms"
                className="rounded-md border border-[#17352f] px-6 py-3 text-center font-bold text-[#17352f] transition hover:bg-[#17352f] hover:text-white"
              >
                {copy.viewRooms}
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {roomOptions.map((room) => {
                const translatedRoom = t.rooms.items[room.value];

                return (
                  <article
                    key={room.value}
                    className="group overflow-hidden rounded-2xl border border-[#e3d0b4] bg-white shadow-xl shadow-[#6f4a2a]/10 transition duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={room.image}
                        alt={translatedRoom.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
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

        <section className="bg-[#17352f] px-5 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f2c36b]">
                  {copy.facilitiesEyebrow}
                </p>
                <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                  {copy.facilitiesTitle}
                </h2>
              </div>
              <Link
                href="/facilities"
                className="rounded-md border border-white/70 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-[#17352f]"
              >
                {copy.viewFacilities}
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {copy.facilities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 text-lg font-bold shadow-lg shadow-black/10 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7efe2] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#b6782e]">
                  {copy.galleryEyebrow}
                </p>
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {copy.galleryTitle}
                </h2>
              </div>
              <Link
                href="/gallery"
                className="rounded-md border border-[#17352f] px-6 py-3 text-center font-bold text-[#17352f] transition hover:bg-[#17352f] hover:text-white"
              >
                {copy.viewGallery}
              </Link>
            </div>
            <div className="grid auto-rows-[180px] grid-cols-2 gap-4 lg:grid-cols-4">
              {galleryImages.slice(0, 7).map((item, index) => (
                <div
                  key={item.src}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl shadow-[#6f4a2a]/10 ${
                    index === 0 ? "col-span-2 row-span-2" : ""
                  } ${index === 3 ? "row-span-2" : ""}`}
                >
                  <Image
                    src={item.src}
                    alt={language === "th" ? item.altTh : item.altEn}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#4a2f1f] shadow-2xl shadow-[#4a2f1f]/20">
            <div className="grid lg:grid-cols-[1fr_0.85fr]">
              <div className="p-8 text-white sm:p-12 lg:p-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f2c36b]">
                  Private Retreat
                </p>
                <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                  {copy.ctaTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                  {copy.ctaBody}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/booking"
                    className="rounded-md bg-[#f2c36b] px-7 py-4 text-center font-bold text-[#17352f] transition hover:bg-[#ffd982]"
                  >
                    {copy.book}
                  </Link>
                  <a
                    href={lineOaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/70 px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#17352f]"
                  >
                    {copy.line}
                  </a>
                </div>
              </div>
              <div className="relative min-h-80">
                <Image
                  src="/images/house1.jpg"
                  alt="Baan APA Erawan Resort house"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17352f] px-5 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/10 sm:p-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f2c36b]">
                {copy.contactEyebrow}
              </p>
              <h2 className="mb-8 text-4xl font-bold">{copy.contactTitle}</h2>
              <div className="space-y-5 text-white/85">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                    Resort
                  </p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {copy.resortName}
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                    Address
                  </p>
                  <p className="mt-1 leading-7">{copy.address}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                    Phone
                  </p>
                  <a
                    href="tel:0805919199"
                    className="mt-1 inline-block text-xl font-bold text-white"
                  >
                    {copy.phone}
                  </a>
                </div>
              </div>
              <a
                href={lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-md bg-[#06c755] px-6 py-3 font-bold text-white transition hover:bg-[#05b34c]"
              >
                {copy.line}
              </a>
            </div>

            <div className="min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#102722] shadow-2xl shadow-black/20">
              <iframe
                title={copy.mapTitle}
                src="https://www.google.com/maps?q=199%20%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%882%20%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%20%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B2%20%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%20%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%2071190&output=embed"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
