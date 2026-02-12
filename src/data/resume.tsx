import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import * as DevIcons from "developer-icons";
import type { ComponentType } from "react";

export type ResumeData = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: Record<string, string>;
  summary: Record<string, string>;
  avatarUrl: string;
  skills: { name: string; icon: string }[];
  navbar: { href: string; label: string }[];
  resumeUrl: Record<string, string>;
  contact: {
    email: string;
    social: Record<string, { name: string; url: string; navbar: boolean }>;
  };
};

export const SOCIAL_ICONS: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
  X: Icons.x,
  email: Icons.email,
};

export const NAVBAR_ICONS: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  Home: HomeIcon,
};

export const FALLBACK_DATA: ResumeData = {
  name: "Ezequiel Cabrera",
  initials: "EC",
  url: "https://ezeed.dev",
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
  skills: [
    {
      name: "React",
      icon: "React",
    },
    {
      name: "Next.js",
      icon: "NextJs",
    },
    {
      name: "Typescript",
      icon: "TypeScript",
    },
    {
      name: "Node.js",
      icon: "NodeJs",
    },
    {
      name: "JavaScript",
      icon: "JavaScript",
    },
    {
      name: "Tailwind",
      icon: "TailwindCSS",
    },
    {
      name: "React Query",
      icon: "ReactQuery",
    },
    {
      name: "Jest",
      icon: "Jest",
    },
    {
      name: "ExpressJs",
      icon: "ExpressJsLight",
    },
    {
      name: "Zod",
      icon: "Zod",
    },
    {
      name: "MongoDB",
      icon: "MongoDB",
    },
  ],
  resumeUrl: {
    en: "https://drive.google.com/file/d/1yZOAjD7OHgvQ4Rf64lTkCU9jGs46-5_L/view?usp=sharing",
    es: "https://drive.google.com/file/d/17sE-I0CwVmvDHqxINZBC1K8iUdwSjteK/view?usp=sharing",
  },
  navbar: [
    {
      href: "/",
      label: "Home",
    },
  ],
  contact: {
    email: "ezequielcabrera87@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ezeed",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ezequielcabrera",
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ezeed",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ezequielcabrera87@gmail.com",
        navbar: true,
      },
    },
  },
};

const devIcons = DevIcons as Record<
  string,
  ComponentType<{ className?: string }>
>;

export function mergeWithIcons(data: ResumeData) {
  return {
    ...data,
    skills: data.skills.map((skill) => ({
      name: skill.name,
      icon: devIcons[skill.icon],
    })),
    navbar: data.navbar.map((item) => ({
      ...item,
      icon: NAVBAR_ICONS[item.label],
    })),
    contact: {
      ...data.contact,
      social: Object.fromEntries(
        Object.entries(data.contact.social).map(([key, social]) => [
          key,
          { ...social, icon: SOCIAL_ICONS[key] },
        ]),
      ),
    },
  };
}
