interface Author {
  url?: string | URL | undefined;
  name?: string | undefined;
}

interface Config {
  name: string;
  version: string;
  description: string;
  url: string;
  links: {
    github: string;
    twitter: string;
    discord: string;
  };
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
    github: "https://github.com",
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  keywords: ["madbracket", "bracket", "tournament", "platform"],
  authors: [
    {
      name: "Simon Fontaine",
    },
  ],
};
