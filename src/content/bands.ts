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
    description: 'a CCA under the NUS cultural acitivity club (now under the Centre for the Arts) specialises in mandopop performance.',
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
    tags: ["Jazz", "Fusion", "Swing", "Standards"],
    performances: [
      {
        title: "JASG60",
        date: "30/04/2025",
        venue: "Gardens by the Bay, Singapore",
        description: "one of the hugest jazz event in Singapore organised by the jazzlings to celebrate SG60. It is also the Singapore stop of the international jazz day.",
        images: [
          {src: "/band-images/Jazzlings/jasg60-1.jpg"},
          {src: "/band-images/Jazzlings/jasg60-2.jpg"}
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
        date: "15/06/2023",
        venue: "NUS Auditorium 3",
        description: "We performed Superstition by Stevie Wonder, click the image to view the video!",
        images: [
          {src: "/band-images/Geyao/cm1.jpg", url: "https://www.bilibili.com/video/BV1ii4y1i7uB/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ],
      },
    ]
  },
};

export const bandsList = Object.values(bandsData); 