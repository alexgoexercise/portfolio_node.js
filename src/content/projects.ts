export type Project = {
  title: string;
  description: string | string[];
  images: string[];
  tags: string[];
  url?: string;
  clickNotice?: string;
};

const Pro1 = '/Pro1.jpg';
const Pro2 = '/Pro2.jpg';
const Pro3 = '/Pro3.jpg';
const Pro4 = '/Pro4.jpg';
const Pro5 = '/Pro5.jpg';
const rtos1 = '/rtos1.jpg';
const rtos2 = '/rtos2.jpg';
const rtos3 = '/rtos3.jpg';
const Port1 = '/Portfolio1.jpg';
const Port2 = '/Portfolio2.jpg';

export const projects: Project[] = [
  {
    title: "AR Laser Tag++",
    description: [
      "Developed wearable system with gun, vest, and sensors for AR gaming.",
      "The hardware logic is built based on Arduino (IR transimission between the gun and vest for shooting, LED flashing for health display and so on), then is integrated with socket programming (in charge by my other teammate) to communicate with the host machine.",
      "The game supports up to 2 players, each players can perform special attack or simply shoot from the 'hand gun' to deal damage to the opponent."
    ],
    images: [
      Pro1,
      Pro2,
      Pro3,
      Pro4,
      Pro5,
    ],
    tags: ["Arduino", "Machine Learning", "Hardware Design"],
    url: "https://youtu.be/j6V-k7JI1kU?si=eQzZtGNRQTZ5DoNx",
    clickNotice: "Click to watch the demo video (my personal part)"
  },
  {
    title: "RTOS Car Racing",
    description: ["Utilised an RTOS to develop an ARM-based autonomous robotic car under competitive race conditions.",
      "Finished among the higher-ranking competitors in the final race."
    ],
    images: [
      rtos1,
      rtos2,
      rtos3,
    ],
    tags: ["RTOS", "Embedded C", "ARM Architecture"],
    url: "https://youtu.be/wuBXb3VTfQs?si=vmmgp4It8mhxug4X",
    clickNotice: "Click to watch the demo video"
  },
  {
    title: "Personal Website",
    description: "Personal Website built with node.js + react tech stack.",
    images:[
      Port1,
      Port2,
    ],
    tags: ["node.js", "react", "typescript", "vercel"],
    url: "https://github.com/alexgoexercise/portfolio_node.js",
    clickNotice: "Click to view source code"
  }
]; 