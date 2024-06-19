import { UpdatePasswordForm } from "./update-password-form";
import { BackButton } from "@/components/back-button";
import { Icons } from "@/components/icons";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Update Password",
  description: "Update your account password",
};

export default async function UpdatePasswordPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect_to=/dashboard/account/update-password");
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <BackButton className="absolute left-4 top-4 md:left-8 md:top-8" />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Update Password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your new password to update your account
          </p>
        </div>
        <UpdatePasswordForm />
      </div>
    </div>
  );
}
