export type Language = "th" | "en";
export type NavKey =
  | "home"
  | "about"
  | "rooms"
  | "facilities"
  | "gallery"
  | "booking"
  | "contact";

export const lineOaUrl = "https://line.me/R/ti/p/@633bduwo";

export const navLinks: Array<{ key: NavKey; href: string }> = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "rooms", href: "/rooms" },
  { key: "facilities", href: "/facilities" },
  { key: "gallery", href: "/gallery" },
  { key: "booking", href: "/booking" },
  { key: "contact", href: "/contact" },
];

export const roomOptions = [
  {
    value: "Basic Room",
    image: "/images/room1.jpg",
  },
  {
    value: "Three-Bedroom Family Room",
    image: "/images/room3.jpg",
  },
] as const;

export const heroImage = "/images/topview1.jpg";
export const bookingBannerImage = "/images/house1.jpg";
export const contactImage = "/images/view1.jpg";

export const experienceImages = [
  {
    src: "/images/garden.jpg",
    altTh: "สวนสีเขียวภายในบ้านอาปารีสอร์ท",
    altEn: "Green garden at Baan APA Resort",
  },
  {
    src: "/images/pool1.jpg",
    altTh: "สระว่ายน้ำกลางแจ้งของบ้านอาปารีสอร์ท",
    altEn: "Outdoor swimming pool at Baan APA Resort",
  },
  {
    src: "/images/raft1.jpg",
    altTh: "แพพักผ่อนริมน้ำของบ้านอาปารีสอร์ท",
    altEn: "Riverside raft experience at Baan APA Resort",
  },
] as const;

export const facilityCards = [
  {
    image: "/images/pool2.jpg",
    altTh: "สระว่ายน้ำกลางแจ้ง",
    altEn: "Outdoor swimming pool",
  },
  {
    image: "/images/garden.jpg",
    altTh: "สวนและพื้นที่พักผ่อน",
    altEn: "Garden and rest areas",
  },
  {
    image: "/images/raft2.jpg",
    altTh: "แพและกิจกรรมริมน้ำ",
    altEn: "Raft and riverside activities",
  },
  {
    image: "/images/view3.jpg",
    altTh: "วิวธรรมชาติรอบรีสอร์ท",
    altEn: "Natural views around the resort",
  },
  {
    image: "/images/food1.jpg",
    altTh: "อาหารและมื้อพักผ่อน",
    altEn: "Food and relaxed meals",
  },
  {
    image: "/images/boat1.jpg",
    altTh: "กิจกรรมเรือและธรรมชาติ",
    altEn: "Boat and nature activities",
  },
] as const;

