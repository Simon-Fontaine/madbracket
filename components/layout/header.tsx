import { NavigationDesktop } from "./navigation/desktop";
import { NavigationMobile } from "./navigation/mobile";
import AuthButton from "@/components/layout/auth-button";
import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <NavigationDesktop />
        <NavigationMobile />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex w-auto flex-none items-center">
            <AuthButton />
            {config.socials.map((social, index) =>
              social.url && !social.disabled ? (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  {social.icon ? (
                    <social.icon className="h-4 w-4" />
                  ) : (
                    social.name
                  )}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ) : null,
            )}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
