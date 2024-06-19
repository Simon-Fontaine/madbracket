"use client";

import { toast } from "./ui/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ErrorToast({ title }: { title: string }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");

    if (error) {
      toast({
        title: title,
        description: error,
        variant: "destructive",
      });
    }
  });

  return null;
}
