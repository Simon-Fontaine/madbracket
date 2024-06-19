import { LoginForm } from "./login-form";
import { BackButton } from "@/components/back-button";
import { Icons } from "@/components/icons";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <BackButton className="absolute left-4 top-4 md:left-8 md:top-8" />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <LoginForm />
        <p className="flex flex-col gap-2 px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/reset-password"
            className="hover:text-brand underline underline-offset-4"
          >
            Lost your password? Reset it
          </Link>
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
