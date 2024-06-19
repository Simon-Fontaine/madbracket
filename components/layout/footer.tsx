import { config } from "@/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        {config.privacyPolicy ? (
          <Link href={config.privacyPolicy} className="text-sm">
            Privacy Policy
          </Link>
        ) : null}
        {config.termsOfService ? (
          <Link href={config.termsOfService} className="text-sm">
            Terms of Service
          </Link>
        ) : null}
        {config.cookiePolicy ? (
          <Link href={config.cookiePolicy} className="text-sm">
            Cookie Policy
          </Link>
        ) : null}
      </div>
    </footer>
  );
}
