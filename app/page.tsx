"use client";

import { useState } from "react";

const LINE_OA_URL = "https://line.me/R/ti/p/@baanapa";

const navItems = [
  { label: "หน้าแรก", href: "#home" },
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "แกลเลอรี", href: "#gallery" },
  { label: "สิ่งอำนวยความสะดวก", href: "#facilities" },
  { label: "ติดต่อ", href: "#contact" },
  { label: "จองห้องพัก", href: "#booking" },
];

const rooms = [
  {
    type: "ห้องพักมาตรฐาน",
    title: "Basic Room",
    desc: "ห้องพักอบอุ่น เหมาะสำหรับคู่รักหรือผู้เข้าพัก 1-2 ท่าน พร้อมเตียงควีนไซซ์และหน้าต่างรับแสงธรรมชาติ",
  },
  {
    type: "ห้องครอบครัว",
    title: "Three-Bedroom Family Room",
    desc: "พื้นที่กว้างสำหรับครอบครัวหรือกลุ่มเพื่อน มี 3 ห้องนอน บรรยากาศเป็นส่วนตัวและพักผ่อนได้สบาย",
  },
];

const gallery = [
  {
    title: "บรรยากาศรีสอร์ท",
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "สระว่ายน้ำกลางแจ้ง",
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "พักผ่อนใกล้ธรรมชาติ",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "พื้นที่สำหรับครอบครัว",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
];

const facilities = [
  "สระว่ายน้ำกลางแจ้ง",
  "ที่จอดรถฟรี",
  "สวนและพื้นที่พักผ่อน",
  "แพและกิจกรรมริมน้ำ",
  "เหมาะสำหรับครอบครัว",
  "บริการดูแลแบบเป็นกันเอง",
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    roomType: "Basic Room",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSending(true);
    setStatus("กำลังส่งคำขอจอง...");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("ส่งคำขอจองเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็ว");
      setForm({
        name: "",
        phone: "",
        date: "",
        guests: "",
        roomType: "Basic Room",
      });
    } catch {
      setStatus("ส่งคำขอไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อทาง LINE OA");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/20 bg-[#17352f]/90 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold">
            บ้านอาปา รีสอร์ท
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#f2c36b]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#06c755] px-4 py-2 text-sm font-bold text-white hover:bg-[#05b34c]"
          >
            LINE OA
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen bg-cover bg-center pt-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15, 43, 38, 0.9), rgba(15, 43, 38, 0.48)), url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 pb-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase text-[#f2c36b]">
              Baan APA Resort
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              บ้านอาปา รีสอร์ท
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/90">
              ที่พักบรรยากาศสงบใกล้ธรรมชาติ เหมาะสำหรับการพักผ่อนแบบครอบครัว
              กลุ่มเพื่อน หรือทริปสบาย ๆ พร้อมสระว่ายน้ำ สวน ที่จอดรถ และบริการอบอุ่นเป็นกันเอง
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#booking"
                className="rounded-md bg-[#f2c36b] px-6 py-3 font-bold text-[#17352f] hover:bg-[#ffd982]"
              >
                จองห้องพัก
              </a>
              <a
                href="#gallery"
                className="rounded-md border border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-[#17352f]"
              >
                ดูแกลเลอรี
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold text-[#b6782e]">เกี่ยวกับเรา</p>
            <h2 className="mb-5 text-4xl font-bold">พักสบายในบรรยากาศเรียบง่ายและเป็นส่วนตัว</h2>
            <p className="text-lg leading-8 text-[#52635d]">
              บ้านอาปา รีสอร์ทตั้งใจเป็นพื้นที่พักผ่อนที่ให้ความรู้สึกเหมือนบ้าน
              เงียบสงบ ดูแลง่าย และเหมาะกับคนที่อยากหลบความวุ่นวายมาชาร์จพลังกับธรรมชาติ
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {rooms.map((room) => (
              <article key={room.title} className="rounded-lg border border-[#e2d4bd] bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm font-bold text-[#b6782e]">{room.type}</p>
                <h3 className="mb-3 text-2xl font-bold">{room.title}</h3>
                <p className="leading-7 text-[#52635d]">{room.desc}</p>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, roomType: room.title })}
                  className="mt-5 rounded-md bg-[#17352f] px-4 py-2 font-bold text-white hover:bg-[#25564c]"
                >
                  เลือกห้องนี้
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-5 py-20 text-[#17352f]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm font-bold text-[#b6782e]">แกลเลอรี</p>
          <h2 className="mb-10 text-center text-4xl font-bold">ภาพบรรยากาศบ้านอาปา</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {gallery.map((item) => (
              <figure key={item.title} className="overflow-hidden rounded-lg border border-[#e2d4bd] bg-[#fbf7ef]">
                <img src={item.src} alt={item.title} className="h-72 w-full object-cover" />
                <figcaption className="p-4 font-bold">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-[#17352f] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold text-[#f2c36b]">สิ่งอำนวยความสะดวก</p>
          <h2 className="mb-8 text-4xl font-bold">ครบสำหรับวันพักผ่อนที่ง่ายและสบาย</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div key={item} className="rounded-lg border border-white/20 bg-white/10 p-5 text-lg font-bold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#fbf7ef] px-5 py-20 text-[#17352f]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold text-[#b6782e]">ติดต่อเรา</p>
            <h2 className="mb-5 text-4xl font-bold">สอบถามห้องว่างหรือรายละเอียดเพิ่มเติม</h2>
            <p className="leading-8 text-[#52635d]">
              ติดต่อผ่าน LINE OA ได้สะดวกที่สุด หรือส่งคำขอจองผ่านแบบฟอร์มด้านล่าง
              ทีมงานจะติดต่อกลับเพื่อยืนยันรายละเอียด ราคา และการชำระเงิน
            </p>
          </div>

          <div className="rounded-lg border border-[#e2d4bd] bg-white p-6 shadow-sm">
            <p className="mb-3 font-bold">บ้านอาปา รีสอร์ท</p>
            <p className="mb-2 text-[#52635d]">กาญจนบุรี ประเทศไทย</p>
            <p className="mb-6 text-[#52635d]">เหมาะสำหรับครอบครัว กลุ่มเพื่อน และผู้ที่ต้องการพักผ่อนใกล้ธรรมชาติ</p>
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-md bg-[#06c755] px-5 py-3 font-bold text-white hover:bg-[#05b34c]"
            >
              ติดต่อผ่าน LINE OA
            </a>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-white px-5 py-20 text-[#17352f]">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-sm font-bold text-[#b6782e]">Booking</p>
          <h2 className="mb-4 text-center text-4xl font-bold">จองห้องพัก</h2>
          <p className="mb-8 text-center text-[#52635d]">
            กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับและยืนยันการจอง
          </p>

          <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-[#e2d4bd] bg-[#fbf7ef] p-6 shadow-sm">
            <label className="grid gap-2 font-bold">
              ชื่อผู้จอง
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
                placeholder="ชื่อ-นามสกุล"
              />
            </label>

            <label className="grid gap-2 font-bold">
              เบอร์โทร / LINE
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
                placeholder="เบอร์โทรหรือ LINE ID"
              />
            </label>

            <label className="grid gap-2 font-bold">
              วันที่ต้องการเข้าพัก
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
              จำนวนผู้เข้าพัก
              <input
                type="number"
                name="guests"
                min="1"
                value={form.guests}
                onChange={handleChange}
                required
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
                placeholder="เช่น 2"
              />
            </label>

            <label className="grid gap-2 font-bold">
              ประเภทห้องพัก
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="rounded-md border border-[#d7c7ae] bg-white p-4 font-normal outline-none focus:border-[#17352f]"
              >
                {rooms.map((room) => (
                  <option key={room.title} value={room.title}>
                    {room.type} - {room.title}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={isSending}
              className="rounded-md bg-[#17352f] p-4 font-bold text-white hover:bg-[#25564c] disabled:opacity-60"
            >
              {isSending ? "กำลังส่ง..." : "ส่งคำขอจอง"}
            </button>

            {status && <p className="text-center text-sm font-bold text-[#52635d]">{status}</p>}
          </form>
        </div>
      </section>

      <footer className="bg-[#102722] px-5 py-8 text-center text-white">
        <p className="font-bold">บ้านอาปา รีสอร์ท</p>
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
