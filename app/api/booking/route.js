import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, date, guests, roomType } = body;

    if (!name || !phone || !date || !guests) {
      return Response.json(
        { error: "Missing booking fields" },
        { status: 400 }
      );
    }

    const selectedRoom = roomType || "Not selected";

    const { error: dbError } = await supabase.from("bookings").insert([
      {
        name,
        phone,
        preferred_date: date,
        guests: Number(guests),
        room_type: selectedRoom,
        status: "กำลังคุย",
        payment_status: "unpaid",
      },
    ]);

    if (dbError) {
      console.log("DB ERROR:", dbError);
      return Response.json({ error: dbError.message }, { status: 500 });
    }

    const lineResult = await sendLineGroupMessage({
      name,
      phone,
      date,
      guests,
      roomType: selectedRoom,
    });

    return Response.json({
      success: true,
      lineSent: lineResult.sent,
      lineError: lineResult.error,
    });
  } catch (err) {
    console.log("SERVER ERROR:", err);
    return Response.json(
      { error: "Server error", detail: String(err) },
      { status: 500 }
    );
  }
}

async function sendLineGroupMessage({ name, phone, date, guests, roomType }) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const groupId = process.env.LINE_GROUP_ID;

  const missingEnv = [];
  if (!token) missingEnv.push("LINE_CHANNEL_ACCESS_TOKEN");
  if (!groupId) missingEnv.push("LINE_GROUP_ID");

  if (missingEnv.length > 0) {
    const error = `Missing LINE ENV: ${missingEnv.join(", ")}`;
    console.log(error);
    return { sent: false, error };
  }

  const message = `📌 มี booking ใหม่!

👤 ชื่อ: ${name}
📞 เบอร์ / LINE: ${phone}
📅 วันที่เข้าพัก: ${date}
👥 จำนวนผู้เข้าพัก: ${guests}
🏡 ห้อง: ${roomType}

เข้าไปดูรายละเอียดในระบบ admin ได้เลย`;

  try {
    const lineResponse = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        to: groupId,
        messages: [{ type: "text", text: message }],
      }),
    });

    if (!lineResponse.ok) {
      const detail = await lineResponse.text();
      const error = `LINE PUSH ERROR ${lineResponse.status}: ${detail}`;
      console.log(error);
      return { sent: false, error };
    }

    console.log("LINE PUSH SUCCESS");
    return { sent: true, error: null };
  } catch (err) {
    const error = `LINE PUSH FAILED: ${String(err)}`;
    console.log(error);
    return { sent: false, error };
  }
}
