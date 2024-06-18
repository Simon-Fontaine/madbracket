"use client";

import { Icons } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navigation } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

function NavigationDesktopComponent() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden items-center md:flex">
      <Logo href="/" />
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {navigation.map((item, index) =>
          item.href && !item.disabled ? (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground",
                pathname.endsWith(item.href)
                  ? "font-semibold text-foreground"
                  : "text-foreground/60",
              )}
              target={item.external ? "_blank" : undefined}
              aria-label={item.title}
            >
              <div className="flex items-center gap-1">
                {item.icon ? (
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                ) : null}
                <span>{item.title}</span>
                {item.external ? <Icons.external className="h-4 w-4" /> : null}
              </div>
            </Link>
          ) : null,
        )}
      </nav>
    </div>
  );
}

export const NavigationDesktop = memo(NavigationDesktopComponent);
