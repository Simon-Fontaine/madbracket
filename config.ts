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

export const config: Config = {
  name: "MadBracket",
  version: "0.1.0",
  description: "MadBracket is a bracket-based tournament platform.",
  url: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
  links: {
    github: "https://github.com/Simon-Fontaine/madbracket",
    twitter: "https://twitter.com",
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
