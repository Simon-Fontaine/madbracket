"use client";

import { deleteUserAccount } from "./actions";
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
    <Button type="submit" variant="destructive" disabled={pending}>
      {pending ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : null}
      Delet{pending ? "ing" : "e"} Account
    </Button>
  );
}

export function DeleteAccountForm() {
  const [state, formAction] = useFormState(deleteUserAccount, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Sorry, we weren't able to delete your account.",
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
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>
          Type <span className="font-semibold text-destructive">DELETE</span> in
          the field below to confirm that you want to delete your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid gap-2">
          <Label className="sr-only" htmlFor="confirm">
            Confirm
          </Label>
          <Input
            id="confirm"
            name="confirm"
            type="text"
            placeholder="DELETE"
            required
          />
          <SubmitButton />
        </form>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <p className="text-sm text-muted-foreground">
          Deleting your account is permanent and cannot be undone. All of your
          data will be deleted.
        </p>
      </CardFooter>
    </Card>
  );
}
