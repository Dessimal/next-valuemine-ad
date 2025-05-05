import {
  AirVent,
  Cable,
  Cctv,
  FireExtinguisher,
  PencilRuler,
  Workflow,
} from "lucide-react";

import valuemineOne from "@/public/valuemine-setup-1.jpg";

import valuemineFour from "@/public/valuemine-setup-4.jpg";

import valuemineSix from "../../public/valuemine-setup-6.jpg";

export const videoLinks = [
  "https://res.cloudinary.com/druwmu39g/video/upload/v1745409377/avwwz26bqagorah2d5be.mp4",
  "https://res.cloudinary.com/druwmu39g/video/upload/v1745811611/2Nd-Biodun_Alonge_1_d7xskq.mp4",
  "https://res.cloudinary.com/druwmu39g/video/upload/v1746011976/0430_mrst13.mp4",
];

export const solarSetups = [valuemineOne, valuemineFour, valuemineSix];

export const services = [
  {
    icon: PencilRuler,
    iconSize: 32,
    text: "Design, procurement, and installation of solar and inverter systems.",
  },
  {
    icon: Cable,
    iconSize: 32,

    text: "Residential, commercial, and industrial electrical wiring and installations.",
  },
  {
    icon: Cctv,
    iconSize: 32,

    text: "Procurement and installation of CCTV surveillance and security systems.",
  },
  {
    icon: Workflow,
    iconSize: 32,

    text: "Development and deployment of home and building automation solutions.",
  },
  {
    icon: FireExtinguisher,
    iconSize: 32,

    text: "Installation and maintenance of fire alarm and detection systems.",
  },
  {
    icon: AirVent,
    iconSize: 32,

    text: "General procurement, supply, and installation of electrical and electronic equipment.",
  },
];
