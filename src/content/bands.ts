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
  externalUrl?: string;
  clickNotice?: string;
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
    externalUrl: "https://www.instagram.com/nusvoices",
    clickNotice: "Click to follow on Instagram",
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
    externalUrl: "https://www.instagram.com/thejazzlings",
    clickNotice: "Click to follow on Instagram",
    performances: [
      {
        title: "SCO Music Tapas",
        date: "26/01/2024",
        venue: "Singapore Chinese Cultural Centre",
        description: "Performed with the jazzlings to open for the SCO Music Tapas event.",
        images: [
          {src: "/band-images/Jazzlings/sco1.jpg"},
          {src: "/band-images/Jazzlings/sco2.jpg"}
        ]
      },
      {
        title: "CNY Video Filming",
        date: "24/01/2025",
        venue: "Biantong's dad's studio",
        description: "Filmed a short jazz cover of the famous CNY tune 恭喜恭喜.",
        images: [
          {src: "/band-images/Jazzlings/gxgx1.jpg", url: "https://youtu.be/FP5QR1rw_g0?si=rtDwLAIet3CPodW9"}
        ]
      },
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
        description: "Performed in former prime minister Goh Chok Tong's birthday celebration with the jazzlings, covered songs from jazz standards like 'Moon River' to mandopop classics like 恰似你的温柔.",
        images: [
          {src: "/band-images/Jazzlings/big-birthday1.jpg"},
          {src: "/band-images/Jazzlings/big-birthday2.jpg"}
        ]
      }
    ]
  },
  3: {
    id: "3",
    name: "水泥幻象 Concrete Mirage",
    description: "a band formed under the NUSGeyao, specialises in covering funk and RNB songs.",
    image: "/band-images/Geyao/cm-cover.jpg",
    period: "2022 - present",
    role: "drummer",
    tags: ["Funk", "RNB"],
    externalUrl: "https://www.instagram.com/concretemirage",
    clickNotice: "Click to follow on Instagram",
    performances: [
      {
        title: "Bring It Back To Life 2023: Reflection!",
        date: "29/03/2023",
        venue: "NUS UCC Theatre",
        description: "Performed with Concrete Mirage (back then was named 林檎凤梨) for the NUS EMCC show BIBTL2023; we covered a few songs with a great range of variety.",
        images: [
          {src: "/band-images/Geyao/cm-bibtl1.jpg", url: "https://www.bilibili.com/video/BV1hT411B7Kc/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ]
      },
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
        description: "Performed at the NUS Student Life Fair 2024, as one of the representatives from NUS Geyao.",
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
    description: "a band formed under the NUSGeyao, specialises in covering songs from 二手玫瑰.",
    image: "/band-images/Geyao/rosies-cover.jpg",
    period: "2024 - present",
    role: "drummer",
    tags: ["Rock", "Chinese Rock"],
    performances: [
      {
        title: "Full Power 1.0",
        date: "04/05/2024",
        venue: "Wire Entertainment",
        description: "First time performing with the Rosies to sweat out a 40min Rock set covering songs from 二手玫瑰 including 仙儿，枉凝眉 and many more.",
        images: [
          {src: "/band-images/Geyao/rosies-wire1.jpg", url: "https://www.bilibili.com/video/BV1jm411y7qR/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
          {src: "/band-images/Geyao/rosies-wire2.jpg", url: "https://www.bilibili.com/video/BV1jm411y7qR/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
          {src: "/band-images/Geyao/rosies-wire3.jpg", url: "https://www.bilibili.com/video/BV1jm411y7qR/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ]
      },
      {
        title: "大连理工 潮汐·脉冲 音乐节",
        date: "01/06/2025",
        venue: "大连理工大学",
        description: "Performed with the Rosies again, which was invited as a guest band to perform in the 潮汐·脉冲音乐节 organised by the 沙丁鱼乐队 from 大连理工大学.",
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
    name: "安得万全法",
    description: "a band formed under the NUSGeyao, cover songs from 万能青年旅店.",
    image: "/band-images/Geyao/adwqf-cover.jpg",
    period: "2024",
    role: "drummer",
    tags: ["Rock", "Chinese Rock"],
    performances: [
      {
        title: "Full Power 1.0",
        date: "04/05/2024",
        venue: "Wire Entertainment",
        description: "Tried my best to salute the legendary band 万能青年旅店 with my bros in 安得万全法 by covering their famous songs like 在这颗行星所有的酒馆, 永嘉彗星, 杀死那个石家庄人 and a few more. We also covered the song 'Lonely God' by 惘闻.",
        images: [
          {src: "/band-images/Geyao/adwqf1.jpg", url: "https://youtu.be/Zo4zVeEKLJg?si=mRqycUFRRR5BJIFX"},
          {src: "/band-images/Geyao/adwqf2.jpg", url: "https://youtu.be/Zo4zVeEKLJg?si=mRqycUFRRR5BJIFX"},
          {src: "/band-images/Geyao/adwqf-cover.jpg", url: "https://youtu.be/Zo4zVeEKLJg?si=mRqycUFRRR5BJIFX"}
        ]
      }
    ]
  },
  6: {
    id: "6",
    name: "NUS Jazzband",
    description: "NUS CCA under the Centre for the Arts",
    image: "/band-images/NJB/cover.png",
    period: "2022 - 2024",
    role: "drummer",
    tags: ["Jazz", "Jazz Standards", "Big Band"],
    externalUrl: "https://www.instagram.com/nusjazzband",
    clickNotice: "Click to follow on Instagram",
    performances: [
      {
        title: "Sem 1 Showcase 2022: On Bali Lane",
        date: "20/10/2022",
        venue: "Blujazz, Singapore",
        description: "My first time playing a proper jazz show!",
        images: [
          {src: "/band-images/NJB/OBL1.jpg"},
          {src: "/band-images/NJB/OBL2.jpg"},
          {src: "/band-images/NJB/OBL3.jpg"}
        ]
      },
      {
        title: "Sem 2 Showcase 2023: The Rhythm",
        date: "05/03/2023",
        venue: "NUS UCC Theatre",
        description: "My first time performing at NUS UCC, and second time playing with the NJB as a jazz starter.",
        images: [
          {src: "/band-images/NJB/rhythm1.jpg", url: "https://www.bilibili.com/video/BV1Mm4y1E7LZ/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},  
          {src: "/band-images/NJB/rhythm2.jpg", url: "https://www.bilibili.com/video/BV1Mm4y1E7LZ/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"}
        ]
      },
      {
        title: "Sem 1 Showcase 2023: Feastin'",
        date: "26/10/2023",
        venue: "Lowercase@LASALLE",
        description: "Performed with the NJB small big band, spirited myself through 8 intense tunes.",
        images: [
          {src: "/band-images/NJB/feastin1.jpg", url: "https://www.bilibili.com/video/BV1WC4y1J7dR/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
          {src: "/band-images/NJB/feastin2.jpg", url: "https://www.bilibili.com/video/BV1Rc411D766/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
          {src: "/band-images/NJB/feastin3.jpg", url: "https://www.bilibili.com/video/BV1xg4y1d7Ct/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
          {src: "/band-images/NJB/feastin4.jpg", url: "https://www.bilibili.com/video/BV1cg4y1o7xz/?share_source=copy_web&vd_source=a4379b8be485bc74bafb8366eff4a8bb"},
        ]
      }
    ]
  }
};

export const bandsList = Object.values(bandsData); 