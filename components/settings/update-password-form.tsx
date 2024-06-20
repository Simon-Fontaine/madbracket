"use client";

import { updateUserPassword } from "./actions";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      Updat{pending ? "ing" : "e"} Password
    </Button>
  );
}

export function UpdatePasswordForm() {
  const [state, formAction] = useFormState(updateUserPassword, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Sorry, we weren't able to update your password.",
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
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Update your account password. We recommend using a strong password
          that you don&apos;t use elsewhere.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid gap-2">
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
          <Label className="sr-only" htmlFor="passwordConfirmation">
            Confirm Password
          </Label>
          <Input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            placeholder="••••••••"
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="current-password"
            required
          />
          <SubmitButton />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4"></CardFooter>
    </Card>
  );
}
