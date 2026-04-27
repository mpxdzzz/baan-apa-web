import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    // 1. รับข้อมูลจากเว็บ
    const body = await req.json();
    const { name, phone, date, guests, roomType } = body;

    if (!name || !phone || !date || !guests) {
      return Response.json(
        { error: "Missing booking fields" },
        { status: 400 }
      );
    }

    // 2. บันทึกลง Supabase
    const { error: dbError } = await supabase.from("bookings").insert([
      {
        name,
        phone,
        preferred_date: date,
        guests: Number(guests),
        room_type: roomType || "Not selected",
        status: "กำลังคุย",
        payment_status: "unpaid",
      },
    ]);

    if (dbError) {
      console.log("DB ERROR:", dbError);
      return Response.json(
        { error: dbError.message },
        { status: 500 }
      );
    }

    // 3. ส่งเข้า LINE Group
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const groupId = process.env.LINE_GROUP_ID;

    if (!token || !groupId) {
      console.log("Missing LINE ENV");
    } else {
      const message = `📥 มี booking ใหม่!

👤 ชื่อ: ${name}
📞 เบอร์: ${phone}
📅 วันที่: ${date}
👥 จำนวน: ${guests}
🏡 ห้อง: ${roomType || "Not selected"}

👉 เข้าไปดูในระบบ admin ได้เลย`;

      await fetch("https://api.line.me/v2/bot/message/push", {
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
    }

    // 4. ส่ง response กลับ
    return Response.json({ success: true });

  } catch (err) {
    console.log("SERVER ERROR:", err);
    return Response.json(
      { error: "Server error", detail: String(err) },
      { status: 500 }
    );
  }
}