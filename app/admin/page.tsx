"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const ADMIN_PASSWORD = "1234";

type Booking = {
  id: string;
  name: string;
  phone: string;
  preferred_date: string;
  guests: number;
  room_type: string;
  status: string;
  note: string | null;
};

const statuses = ["กำลังคุย", "รอจ่าย", "จ่ายแล้ว", "ยกเลิก"];

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [loadingId, setLoadingId] = useState("");

  function handleLogin() {
    if (inputPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  }

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("SUPABASE ERROR:", error);
      return;
    }

    setBookings((data as Booking[]) || []);
  }

  async function updateStatus(id: string, status: string) {
    setLoadingId(id);

    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert("Update failed");
      console.log("UPDATE ERROR:", error);
    } else {
      await fetchBookings();
    }

    setLoadingId("");
  }

  async function updateNote(id: string, note: string) {
    setLoadingId(id);

    const { error } = await supabase
      .from("bookings")
      .update({ note })
      .eq("id", id);

    if (error) {
      alert("Note update failed");
      console.log("NOTE ERROR:", error);
    } else {
      await fetchBookings();
    }

    setLoadingId("");
  }

  useEffect(() => {
    if (isAuthenticated) fetchBookings();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f6f1e7] text-[#1f2a1f] p-6">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#d6ccb5] w-full max-w-sm">
          <p className="uppercase tracking-[0.25em] text-xs text-[#8b7a4f] mb-3">
            Baan APA Admin
          </p>

          <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

          <input
            type="password"
            placeholder="Enter password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
            className="w-full p-4 rounded-xl bg-[#f6f1e7] border border-[#d6ccb5] outline-none focus:ring-2 focus:ring-[#3e5f44] mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#1f2a1f] text-white p-4 rounded-full font-semibold hover:bg-[#3e5f44] transition"
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#1f2a1f] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start gap-4 mb-8">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#8b7a4f] mb-3">
              Baan APA Admin
            </p>
            <h1 className="text-4xl font-bold">Booking Dashboard</h1>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-[#1f2a1f] text-white px-5 py-3 rounded-full text-sm"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-[#d6ccb5] overflow-hidden">
          <div className="p-6 border-b border-[#e5dcc8]">
            <h2 className="text-2xl font-semibold">All Bookings</h2>
            <p className="text-sm text-[#5c6658] mt-1">
              Manage status and internal notes for each booking.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[1250px]">
              <thead className="bg-[#e9e2d0]">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Guests</th>
                  <th className="p-4">Room</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Note</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td className="p-6 text-center text-[#5c6658]" colSpan={8}>
                      No bookings yet.
                    </td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr key={b.id} className="border-t border-[#e5dcc8] align-top">
                      <td className="p-4 font-medium">{b.name}</td>
                      <td className="p-4">{b.phone}</td>
                      <td className="p-4">{b.preferred_date}</td>
                      <td className="p-4">{b.guests}</td>
                      <td className="p-4">{b.room_type}</td>

                      <td className="p-4">
                        <span className="rounded-full bg-[#f6f1e7] px-3 py-1 text-sm font-semibold">
                          {b.status || "กำลังคุย"}
                        </span>
                      </td>

                      <td className="p-4">
                        <textarea
                          defaultValue={b.note || ""}
                          placeholder="เช่น ลูกค้าจะโอนพรุ่งนี้ / ขอห้องเงียบ"
                          className="w-64 min-h-24 rounded-xl border border-[#d6ccb5] bg-[#f6f1e7] p-3 text-sm outline-none focus:ring-2 focus:ring-[#3e5f44]"
                          onBlur={(e) => updateNote(b.id, e.target.value)}
                        />
                        <p className="text-xs text-[#5c6658] mt-1">
                          Auto-save when you click outside.
                        </p>
                      </td>

                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {statuses.map((status) => (
                            <button
                              key={status}
                              disabled={loadingId === b.id}
                              onClick={() => updateStatus(b.id, status)}
                              className="bg-[#1f2a1f] text-white px-3 py-2 rounded-full text-sm disabled:opacity-50 hover:bg-[#3e5f44] transition"
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}