export const galleryImages = [
  {
    src: "/images/boat1.jpg",
    altTh: "เรือและวิวธรรมชาติที่บ้านอาปารีสอร์ท",
    altEn: "Boat and natural view at Baan APA Resort",
  },
  {
    src: "/images/boat2.jpg",
    altTh: "กิจกรรมเรือท่ามกลางธรรมชาติ",
    altEn: "Boat activity surrounded by nature",
  },
  {
    src: "/images/boat3.jpg",
    altTh: "มุมเรือและบรรยากาศริมน้ำ",
    altEn: "Boat corner and riverside atmosphere",
  },
  {
    src: "/images/boat4.jpg",
    altTh: "เรือพักผ่อนในบรรยากาศธรรมชาติ",
    altEn: "Leisure boat in a natural setting",
  },
  {
    src: "/images/food1.jpg",
    altTh: "อาหารสำหรับวันพักผ่อน",
    altEn: "Food for a relaxing stay",
  },
  {
    src: "/images/food2.jpg",
    altTh: "มื้ออาหารบรรยากาศอบอุ่น",
    altEn: "Warm and relaxed meal",
  },
  {
    src: "/images/food3.jpg",
    altTh: "อาหารและประสบการณ์รีสอร์ท",
    altEn: "Food and resort experience",
  },
  {
    src: "/images/garden.jpg",
    altTh: "สวนสีเขียวของบ้านอาปารีสอร์ท",
    altEn: "Green garden at Baan APA Resort",
  },
  {
    src: "/images/house1.jpg",
    altTh: "บ้านพักภายในรีสอร์ท",
    altEn: "Resort house exterior",
  },
  {
    src: "/images/house2.jpg",
    altTh: "มุมบ้านพักบรรยากาศสงบ",
    altEn: "Peaceful resort house corner",
  },
  {
    src: "/images/house3.jpg",
    altTh: "บ้านพักท่ามกลางธรรมชาติ",
    altEn: "Resort house surrounded by nature",
  },
  {
    src: "/images/pool1.jpg",
    altTh: "สระว่ายน้ำกลางแจ้ง",
    altEn: "Outdoor swimming pool",
  },
  {
    src: "/images/pool2.jpg",
    altTh: "พื้นที่สระว่ายน้ำสำหรับพักผ่อน",
    altEn: "Pool area for relaxation",
  },
  {
    src: "/images/raft1.jpg",
    altTh: "แพพักผ่อนริมน้ำ",
    altEn: "Riverside raft for relaxation",
  },
  {
    src: "/images/raft2.jpg",
    altTh: "แพและบรรยากาศริมน้ำ",
    altEn: "Raft and riverside atmosphere",
  },
  {
    src: "/images/raft3.jpg",
    altTh: "กิจกรรมแพในรีสอร์ท",
    altEn: "Raft activity at the resort",
  },
  {
    src: "/images/room1.jpg",
    altTh: "ห้องพักบ้านอาปารีสอร์ท",
    altEn: "Baan APA Resort guest room",
  },
  {
    src: "/images/room2.jpg",
    altTh: "ห้องพักบรรยากาศอบอุ่น",
    altEn: "Warm resort guest room",
  },
  {
    src: "/images/room3.jpg",
    altTh: "ห้องพักสำหรับครอบครัว",
    altEn: "Family guest room",
  },
  {
    src: "/images/room4.jpg",
    altTh: "รายละเอียดภายในห้องพัก",
    altEn: "Guest room interior details",
  },
  {
    src: "/images/topview1.jpg",
    altTh: "ภาพมุมสูงของบ้านอาปารีสอร์ท",
    altEn: "Aerial view of Baan APA Resort",
  },
  {
    src: "/images/topview2.jpg",
    altTh: "ภาพมุมสูงพื้นที่รีสอร์ท",
    altEn: "Aerial view of the resort grounds",
  },
  {
    src: "/images/view1.jpg",
    altTh: "วิวธรรมชาติภายในรีสอร์ท",
    altEn: "Natural view inside the resort",
  },
  {
    src: "/images/view2.jpg",
    altTh: "บรรยากาศสงบของบ้านอาปา",
    altEn: "Peaceful atmosphere at Baan APA",
  },
  {
    src: "/images/view3.jpg",
    altTh: "วิวสีเขียวสำหรับการพักผ่อน",
    altEn: "Green view for relaxation",
  },
  {
    src: "/images/view4.jpg",
    altTh: "มุมพักผ่อนใกล้ธรรมชาติ",
    altEn: "Nature-inspired relaxation corner",
  },
  {
    src: "/images/view5.jpg",
    altTh: "พื้นที่ธรรมชาติรอบบ้านอาปา",
    altEn: "Natural area around Baan APA",
  },
  {
    src: "/images/view6.jpg",
    altTh: "วิวสงบภายในรีสอร์ท",
    altEn: "Calm view inside the resort",
  },
] as const;

