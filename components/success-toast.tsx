"use client";

import { toast } from "./ui/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function SuccessToast({ title }: { title: string }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");

    if (success) {
      toast({
        title: title,
        description: success,
        variant: "default",
      });
    }
  });

  return null;
}
