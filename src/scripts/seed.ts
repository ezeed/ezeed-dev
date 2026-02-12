import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const data = {
  name: "John Doe",
  initials: "JD",
  url: "https://johndoe.dev",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/buenosaires",
  description: {
    en: "Senior Fullstack Developer. I build web apps with React and Node.js, and sometimes mobile stuff too.",
    es: "Desarrollador Fullstack Senior. Construyo apps web con React y Node.js, y a veces tambien cosas mobile.",
  },
  summary: {
    en: "I'm a fullstack developer working mostly with **React** and **Node.js**. Been doing this for 8+ years across different companies and projects. Currently at Waterplan. Previously at Conekta and Ank. I work on both frontend and backend stuff, and occasionally build mobile apps. When I'm not at the keyboard, you'll probably find me spending time with friends and family, diving into Japanese culture, or playing MTGA or Silksong.",
    es: "Soy desarrollador fullstack trabajando principalmente con **React** y **Node.js**. Llevo mas de 8 anos en esto, pasando por distintas empresas y proyectos. Actualmente en Waterplan. Antes en Conekta y Ank. Trabajo tanto en frontend como backend, y de vez en cuando hago apps mobile. Cuando no estoy programando, seguro me encontras pasando tiempo con amigos y familia, metido en cultura japonesa, o jugando MTGA o Silksong.",
  },
  avatarUrl: "/me.png",
  // Each skill has a `name` (display label) and an `icon` (export name from the `developer-icons` package).
  // Browse available icons at: https://xandemon.github.io/developer-icons/icons/All
  skills: [
    { name: "React", icon: "React" },
    { name: "Next.js", icon: "NextJs" },
    { name: "Typescript", icon: "TypeScript" },
    { name: "Node.js", icon: "NodeJs" },
    { name: "Python", icon: "Python" },
    { name: "Go", icon: "Go" },
    { name: "Postgres", icon: "PostgreSQL" },
    { name: "Docker", icon: "Docker" },
    { name: "Kubernetes", icon: "Kubernetes" },
    { name: "Java", icon: "Java" },
    { name: "C#", icon: "CSharp" },
  ],
  resumeUrl: {
    en: "https://drive.google.com/file/d/1yZOAjD7OHgvQ4Rf64lTkCU9jGs46-5_L/view?usp=sharing",
    es: "https://drive.google.com/file/d/17sE-I0CwVmvDHqxINZBC1K8iUdwSjteK/view?usp=sharing",
  },
  navbar: [{ href: "/", label: "Home" }],
  contact: {
    email: "hello@johndoe.dev",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/johndoe",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/johndoe",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@johndoe.dev",
        navbar: true,
      },
    },
  },
};

async function seed() {
  await redis.set("resume-data", data);
  console.log("Seeded resume-data to Redis");
}

seed().catch(console.error);
