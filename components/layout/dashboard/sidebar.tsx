"use client";

import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { config, dashboardNavigation } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

function DashboardSidebarComponent() {
  const pathname = usePathname();
  const sidebarLastItem = dashboardNavigation[dashboardNavigation.length - 1];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Icons.logo className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">{config.name}</span>
          </Link>
          {dashboardNavigation.map((item, index) =>
            index !== dashboardNavigation.length - 1 &&
            item.href &&
            !item.disabled ? (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname.endsWith(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                    )}
                    target={item.external ? "noreferrer" : undefined}
                  >
                    {item.external ? (
                      <Icons.external className="h-4 w-4" />
                    ) : (
                      <item.icon className="h-5 w-5" />
                    )}
                    <span className="sr-only">{item.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            ) : null,
          )}
        </nav>
        {sidebarLastItem.href && !sidebarLastItem.disabled && (
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={sidebarLastItem.href}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                    pathname.endsWith(sidebarLastItem.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                  target={sidebarLastItem.external ? "noreferrer" : undefined}
                >
                  {sidebarLastItem.external ? (
                    <Icons.external className="h-4 w-4" />
                  ) : (
                    <sidebarLastItem.icon className="h-5 w-5" />
                  )}
                  <span className="sr-only">{sidebarLastItem.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                {sidebarLastItem.title}
              </TooltipContent>
            </Tooltip>
          </nav>
        )}
      </TooltipProvider>
    </aside>
  );
}

export const DashboardSidebar = memo(DashboardSidebarComponent);
