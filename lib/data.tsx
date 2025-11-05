import { Code, Lightbulb, Users, Target } from "lucide-react";

export const projects = [
  {
    title: "HamroSadhan",
    description:
      "A modern vehicle rental platform built with Next.js and Prisma ORM",
    image: "/HamroSadhan.png",
    tech: ["Next.js", "Tailwind CSS", "Prisma with PostgreSQL", "TypeScript"],
    github: "https://github.com/Harish8848/HamroSadhan",
    live: "https://hamrosadhan.vercel.app",
  },
  {
    title: "RoomSathi",
    description:
      "RoomSathi is a modern web application that connects room owners and room seekers in one simple and efficient platform — without the need for brokers or middlemen.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "TypeScript", "Prisma with PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "MausamSathi",
    description: "A beautiful weather dashboard with location-based forecasts supports nepali language also.",
    image: "/MausamSathi.png",
    tech: ["Next.js", "OpenWeatherMap API", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Harish8848/weather-app",
    live: "#",
  },
];

import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", level: 85, icon: "⚛️", category: "frontend" },
      { name: "Next.js", level: 70, icon: "▲", category: "frontend" },
      { name: "TypeScript", level: 85, icon: "📘", category: "frontend" },
      { name: "Tailwind CSS", level: 90, icon: "🎨", category: "frontend" },
      { name: "JavaScript", level: 90, icon: "🟨", category: "frontend" },
      { name: "HTML/CSS", level: 96, icon: "🌐", category: "frontend" },
    ],
  },
  {
    name: "Backend Development",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 50, icon: "🟢", category: "backend" },
      {
        name: "PostgreSQL, ORACLE, MYSQL",
        level: 75,
        icon: "🗄️",
        category: "Database",
      },
      { name: "REST APIs", level: 80, icon: "🔗", category: "backend" },
    ],
  },

  {
    name: "Tools & Technologies",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 80, icon: "📚", category: "tools" },
      { name: "Figma", level: 75, icon: "🎨", category: "tools" },
      { name: "VS Code", level: 95, icon: "💻", category: "tools" },
    ],
  },
];

export const values = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and creative solutions",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong relationships with teams",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable business value",
  },
];

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "bhattharish2059@gmail.com",
      href: "mailto:bhattharish2059@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+977 9868795658",
      href: "tel:+9779868795658",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Dodhara Chandani-1, Nepal",
      href: "https://maps.app.goo.gl/3QL9SEX14zoRHFhH9",
    },
  ];

  export const socialLinks = [
    { icon: Github, href: "", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harish8848/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Harish8848_86", label: "Twitter" },
  ];