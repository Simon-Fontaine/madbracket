"use client";

import { registerUser } from "./actions";
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
      Continue
    </Button>
  );
}

export function RegisterForm() {
  const [state, formAction] = useFormState(registerUser, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Sorry, we weren't able to create your account.",
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
      <div className="grid gap-1">
        <Label className="sr-only" htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="current-password"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}
