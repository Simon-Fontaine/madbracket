import { Icons } from "./components/icons";
import { type LucideIcon } from "lucide-react";

interface Author {
  url?: string | URL | undefined;
  name?: string | undefined;
}

interface Social {
  name: string;
  url: string;
  disabled?: boolean;
  icon?: LucideIcon;
}

interface Config {
  name: string;
  version: string;
  description: string;
  url: string;
  keywords: string[];
  authors: Author[];
  socials: Social[];
  privacyPolicy?: string;
  termsOfService?: string;
  cookiePolicy?: string;
}

interface NavigationItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  label?: string;
}

interface DashboardNavigationItem extends NavigationItem {
  icon: LucideIcon;
}

export const config: Config = {
  name: "MadBracket",
  version: "0.1.0",
  description:
    "Your one-stop shop for all tournament needs. Create, manage, and join tournaments with ease.",
  url: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",

  keywords: ["madbracket", "bracket", "tournament", "platform"],
  authors: [
    {
      name: "Simon Fontaine",
      url: "https://github.com/Simon-Fontaine",
    },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Simon-Fontaine/madbracket",
      icon: Icons.github as LucideIcon,
      disabled: false,
    },
    {
      name: "Twitter",
      url: "https://x.com/",
      icon: Icons.twitter as LucideIcon,
      disabled: false,
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: Icons.discord as LucideIcon,
      disabled: false,
    },
  ],
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  cookiePolicy: "/cookie-policy",
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

export const dashboardNavigation: DashboardNavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    disabled: false,
    external: false,
    icon: Icons.home,
  },
  {
    title: "Friends",
    href: "/dashboard/friends",
    disabled: false,
    external: false,
    icon: Icons.friends,
  },
  {
    title: "Teams",
    href: "/dashboard/teams",
    disabled: false,
    external: false,
    icon: Icons.teams,
  },
  {
    title: "Tournaments",
    href: "/dashboard/tournaments",
    disabled: false,
    external: false,
    icon: Icons.tournaments,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    disabled: false,
    external: false,
    icon: Icons.analytics,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    disabled: false,
    external: false,
    icon: Icons.settings,
  },
];
