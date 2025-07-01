export type PerformanceImage = {
  src: string;
  url?: string;
}

export type Performance = {
  title: string;
  date: string;
  venue: string;
  description: string;
  images: PerformanceImage[];
};

export type Band = {
  id: string;
  name: string;
  description: string;
  image: string;
  period: string;
  role: string;
  tags: string[];
  performances: Performance[];
};

export const bandsData: Record<string, Band> = {
  1: {
    id: "1",
    name: "NUS CAC Voices",
    description: 'CCA under the NUS cultural acitivity club (now under the Centre for the Arts) specialises in mandopop performance.',
    image: "/band-images/Voices/cover.jpg",
    period: "2021 - present",
    role: "drummer, bassist, Exco member (vice president & publicity director, 2022-2023)",
    tags: ["Mandopop", "Pop", "Rock"],
    performances: [
    ]
  },
  2: {
    id: "2",
    name: "the Jazzlings",
    description: "Singapore's youth jazz collective",
    image: "/band-images/Jazzlings/cover.jpg",
    period: "2024 - present",
    role: "drummer",
    tags: ["Jazz", "Fusion", "Swing", "Jazz Standards"],
    performances: [
      {
        title: "JASG60",
        date: "30/04/2025",
        venue: "Gardens by the Bay, Singapore",
        description: "One of the greated jazz event in Singapore organised by the jazzlings to celebrate SG60. It is also the Singapore stop of the international jazz day. I performed as a drummer in the bossa nova band stationed near the flower dome at gardens by the bay.",
        images: [
          {src: "/band-images/Jazzlings/jasg60-1.jpg"},
          {src: "/band-images/Jazzlings/jasg60-2.jpg"}
        ]
      },
      {
        title: "Former Prime Minister's Birthday Gig",
        date: "17/05/2025",
        venue: "Fullerton Hotel, Singapore",
        description: "Performed as a drummer in former prime minister Goh Chok Tong's birthday celebration with the jazzlings.",
        images: [
          {src: "/band-images/Jazzlings/big-birthday1.jpg"},
          {src: "/band-images/Jazzlings/big-birthday2.jpg"}
        ]
      },
      {
        title: "SCO Music Tapas",
        date: "26/01/2024",
        venue: "Singapore Chinese Cultural Centre",
        description: "Performed as a drummer with the jazzlings to open for the SCO Music Tapas event.",
        images: [
          {src: "/band-images/Jazzlings/sco1.jpg"},
          {src: "/band-images/Jazzlings/sco2.jpg"}
        ]
      }
    ]
  },
  3: {
    id: "3",
    name: "水泥幻象 Concrete Mirage",
    description: "a band formed under the NUSGeyao cultural activity group.",
    image: "/band-images/Geyao/cm-cover.jpg",
    period: "2022 - present",
    role: "drummer",
    tags: ["Funk", "RNB"],
    performances: [
      {
        title: "红白歌会 2023",
        date: "13/11/2023",
        venue: "NUS Auditorium 3",
        description: "We performed Superstition by Stevie Wonder, click the image to view the video!",
        images: [
          {src: "/band-images/Geyao/cm1.jpg", url: "https://www.bilibili.com/video/BV1ii4y1i7uB/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
          {src: "/band-images/Geyao/cm3.jpg", url: "https://www.bilibili.com/video/BV1ii4y1i7uB/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ]
      },
      {
        title: "NUS SLF 2024",
        date: "16/08/2024",
        venue: "NUS Utown",
        description: "Performed for NUS Student Life Fair 2024, as one of the representatives from NUS Geyao.",
        images: [
          {src: "/band-images/Geyao/cm-slf.jpg", url: "https://www.bilibili.com/video/BV1rE4m1R7gj/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ]
      },
      {
        title: "红白歌会 2024",
        date: "10/11/2024",
        venue: "Wire Entertainment",
        description: "We performed a 40 min set including songs from Doja Cat, Bruno Mars, Khalil Fong and more.",
        images:[
          {src: "/band-images/Geyao/cm2.jpg", url: "https://www.bilibili.com/video/BV1KEBoYrE59/?share_source=copy_web"}
        ]
      }
    ]
  },
  4: {
    id: "4",
    name: "Rosies 余香肉丝",
    description: "a band formed under the NUSGeyao cultural activity group, specialises in cover songs from 二手玫瑰.",
    image: "/band-images/Geyao/rosies-cover.jpg",
    period: "2024 - present",
    role: "drummer",
    tags: ["Rock", "Chinese Rock"],
    performances: [
      {
        title: "Full Power 1.0",
        date: "04/05/2024",
        venue: "Wire Entertainment",
        description: "Performed with the Rosies for a 40min Rock set covering songs from 二手玫瑰 including 仙儿，枉凝眉 and many more.",
        images: [
          {src: "/band-images/Geyao/rosies-wire1.jpg", url: "https://www.bilibili.com/video/BV1jm411y7qR/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ]
      },
      {
        title: "大连理工 潮汐·脉冲 音乐节",
        date: "01/06/2025",
        venue: "大连理工大学",
        description: "Performed with the Rosies, which was invited as a guest band to perform in the 潮汐·脉冲音乐节 organised by the 沙丁鱼乐队 from 大连理工大学.",
        images: [
          {src: "/band-images/Geyao/rosies-大工1.jpg"},
          {src: "/band-images/Geyao/rosies-大工2.jpg"},
          {src: "/band-images/Geyao/rosies-大工3.jpg"},
          {src: "/band-images/Geyao/rosies-大工4.jpg"}
        ]
      }
    ]
  },
  5: {
    id: "5",
    name: "NUS Jazzband",
    description: "NUS CCA under the Centre for the Arts",
    image: "/band-images/NJB/cover.png",
    period: "2022 - present",
    role: "drummer",
    tags: ["Jazz", "Jazz Standards", "Big Band"],
    performances: []
  }
};

export const bandsList = Object.values(bandsData); 