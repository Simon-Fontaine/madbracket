import { Separator } from "@/components/ui/separator";
import { ArrowRight, Blocks } from "lucide-react";
import Link from "next/link";

export function Announcement() {
  return (
    <Link
      href="/tournaments"
      className="group inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Blocks className="h-4 w-4" />{" "}
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span>New tournaments are live!</span>
      <ArrowRight className="group ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
