"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";
import React from "react";

export function Breadcrumbs() {
  const pathname = usePathname();

  const pathnames = useMemo(
    () => pathname.split("/").filter((x) => x),
    [pathname],
  );

  const capitalize = (str: string) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  if (pathnames.length === 0) {
    return null;
  }

  const items = pathnames.map((name, index) => {
    const href = `/${pathnames.slice(0, index + 1).join("/")}`;
    const title = capitalize(name);

    if (index === pathnames.length - 1) {
      return (
        <BreadcrumbItem key={href} aria-current="page">
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      );
    }

    return (
      <BreadcrumbItem key={href}>
        <BreadcrumbLink asChild>
          <Link href={href}>{title}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb className="hidden sm:flex">
      <BreadcrumbList aria-label="Breadcrumb">
        {items.map((item, index) => (
          <Fragment key={index}>
            {item}
            {index < items.length - 1 && (
              <BreadcrumbSeparator aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default React.memo(Breadcrumbs);
