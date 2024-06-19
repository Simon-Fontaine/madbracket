"use client";

import { Button } from "./ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      className={cn("group", className)}
      onClick={() => router.back()}
      variant="ghost"
    >
      <Icons.chevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back
    </Button>
  );
}
