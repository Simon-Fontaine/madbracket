"use client";

import { resetUserPassword } from "./actions";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  error: "",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Reset Link
    </Button>
  );
}

export function ResetPasswordForm() {
  const [state, formAction] = useFormState(resetUserPassword, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Sorry, we weren't able to reset your password.",
        description: state.error,
        variant: "destructive",
      });
    } else if (state.message) {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="grid gap-2">
      <div className="grid gap-1">
        <Label className="sr-only" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="email"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}
