import { Announcement } from "@/components/announcement";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Welcome to {config.name}</PageHeaderHeading>
        <PageHeaderDescription>{config.description}</PageHeaderDescription>
        <PageActions>
          <Link href="/dashboard" className={cn(buttonVariants())}>
            Get Started
          </Link>
        </PageActions>
      </PageHeader>
    </>
  );
}
