"use server";

import { userLoginSchema } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";

export async function registerUser(
  prevState: {
    error: string;
    message: string;
  },
  formData: FormData,
) {
  const parse = userLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return { error: parse.error.errors[0].message, message: "" };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: parse.data.email,
    password: parse.data.password,
  });

  if (error) {
    return { error: error.message, message: "" };
  }

  return {
    error: "",
    message: "Check email to continue sign in process.",
  };
}
