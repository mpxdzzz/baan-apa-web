"use client";

import { useState } from "react";

type Language = "th" | "en";

const LINE_OA_URL = "https://line.me/R/ti/p/@633bduwo";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "rooms", href: "#rooms" },
  { key: "facilities", href: "#facilities" },
  { key: "gallery", href: "#gallery" },
  { key: "booking", href: "#booking" },
  { key: "contact", href: "#contact" },
] as const;

const roomOptions = [
  {
    value: "Basic Room",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  },
  {
    value: "Three-Bedroom Family Room",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const galleryImages = [
  {
    key: "resort",
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "pool",
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "nature",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "family",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const content = {
  th: {
    brand: "บ้านอาปา รีสอร์ท",
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      rooms: "ห้องพัก",
      facilities: "สิ่งอำนวยความสะดวก",
      gallery: "แกลเลอรี",
      booking: "จองห้องพัก",
      contact: "ติดต่อ",
    },
    hero: {
      eyebrow: "Baan APA Resort",
      title: "บ้านอาปา รีสอร์ท",
      body: "ที่พักบรรยากาศสงบใกล้ธรรมชาติ เหมาะสำหรับครอบครัว กลุ่มเพื่อน และทริปพักผ่อนสบาย ๆ พร้อมสระว่ายน้ำ สวน ที่จอดรถ และบริการอบอุ่นเป็นกันเอง",
      primary: "จองห้องพัก",
      secondary: "ดูแกลเลอรี",
    },
    about: {
      eyebrow: "เกี่ยวกับเรา",
      title: "พักสบายในบรรยากาศเรียบง่ายและเป็นส่วนตัว",
      body: "บ้านอาปา รีสอร์ทตั้งใจเป็นพื้นที่พักผ่อนที่ให้ความรู้สึกเหมือนบ้าน เงียบสงบ ดูแลง่าย และเหมาะกับคนที่อยากหลบความวุ่นวายมาชาร์จพลังกับธรรมชาติ",
      stats: ["บรรยากาศสงบ", "เหมาะกับครอบครัว", "ติดต่อสะดวกผ่าน LINE"],
    },
    rooms: {
      eyebrow: "ห้องพัก",
      title: "เลือกห้องพักที่เหมาะกับทริปของคุณ",
      select: "เลือกห้องนี้",
      items: {
        "Basic Room": {
          type: "ห้องพักมาตรฐาน",
          title: "Basic Room",
          desc: "ห้องพักอบอุ่น เหมาะสำหรับคู่รักหรือผู้เข้าพัก 1-2 ท่าน พร้อมเตียงควีนไซซ์และหน้าต่างรับแสงธรรมชาติ",
        },
        "Three-Bedroom Family Room": {
          type: "ห้องครอบครัว",
          title: "Three-Bedroom Family Room",
          desc: "พื้นที่กว้างสำหรับครอบครัวหรือกลุ่มเพื่อน มี 3 ห้องนอน บรรยากาศเป็นส่วนตัวและพักผ่อนได้สบาย",
        },
      },
    },
    facilities: {
      eyebrow: "สิ่งอำนวยความสะดวก",
      title: "ครบสำหรับวันพักผ่อนที่ง่ายและสบาย",
      items: [
        "สระว่ายน้ำกลางแจ้ง",
        "ที่จอดรถฟรี",
        "สวนและพื้นที่พักผ่อน",
        "แพและกิจกรรมริมน้ำ",
        "เหมาะสำหรับครอบครัว",
        "บริการดูแลแบบเป็นกันเอง",
      ],
    },
    gallery: {
      eyebrow: "แกลเลอรี",
      title: "ภาพบรรยากาศบ้านอาปา",
      items: {
        resort: "บรรยากาศรีสอร์ท",
        pool: "สระว่ายน้ำกลางแจ้ง",
        nature: "พักผ่อนใกล้ธรรมชาติ",
        family: "พื้นที่สำหรับครอบครัว",
      },
    },
    booking: {
      eyebrow: "Booking",
      title: "จองห้องพัก",
      body: "กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับและยืนยันการจอง",
      name: "ชื่อผู้จอง",
      namePlaceholder: "ชื่อ-นามสกุล",
      phone: "เบอร์โทร / LINE",
      phonePlaceholder: "เบอร์โทรหรือ LINE ID",
      date: "วันที่ต้องการเข้าพัก",
      guests: "จำนวนผู้เข้าพัก",
      guestsPlaceholder: "เช่น 2",
      roomType: "ประเภทห้องพัก",
      sending: "กำลังส่ง...",
      submit: "ส่งคำขอจอง",
      sendingStatus: "กำลังส่งคำขอจอง...",
      success: "ส่งคำขอจองเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็ว",
      error: "ส่งคำขอไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อทาง LINE OA",
    },
    contact: {
      eyebrow: "ติดต่อเรา",
      title: "สอบถามห้องว่างหรือรายละเอียดเพิ่มเติม",
      body: "ติดต่อผ่าน LINE OA ได้สะดวกที่สุด หรือส่งคำขอจองผ่านแบบฟอร์ม ทีมงานจะติดต่อกลับเพื่อยืนยันรายละเอียด ราคา และการชำระเงิน",
      location: "กาญจนบุรี ประเทศไทย",
      note: "เหมาะสำหรับครอบครัว กลุ่มเพื่อน และผู้ที่ต้องการพักผ่อนใกล้ธรรมชาติ",
      line: "ติดต่อผ่าน LINE OA",
    },
  },
  en: {
    brand: "Baan APA Resort",
    nav: {
      home: "Home",
      about: "About",
      rooms: "Rooms",
      facilities: "Facilities",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Nature Stay in Kanchanaburi",
      title: "Baan APA Resort",
      body: "A peaceful nature resort for families, friends, and easy weekend escapes with a swimming pool, garden, free parking, and warm local hospitality.",
      primary: "Book a Room",
      secondary: "View Gallery",
    },
    about: {
      eyebrow: "About",
      title: "A simple, private stay made for real rest",
      body: "Baan APA Resort is designed as a calm place to slow down, breathe, and feel at home. It is quiet, comfortable, easy to reach, and ideal for guests who want to recharge close to nature.",
      stats: ["Peaceful atmosphere", "Family friendly", "Easy LINE contact"],
    },
    rooms: {
      eyebrow: "Rooms",
      title: "Choose the right room for your trip",
      select: "Select Room",
      items: {
        "Basic Room": {
          type: "Standard Room",
          title: "Basic Room",
          desc: "A cozy room for one or two guests with a queen bed, natural light, and a relaxed stay atmosphere.",
        },
        "Three-Bedroom Family Room": {
          type: "Family Room",
          title: "Three-Bedroom Family Room",
          desc: "A spacious option for families or groups of friends with three bedrooms, privacy, and plenty of room to rest.",
        },
      },
    },
    facilities: {
      eyebrow: "Facilities",
      title: "Everything you need for an easy stay",
      items: [
        "Outdoor swimming pool",
        "Free parking",
        "Garden and rest areas",
        "Raft and riverside activities",
        "Family-friendly stays",
        "Friendly local service",
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Moments around Baan APA",
      items: {
        resort: "Resort atmosphere",
        pool: "Outdoor pool",
        nature: "Close to nature",
        family: "Family spaces",
      },
    },
    booking: {
      eyebrow: "Booking",
      title: "Book Your Stay",
      body: "Send your details and our team will contact you to confirm availability.",
      name: "Guest Name",
      namePlaceholder: "Full name",
      phone: "Phone / LINE",
      phonePlaceholder: "Phone number or LINE ID",
      date: "Preferred Check-in Date",
      guests: "Number of Guests",
      guestsPlaceholder: "Example: 2",
      roomType: "Room Type",
      sending: "Sending...",
      submit: "Send Booking Request",
      sendingStatus: "Sending your booking request...",
      success: "Booking request sent. Our team will contact you soon.",
      error: "Something went wrong. Please try again or contact us via LINE OA.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Ask about availability or more details",
      body: "The easiest way to reach us is through LINE OA. You can also send a booking request through the form and our team will confirm details, pricing, and payment.",
      location: "Kanchanaburi, Thailand",
      note: "Perfect for families, friend groups, and guests who want a relaxing stay close to nature.",
      line: "Contact via LINE OA",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("th");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    roomType: "Basic Room",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const t = content[language];

  function handleLanguageChange(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setStatus("");
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSending(true);
    setStatus(t.booking.sendingStatus);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error();

      if (data.lineSent === false) {
        setStatus(`${t.booking.success} แต่ LINE ยังไม่ส่ง: ${data.lineError}`);
      } else {
        setStatus(t.booking.success);
      }

      setForm({
        name: "",
        phone: "",
        date: "",
        guests: "",
        roomType: "Basic Room",
      });
    } catch {
      setStatus(t.booking.error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/20 bg-[#17352f]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <a href="#home" className="text-base font-bold sm:text-lg">
            {t.brand}
          </a>

          <nav className="order-3 flex w-full gap-2 overflow-x-auto pb-1 text-sm font-medium lg:order-2 lg:w-auto lg:items-center lg:gap-5 lg:overflow-visible lg:pb-0">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-md px-2 py-1 hover:bg-white/10 hover:text-[#f2c36b]"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          <div className="order-2 flex items-center gap-2 lg:order-3">
            <div className="flex rounded-md border border-white/30 p-1">
              {(["th", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleLanguageChange(item)}
                  className={`rounded px-2.5 py-1 text-xs font-bold transition ${
                    language === item
                      ? "bg-[#f2c36b] text-[#17352f]"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#06c755] px-3 py-2 text-sm font-bold text-white hover:bg-[#05b34c] sm:px-4"
            >
              LINE OA
            </a>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center pt-32 text-white sm:pt-28"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15, 43, 38, 0.92), rgba(15, 43, 38, 0.5)), url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center px-5 pb-16">
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
              <a
                href="#booking"
                className="rounded-md bg-[#f2c36b] px-6 py-3 font-bold text-[#17352f] hover:bg-[#ffd982]"
              >
                {t.hero.primary}
              </a>
              <a
                href="#gallery"
                className="rounded-md border border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-[#17352f]"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold text-[#b6782e]">
              {t.about.eyebrow}
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="text-lg leading-8 text-[#52635d]">{t.about.body}</p>
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

      <section id="rooms" className="bg-white px-5 py-20 text-[#17352f]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm font-bold text-[#b6782e]">
            {t.rooms.eyebrow}
          </p>
          <h2 className="mb-10 text-center text-3xl font-bold leading-tight sm:text-4xl">
            {t.rooms.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {roomOptions.map((room) => {
              const translatedRoom = t.rooms.items[room.value];

              return (
                <article
                  key={room.value}
                  className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] shadow-sm"
                >
                  <div
                    className="h-64 w-full bg-cover bg-center"
                    role="img"
                    aria-label={translatedRoom.title}
                    style={{ backgroundImage: `url(${room.image})` }}
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
                    <a
                      href="#booking"
                      onClick={() =>
                        setForm({ ...form, roomType: translatedRoom.title })
                      }
                      className="mt-5 inline-block rounded-md bg-[#17352f] px-4 py-2 font-bold text-white hover:bg-[#25564c]"
                    >
                      {t.rooms.select}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-[#17352f] px-5 py-20 text-white">
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

      <section id="gallery" className="bg-white px-5 py-20 text-[#17352f]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm font-bold text-[#b6782e]">
            {t.gallery.eyebrow}
          </p>
          <h2 className="mb-10 text-center text-3xl font-bold leading-tight sm:text-4xl">
            {t.gallery.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((item) => (
              <figure
                key={item.key}
                className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef]"
              >
                <div
                  className="h-72 w-full bg-cover bg-center"
                  role="img"
                  aria-label={t.gallery.items[item.key]}
                  style={{ backgroundImage: `url(${item.src})` }}
                />
                <figcaption className="p-4 font-bold">
                  {t.gallery.items[item.key]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-sm font-bold text-[#b6782e]">
            {t.booking.eyebrow}
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold leading-tight sm:text-4xl">
            {t.booking.title}
          </h2>
          <p className="mb-8 text-center text-[#52635d]">{t.booking.body}</p>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-lg border border-[#e2d4bd] bg-white p-5 shadow-sm sm:p-6"
          >
            <label className="grid gap-2 font-bold">
              {t.booking.name}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
                placeholder={t.booking.namePlaceholder}
              />
            </label>

            <label className="grid gap-2 font-bold">
              {t.booking.phone}
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
                placeholder={t.booking.phonePlaceholder}
              />
            </label>

            <label className="grid gap-2 font-bold">
              {t.booking.date}
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
              />
            </label>

            <label className="grid gap-2 font-bold">
              {t.booking.guests}
              <input
                type="number"
                name="guests"
                min="1"
                value={form.guests}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
                placeholder={t.booking.guestsPlaceholder}
              />
            </label>

            <label className="grid gap-2 font-bold">
              {t.booking.roomType}
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
              >
                {roomOptions.map((room) => {
                  const translatedRoom = t.rooms.items[room.value];

                  return (
                    <option key={room.value} value={room.value}>
                      {translatedRoom.type} - {translatedRoom.title}
                    </option>
                  );
                })}
              </select>
            </label>

            <button
              type="submit"
              disabled={isSending}
              className="rounded-md bg-[#17352f] p-4 font-bold text-white hover:bg-[#25564c] disabled:opacity-60"
            >
              {isSending ? t.booking.sending : t.booking.submit}
            </button>

            {status && (
              <p className="text-center text-sm font-bold text-[#52635d]">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 text-[#17352f]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold text-[#b6782e]">
              {t.contact.eyebrow}
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="leading-8 text-[#52635d]">{t.contact.body}</p>
          </div>

          <div className="rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] p-6 shadow-sm">
            <p className="mb-3 text-xl font-bold">{t.brand}</p>
            <p className="mb-2 text-[#52635d]">{t.contact.location}</p>
            <p className="mb-6 text-[#52635d]">{t.contact.note}</p>
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-md bg-[#06c755] px-5 py-3 font-bold text-white hover:bg-[#05b34c]"
            >
              {t.contact.line}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#102722] px-5 py-8 text-center text-white">
        <p className="font-bold">{t.brand}</p>
        <p className="mt-2 text-sm text-white/70">Baan APA Resort</p>
      </footer>

      <a
        href={LINE_OA_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-md bg-[#06c755] px-5 py-3 font-bold text-white shadow-lg hover:bg-[#05b34c]"
      >
        LINE OA
      </a>
    </main>
  );
}
