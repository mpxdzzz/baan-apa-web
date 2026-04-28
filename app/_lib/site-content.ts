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
    value: "ND 1-2",
    labels: ["Private Stay", "For 2 Guests"],
  },
  {
    value: "ND 3-4",
    labels: ["Private Stay", "Poolside View", "For 2 Guests"],
  },
  {
    value: "RH 1-10",
    labels: ["Riverside View", "For 2 Guests", "Dining View"],
  },
  {
    value: "LN 1-2",
    labels: ["Private Stay", "Near Raft", "For 2 Guests"],
  },
  {
    value: "Thai House",
    labels: ["Group Stay", "Thai House", "Private Stay"],
  },
  {
    value: "Blue House",
    labels: ["Group Stay", "Private Stay", "Colorful House"],
  },
  {
    value: "Boat House",
    labels: ["Water Access", "For 2 Guests", "Boat Stay"],
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
  {
    src: "/images/1718684684675_0.jpg",
    altTh: "บรรยากาศบ้านอาปารีสอร์ท",
    altEn: "Baan APA Resort atmosphere",
  },
  {
    src: "/images/1718684688017_0.jpg",
    altTh: "มุมพักผ่อนภายในรีสอร์ท",
    altEn: "Relaxing corner inside the resort",
  },
  {
    src: "/images/1718684689787_0.jpg",
    altTh: "ภาพบรรยากาศธรรมชาติของบ้านอาปา",
    altEn: "Natural atmosphere at Baan APA",
  },
  {
    src: "/images/1718684691967_0.jpg",
    altTh: "พื้นที่พักผ่อนบรรยากาศสงบ",
    altEn: "Peaceful resort resting area",
  },
  {
    src: "/images/1718684694624_0.jpg",
    altTh: "มุมธรรมชาติภายในบ้านอาปา",
    altEn: "Nature corner inside Baan APA",
  },
  {
    src: "/images/1718684696301_0.jpg",
    altTh: "รีสอร์ทท่ามกลางบรรยากาศธรรมชาติ",
    altEn: "Resort surrounded by nature",
  },
  {
    src: "/images/1718684698616_0.jpg",
    altTh: "ภาพบรรยากาศการพักผ่อน",
    altEn: "Relaxing resort moment",
  },
  {
    src: "/images/1718684703049_0.jpg",
    altTh: "มุมสวยงามของบ้านอาปารีสอร์ท",
    altEn: "Beautiful corner of Baan APA Resort",
  },
  {
    src: "/images/1718684707498_0.jpg",
    altTh: "พื้นที่รีสอร์ทในบรรยากาศอบอุ่น",
    altEn: "Warm resort atmosphere",
  },
  {
    src: "/images/1718684711463_0.jpg",
    altTh: "ธรรมชาติรอบบ้านอาปารีสอร์ท",
    altEn: "Nature around Baan APA Resort",
  },
  {
    src: "/images/1718684715403_0.jpg",
    altTh: "บรรยากาศเรียบง่ายและสงบ",
    altEn: "Simple and peaceful atmosphere",
  },
  {
    src: "/images/1718684720878_0.jpg",
    altTh: "ภาพบรรยากาศภายในรีสอร์ท",
    altEn: "Resort interior atmosphere",
  },
  {
    src: "/images/1718684723804_0.jpg",
    altTh: "มุมพักผ่อนใกล้ธรรมชาติ",
    altEn: "Relaxing area close to nature",
  },
  {
    src: "/images/1718684727834_0.jpg",
    altTh: "บรรยากาศบ้านพักและธรรมชาติ",
    altEn: "House and nature atmosphere",
  },
  {
    src: "/images/1718684730705_0.jpg",
    altTh: "มุมสงบของบ้านอาปา",
    altEn: "Calm corner of Baan APA",
  },
  {
    src: "/images/1718684734273_0.jpg",
    altTh: "ประสบการณ์พักผ่อนที่บ้านอาปา",
    altEn: "Retreat experience at Baan APA",
  },
  {
    src: "/images/1718684748949_0.jpg",
    altTh: "บรรยากาศธรรมชาติในกาญจนบุรี",
    altEn: "Natural Kanchanaburi atmosphere",
  },
  {
    src: "/images/1718684754532_0.jpg",
    altTh: "ภาพบรรยากาศรีสอร์ทเพิ่มเติม",
    altEn: "Additional resort atmosphere",
  },
  {
    src: "/images/IMG_8074_0.JPG",
    altTh: "ภาพบ้านอาปารีสอร์ท",
    altEn: "Baan APA Resort photo",
  },
  {
    src: "/images/IMG_8091_0.JPG",
    altTh: "บรรยากาศภายในบ้านอาปา",
    altEn: "Atmosphere inside Baan APA",
  },
  {
    src: "/images/IMG_8099_0.JPG",
    altTh: "มุมสวยของรีสอร์ท",
    altEn: "Beautiful resort view",
  },
  {
    src: "/images/IMG_8184_0.JPG",
    altTh: "บ้านอาปาในบรรยากาศธรรมชาติ",
    altEn: "Baan APA in a natural atmosphere",
  },
  {
    src: "/images/IMG_8188_0.JPG",
    altTh: "พื้นที่พักผ่อนของบ้านอาปา",
    altEn: "Baan APA relaxation area",
  },
  {
    src: "/images/IMG_8191_0.JPG",
    altTh: "ภาพรีสอร์ทและธรรมชาติ",
    altEn: "Resort and nature photo",
  },
  {
    src: "/images/IMG_8194_0.JPG",
    altTh: "มุมอบอุ่นภายในรีสอร์ท",
    altEn: "Warm corner inside the resort",
  },
  {
    src: "/images/IMG_8198_0.JPG",
    altTh: "บรรยากาศพักผ่อนในบ้านอาปา",
    altEn: "Relaxing atmosphere at Baan APA",
  },
  {
    src: "/images/IMG_8231_0.JPG",
    altTh: "ภาพเพิ่มเติมของบ้านอาปา",
    altEn: "Additional Baan APA photo",
  },
  {
    src: "/images/IMG_8232_0.JPG",
    altTh: "ภาพบรรยากาศบ้านอาปารีสอร์ทเพิ่มเติม",
    altEn: "Additional Baan APA Resort atmosphere",
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
      title: "ประเภทห้องพัก",
      intro:
        "เลือกประเภทห้องพักที่เหมาะกับสไตล์การพักผ่อนของคุณ ตั้งแต่ห้องส่วนตัวสำหรับ 2 คน ไปจนถึงบ้านพักสำหรับกลุ่มหลายคน",
      select: "สอบถามห้องพัก",
      items: {
        "ND 1-2": {
          type: "Private Stay",
          title: "ND 1-2",
          desc: "ห้องน็อคดาวน์แฝด เหมาะสำหรับการพักผ่อนแบบเรียบง่ายและเป็นส่วนตัว",
          detail: "เหมาะสำหรับผู้เข้าพักที่ต้องการบรรยากาศสงบ เรียบง่าย และพักผ่อนได้อย่างเป็นส่วนตัว",
        },
        "ND 3-4": {
          type: "Poolside Private House",
          title: "ND 3-4",
          desc: "ห้องน็อคดาวน์ เป็นบ้าน 1 หลังที่มีความเป็นส่วนตัว เหมาะสำหรับ 2 คน พร้อมวิวสระน้ำและริมน้ำ",
          detail: "เหมาะสำหรับคู่รักหรือผู้เข้าพัก 2 คนที่ต้องการความเป็นส่วนตัวพร้อมวิวรีสอร์ท",
        },
        "RH 1-10": {
          type: "Riverside View",
          title: "RH 1-10",
          desc: "เหมาะสำหรับ 2 คน มีวิวริมน้ำที่สวยงาม และพื้นที่ด้านบนสำหรับรับประทานอาหารพร้อมชมวิวจากมุมสูง",
          detail: "เหมาะกับการพักผ่อนริมน้ำ พร้อมมุมรับประทานอาหารและชมวิวในบรรยากาศสงบ",
        },
        "LN 1-2": {
          type: "Near Raft",
          title: "LN 1-2",
          desc: "ห้องพักที่ตกแต่งไม่เหมือนใคร อยู่ใกล้แพริมน้ำ เหมาะสำหรับประมาณ 2 คน",
          detail: "เหมาะสำหรับผู้ที่ชอบความแตกต่างและอยากอยู่ใกล้บรรยากาศแพริมน้ำ",
        },
        "Thai House": {
          type: "Group Stay",
          title: "Thai House",
          desc: "บ้านทรงไทย เหมาเป็นหลัง มีความสวยงามแบบไทย กว้างขวาง เหมาะสำหรับกลุ่มหลายคน",
          detail: "เหมาะสำหรับครอบครัวหรือกลุ่มเพื่อนที่ต้องการพื้นที่กว้างและเสน่ห์แบบไทย",
        },
        "Blue House": {
          type: "Private Group House",
          title: "Blue House",
          desc: "บ้านสีฟ้า เหมาเป็นหลัง มีสีสันสดใส ความเป็นส่วนตัวสูง และรองรับผู้เข้าพักหลายคน",
          detail: "เหมาะสำหรับกลุ่มที่ต้องการบ้านพักเป็นหลัง บรรยากาศสดใส และความเป็นส่วนตัว",
        },
        "Boat House": {
          type: "Boat Stay",
          title: "Boat House",
          desc: "บ้านบนเรือ ให้ประสบการณ์นอนบนเรือที่สะดวกสบายครบครัน และสามารถเล่นน้ำได้ เหมาะสำหรับ 2 คน",
          detail: "เหมาะสำหรับผู้ที่อยากได้ประสบการณ์พักบนเรือ พร้อมความสะดวกและกิจกรรมใกล้น้ำ",
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
      title: "Room Types",
      intro:
        "Explore room types for every style of retreat, from private stays for two to full houses for larger groups.",
      select: "Ask About This Room",
      items: {
        "ND 1-2": {
          type: "Private Stay",
          title: "ND 1-2",
          desc: "Twin knockdown rooms designed for a simple and private stay.",
          detail: "Ideal for guests who want a calm, simple, and private retreat.",
        },
        "ND 3-4": {
          type: "Poolside Private House",
          title: "ND 3-4",
          desc: "Private knockdown house suitable for 2 guests, with poolside and riverside views.",
          detail: "Ideal for couples or two guests who want privacy with resort views.",
        },
        "RH 1-10": {
          type: "Riverside View",
          title: "RH 1-10",
          desc: "Ideal for 2 guests, with beautiful riverside views and an upper area for dining while enjoying elevated scenery.",
          detail: "Ideal for riverside stays with a scenic dining area and calm atmosphere.",
        },
        "LN 1-2": {
          type: "Near Raft",
          title: "LN 1-2",
          desc: "Uniquely decorated rooms located near the riverside raft, suitable for around 2 guests.",
          detail: "Ideal for guests who enjoy unique room character and proximity to the raft area.",
        },
        "Thai House": {
          type: "Group Stay",
          title: "Thai House",
          desc: "A full Thai-style house with traditional charm, spacious design, and suitable for larger groups.",
          detail: "Ideal for families or groups seeking space and Thai-style character.",
        },
        "Blue House": {
          type: "Private Group House",
          title: "Blue House",
          desc: "A full blue private house with a vibrant look, high privacy, and space for multiple guests.",
          detail: "Ideal for groups who want a colorful private house with generous space.",
        },
        "Boat House": {
          type: "Boat Stay",
          title: "Boat House",
          desc: "A comfortable boat house stay with full amenities and direct access to water activities, ideal for 2 guests.",
          detail: "Ideal for guests looking for a memorable boat stay close to water activities.",
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
