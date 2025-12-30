import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  // reactjs,
  redux,
  tailwind,
  matrail,
 next,
  gsap,
  git,
  antdesign,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Branding",
    icon: web,
  },
  {
    title: "Dashboard",
    icon: mobile,
  },
  {
    title: "Adnmin Panel",
    icon: backend,
  },
  {
    title: "E-commerce",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Material UI",
    icon: matrail,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Ant Design",
    icon: antdesign,
  },
  {
    name: "Gsap",
    icon: gsap,
  },
];

const projects = [
  {
    name: "Apple-Clone",
    description:
      "Created a visually stunning and fully interactive website using GSAP for smooth animations and Three.js for 3D effects. The site delivers a modern, engaging user experience that highlights both creativity and technical skill. Perfect example of combining cutting-edge web technologies to make a website truly stand out.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://apple-clone-gsap-js.vercel.app/#",
  },
  {
    name: "Restaurant Website",
    description:
      "A sleek, modern restaurant website designed to captivate food lovers at first glance. Grilli blends a dark, sophisticated aesthetic with golden accents and mouthwatering high-res imagery to create an immersive dining experience—before the guest even steps through the door.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://grilli-amazing-delicious-food.vercel.app/",
  },
  {
    name: "Sumz – AI Article Summarizer Web App",
    description:
      "This project is a modern responsive web application that summarizes long-form articles using the power of OperAI GPT-4 I built this project to simplify reading and make information more accessible. Users can paste any article link, and the app automatically generates a concise summary within seconds.",
    tags: [
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ai-app-api-react.vercel.app/",
  },
];

export { services, technologies, projects };
