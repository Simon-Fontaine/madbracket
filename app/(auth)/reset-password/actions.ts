"use server";

import { userResetPasswordSchema } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";

export async function resetUserPassword(
  prevState: {
    error: string;
    message: string;
  },
  formData: FormData,
) {
  const parse = userResetPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parse.success) {
    return { error: parse.error.errors[0].message, message: "" };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(parse.data.email);

  if (error) {
    return { error: error.message, message: "" };
  }

  return {
    error: "",
    message: "Password reset link sent to your email.",
  };
}
