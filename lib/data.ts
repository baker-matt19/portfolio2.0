import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { LuComputer } from "react-icons/lu";
import recipeepsImg from "@/public/recipeeps.png";
import crowFunImg from "@/public/crowdFunding.png";
import { TbHome } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { SiWheniwork } from "react-icons/si";
import { TiMessages } from "react-icons/ti";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(TbHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(FaUserAstronaut),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaComputer),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(GiSkills)
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(SiWheniwork),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(TiMessages),
  },
] as const;

export const experiencesData = [
  {
    title: "Persevere MERN stack bootcamp",
    location: "Eloy, AZ",
    description:
      "Successfully completed a rigorous MERN stack boot camp, demonstrating proficiency in full-stack web development with a focus on MongoDB, Express.js, React.js, and Node.js technologies. Acquired comprehensive skills in designing and implementing web applications through intensive hands-on training and practical projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov. 2022 - Nov.2023",
  },
  {
    title: "Freelancing",
    location: "Remote",
    description: "Over the course of six months, I've immersed myself in the vibrant world of freelancing, specializing in JavaScript and React for front-end development projects. Through platforms like Upwork and Fiverr, I've collaborated with clients globally, delivering tailored solutions that blend cutting-edge technology with intuitive design. From crafting responsive user interfaces to optimizing website performance, each project has deepened my expertise in leveraging JavaScript and React to create seamless digital experiences.",
    icon: React.createElement(LuComputer),
    date: "Nov. 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Recipeeps Recipe App",
    description:
      "I built a full-stack app with react and bootstrap. I utilized a proxy server to access the edamam API for all the recipes.",
    tags: ["React", "Node.js", "Express.js", "Bootstrap", "Edamam API" ],
    imageUrl: recipeepsImg,
  },
  {
    title: "Crowd Funding Site",
    description:
      "A front-end design I made for a crowdfunding platform. Used React and Bootstrap.",
    tags: ["React", "Bootstrap"],
    imageUrl: crowFunImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;