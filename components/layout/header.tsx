import { NavigationDesktop } from "./navigation/desktop";
import { NavigationMobile } from "./navigation/mobile";
import { Icons } from "@/components/icons";
import AuthButton from "@/components/layout/auth-button";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
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
            <Link href={config.links.github} target="_blank" rel="noreferrer">
              <Button variant="ghost">
                <Icons.github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={config.links.twitter} target="_blank" rel="noreferrer">
              <Button variant="ghost">
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