export const content = {
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
    common: {
      line: "LINE OA",
      learnMore: "ดูรายละเอียด",
      bookNow: "จองห้องพัก",
      viewRooms: "ดูห้องพัก",
      viewGallery: "ดูแกลเลอรี",
    },
    hero: {
      eyebrow: "Baan APA Resort",
      title: "บ้านอาปา รีสอร์ท",
      body: "ที่พักบรรยากาศสงบใกล้ธรรมชาติ เหมาะสำหรับครอบครัว กลุ่มเพื่อน และทริปพักผ่อนสบาย ๆ พร้อมสระว่ายน้ำ สวน ที่จอดรถ และบริการอบอุ่นเป็นกันเอง",
      primary: "จองห้องพัก",
      secondary: "ดูห้องพัก",
    },
    about: {
      eyebrow: "เกี่ยวกับเรา",
      title: "พักสบายในบรรยากาศเรียบง่ายและเป็นส่วนตัว",
      body: "บ้านอาปา รีสอร์ทตั้งใจเป็นพื้นที่พักผ่อนที่ให้ความรู้สึกเหมือนบ้าน เงียบสงบ ดูแลง่าย และเหมาะกับคนที่อยากหลบความวุ่นวายมาชาร์จพลังกับธรรมชาติ",
      extended:
        "เราออกแบบประสบการณ์ให้เรียบง่ายแต่ครบถ้วน ตั้งแต่การติดต่อสอบถาม การเลือกห้องพัก ไปจนถึงการพักผ่อนท่ามกลางพื้นที่สีเขียว เหมาะกับคนที่อยากมีเวลาคุณภาพกับครอบครัวหรือเพื่อนสนิท",
      stats: ["บรรยากาศสงบ", "เหมาะกับครอบครัว", "ติดต่อสะดวกผ่าน LINE"],
    },
    rooms: {
      eyebrow: "ห้องพัก",
      title: "เลือกห้องพักที่เหมาะกับทริปของคุณ",
      intro:
        "ห้องพักของบ้านอาปาเน้นความสบาย ความเป็นส่วนตัว และบรรยากาศอบอุ่นสำหรับการพักผ่อนจริง ๆ",
      select: "จองห้องนี้",
      items: {
        "Basic Room": {
          type: "ห้องพักมาตรฐาน",
          title: "Basic Room",
          desc: "ห้องพักอบอุ่น เหมาะสำหรับคู่รักหรือผู้เข้าพัก 1-2 ท่าน พร้อมเตียงควีนไซซ์และหน้าต่างรับแสงธรรมชาติ",
          detail: "เหมาะกับวันพักผ่อนสั้น ๆ หรือทริปคู่รักที่ต้องการความเรียบง่ายและสงบ",
        },
        "Three-Bedroom Family Room": {
          type: "ห้องครอบครัว",
          title: "Three-Bedroom Family Room",
          desc: "พื้นที่กว้างสำหรับครอบครัวหรือกลุ่มเพื่อน มี 3 ห้องนอน บรรยากาศเป็นส่วนตัวและพักผ่อนได้สบาย",
          detail: "เหมาะกับกลุ่มที่ต้องการพื้นที่ส่วนกลางและความเป็นส่วนตัวในทริปเดียวกัน",
        },
      },
    },
    facilities: {
      eyebrow: "สิ่งอำนวยความสะดวก",
      title: "ครบสำหรับวันพักผ่อนที่ง่ายและสบาย",
      intro:
        "สิ่งอำนวยความสะดวกของเราเน้นความสะดวก สะอาด และบรรยากาศใกล้ธรรมชาติ เพื่อให้ทุกคนในทริปพักได้อย่างสบายใจ",
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
      intro:
        "รูปภาพบรรยากาศภายในบ้านอาปารีสอร์ท ถ่ายทอดความเรียบง่ายของธรรมชาติ ความสงบ และประสบการณ์การพักผ่อนที่แท้จริง",
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
      lineWarning: "แต่ LINE ยังไม่ส่ง",
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
    common: {
      line: "LINE OA",
      learnMore: "Learn More",
      bookNow: "Book Now",
      viewRooms: "View Rooms",
      viewGallery: "View Gallery",
    },
    hero: {
      eyebrow: "Nature Stay in Kanchanaburi",
      title: "Baan APA Resort",
      body: "A peaceful nature resort for families, friends, and easy weekend escapes with a swimming pool, garden, free parking, and warm local hospitality.",
      primary: "Book a Room",
      secondary: "View Rooms",
    },
    about: {
      eyebrow: "About",
      title: "A simple, private stay made for real rest",
      body: "Baan APA Resort is designed as a calm place to slow down, breathe, and feel at home. It is quiet, comfortable, easy to reach, and ideal for guests who want to recharge close to nature.",
      extended:
        "We keep the experience simple, warm, and complete, from easy contact and room selection to restful moments among green spaces. It is made for quality time with family or close friends.",
      stats: ["Peaceful atmosphere", "Family friendly", "Easy LINE contact"],
    },
    rooms: {
      eyebrow: "Rooms",
      title: "Choose the right room for your trip",
      intro:
        "Baan APA rooms focus on comfort, privacy, and a warm atmosphere for guests who want a real rest.",
      select: "Book This Room",
      items: {
        "Basic Room": {
          type: "Standard Room",
          title: "Basic Room",
          desc: "A cozy room for one or two guests with a queen bed, natural light, and a relaxed stay atmosphere.",
          detail: "Ideal for short stays, couples, and guests who want a quiet, simple escape.",
        },
        "Three-Bedroom Family Room": {
          type: "Family Room",
          title: "Three-Bedroom Family Room",
          desc: "A spacious option for families or groups of friends with three bedrooms, privacy, and plenty of room to rest.",
          detail: "Ideal for groups that want shared space and private bedrooms in one comfortable stay.",
        },
      },
    },
    facilities: {
      eyebrow: "Facilities",
      title: "Everything you need for an easy stay",
      intro:
        "Our facilities are built around comfort, cleanliness, and a close-to-nature feeling so every guest can relax with ease.",
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
      intro:
        "Photos from Baan APA Resort showcasing natural beauty, peaceful atmosphere, and authentic retreat experiences",
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
      lineWarning: "but LINE was not sent",
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
} as const;
