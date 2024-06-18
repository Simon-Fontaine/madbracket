import { Icons } from "@/components/icons";
import { config } from "@/config";
import Link, { type LinkProps } from "next/link";

export function Logo({ ...props }: LinkProps) {
  return (
    <Link {...props} className="mr-6 flex items-center space-x-2">
      <Icons.logo className="h-6 w-6" />
      <span className="font-bold">{config.name}</span>
    </Link>
  );
}
