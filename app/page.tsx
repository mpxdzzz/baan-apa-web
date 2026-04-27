"use client";

import { useState } from "react";

const rooms = [
  {
    type: "Type 1",
    title: "Basic Room",
    desc: "1 Queen Bed / Has windows",
    price: "Please contact us",
  },
  {
    type: "Type 2",
    title: "Three-Bedroom Family Room",
    desc: "Bedroom 1: 1 Double Bed / Has windows",
    price: "Please contact us",
  },
];

const highlights = ["Sparkling Clean", "Excellent Service", "Free Parking"];

const amenities = [
  "Outdoor swimming pool",
  "Free parking",
  "Garden",
  "Raft",
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending your booking request...");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("✅ Booking request sent successfully. Our team will contact you soon.");

      setForm({
        name: "",
        phone: "",
        date: "",
        guests: "",
        roomType: "Basic Room",
      });
    } catch {
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#1f2a1f]">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#1f2a1f] text-white">
        <div className="max-w-5xl text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-[#c2a76d] mb-6">
            Nature Stay Near Erawan
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-7 leading-tight">
            Baan APA Erawan Resort
          </h1>

          <p className="text-lg md:text-xl text-[#e9e2d0] max-w-2xl mx-auto mb-10 leading-8">
            A peaceful natural resort with warm hospitality, garden calm,
            outdoor swimming pool, raft lifestyle, and relaxing stays near Erawan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#details"
              className="bg-[#c2a76d] text-[#1f2a1f] px-8 py-4 rounded-full font-semibold hover:bg-[#d7bd7a] transition"
            >
              Explore Resort
            </a>

            <a
              href="#booking"
              className="border border-[#c2a76d] text-[#f6f1e7] px-8 py-4 rounded-full font-semibold hover:bg-[#c2a76d] hover:text-[#1f2a1f] transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-[#e9e2d0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-md border border-[#d6ccb5] text-center"
            >
              <p className="uppercase tracking-[0.25em] text-xs text-[#8b7a4f] mb-3">
                Highlight
              </p>
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* RESORT DETAILS */}
      <section id="details" className="py-24 px-6 bg-[#f6f1e7]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#8b7a4f] mb-4">
              Resort Details
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Baan APA Erawan Resort
            </h2>

            <p className="text-[#4b5748] leading-8 text-lg">
              Baan APA Erawan Resort is designed for travelers who want a calm
              nature stay with comfort, privacy, and easy access to relaxing
              outdoor experiences. Enjoy a garden atmosphere, outdoor pool,
              free parking, and raft-style riverside leisure.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-md border border-[#d6ccb5]">
            <h3 className="text-2xl font-bold mb-6">Popular Amenities</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {amenities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f6f1e7] border border-[#d6ccb5] p-5 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 px-6 bg-[#e9e2d0]">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-[#8b7a4f] text-center mb-4">
            Stay Options
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Choose Your Room
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div
                key={room.title}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-[#d6ccb5]"
              >
                <div className="h-44 bg-[#3e5f44] flex items-end p-7">
                  <div>
                    <p className="text-[#c2a76d] uppercase tracking-[0.25em] text-xs mb-2">
                      {room.type}
                    </p>
                    <h3 className="text-3xl font-bold text-white">
                      {room.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[#4b5748] mb-4 leading-7">{room.desc}</p>
                  <p className="font-semibold mb-7">{room.price}</p>

                  <a
                    href="#booking"
                    onClick={() => setForm({ ...form, roomType: room.title })}
                    className="inline-block bg-[#1f2a1f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3e5f44] transition"
                  >
                    Select Room
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 bg-[#f6f1e7]">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-[#8b7a4f] text-center mb-4">
            Booking Request
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
            Reserve Your Stay
          </h2>

          <p className="text-center text-[#4b5748] mb-10">
            Fill in your details. Our team will contact you via LINE or phone.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[2rem] p-8 md:p-10 grid gap-5 shadow-xl border border-[#d6ccb5]"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#f6f1e7] border border-[#d6ccb5] outline-none focus:ring-2 focus:ring-[#3e5f44]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone / LINE
              </label>
              <input
                name="phone"
                placeholder="Phone or LINE contact"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#f6f1e7] border border-[#d6ccb5] outline-none focus:ring-2 focus:ring-[#3e5f44]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#f6f1e7] border border-[#d6ccb5] outline-none focus:ring-2 focus:ring-[#3e5f44]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                name="guests"
                placeholder="2"
                min="1"
                value={form.guests}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#f6f1e7] border border-[#d6ccb5] outline-none focus:ring-2 focus:ring-[#3e5f44]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Room Type
              </label>
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#f6f1e7] border border-[#d6ccb5] outline-none focus:ring-2 focus:ring-[#3e5f44]"
              >
                {rooms.map((room) => (
                  <option key={room.title} value={room.title}>
                    {room.type} - {room.title}

                  </option>

                ))}

              </select>

            </div>

            <button

              type="submit"

              disabled={isSending}

              className="w-full bg-[#1f2a1f] text-white p-4 rounded-full font-semibold mt-2 disabled:opacity-60 hover:bg-[#3e5f44] transition"

            >

              {isSending ? "Sending..." : "Send Booking Request"}

            </button>

            {status && (

              <p className="text-center text-sm text-[#4b5748] mt-2">

                {status}

              </p>

            )}

          </form>

        </div>

      </section>

    </main>

  );

}