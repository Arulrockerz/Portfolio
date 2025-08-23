import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  mongodb,
  git,
  figma,
  docker,
  python,
  java,
  SQL,
  oops,
  FastApi,
  chennaiMetro,
  garbai,
  logiclens,
  think,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops and Cloud Management",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "sql",
    icon: SQL,
  },
  {
    name: "OOPS",
    icon: oops,
  },
  {
    name: "FastApi",
    icon: FastApi,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Chennai Metro Rail Limited",
    icon: chennaiMetro, // Replace with the actual import or icon path you're using
    iconBg: "#1D3557",   // You can change this to match your theme
    date: "FEB 2025 - MAR 2025",
    points: [
      "Developed a web portal to manage passenger details and account summaries for Chennai Metro Rail.",
      "Integrated an interactive map to display metro stations and real-time route details.",
      "Built features for secure passenger login, account access, and metro travel summaries.",
      "Collaborated with the HR department to gather requirements and ensure user-friendly design.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GarbAI - AI Wardrobe System",
    description:
      "An AI-powered wardrobe management system that suggests clothing combinations based on user preferences, stores, and current trends using LLaMA and Ollama with a FastAPI backend.",
    tags: [
      { name: "fastapi", color: "green-text-gradient" },
      { name: "ollama", color: "blue-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: garbai,
    source_code_link: "https://github.com/Arulrockerz",
  },
  {
    name: "LogicLens IDE - AI Logic Assistance",
    description:
      "An AI-powered code editor built with Monaco and CrewAI that gives logic-based coding suggestions, edge case feedback, and improvement tips without revealing the actual solution",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "crewai", color: "green-text-gradient" },
      { name: "monaco-editor", color: "pink-text-gradient" },
    ],
    image: logiclens,
    source_code_link: "https://github.com/Arulrockerz",
  },
  {
    name: "Upcoming Project - Think-Assistance",
    description:
      "An AI assistant that provides step-by-step logic building by converting first spark of thinking into actual real time ideas for students and developers in real time using natural language, CrewAI, and FastAPI.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "crewai", color: "green-text-gradient" },
      { name: "monaco-editor", color: "pink-text-gradient" },
    ],
    image: think,
    source_code_link: "https://github.com/Arulrockerz",
  },
];

export { services, technologies, experiences, testimonials, projects };
