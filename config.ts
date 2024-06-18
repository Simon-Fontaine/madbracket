import { type LucideIcon } from "lucide-react";

interface Author {
  url?: string | URL | undefined;
  name?: string | undefined;
}

interface Config {
  name: string;
  version: string;
  description: string;
  url: string;
  links: Record<string, string>;
  keywords: string[];
  authors: Author[];
}

interface NavigationItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  label?: string;
}

export const config: Config = {
  name: "MadBracket",
  version: "0.1.0",
  description:
    "Your one-stop shop for all tournament needs. Create, manage, and join tournaments with ease.",
  url: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
  links: {
    github: "https://github.com/Simon-Fontaine/madbracket",
    twitter: "https://x.com/",
    discord: "https://discord.com",
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
    cookiePolicy: "/cookie-policy",
  },
  keywords: ["madbracket", "bracket", "tournament", "platform"],
  authors: [
    {
      name: "Simon Fontaine",
      url: "https://github.com/Simon-Fontaine",
    },
  ],
};

export const navigation: NavigationItem[] = [
  {
    title: "Players",
    href: "/players",
    disabled: false,
    external: false,
  },
  {
    title: "Teams",
    href: "/teams",
    disabled: false,
    external: false,
  },
  {
    title: "Tournaments",
    href: "/tournaments",
    disabled: false,
    external: false,
  },
];
