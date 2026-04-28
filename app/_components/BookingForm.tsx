"use client";

import { useState } from "react";
import { roomOptions } from "../_lib/site-content";
import { useLanguage } from "./LanguageProvider";

export function BookingForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    roomType: "ND 1-2",
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
        setStatus(`${t.booking.success} ${t.booking.lineWarning}: ${data.lineError}`);
      } else {
        setStatus(t.booking.success);
      }

      setForm({
        name: "",
        phone: "",
        date: "",
        guests: "",
        roomType: "ND 1-2",
      });
    } catch {
      setStatus(t.booking.error);
    } finally {
      setIsSending(false);
    }
  }

  return (
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
  );
}
