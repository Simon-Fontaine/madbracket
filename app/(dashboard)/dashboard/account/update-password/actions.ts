"use server";

import { userUpdatePasswordSchema } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";

export async function updateUserPassword(
  prevState: {
    error: string;
    message: string;
  },
  formData: FormData,
) {
  const parse = userUpdatePasswordSchema.safeParse({
    password: formData.get("password"),
    passwordConfirmation: formData.get("passwordConfirmation"),
  });

  if (!parse.success) {
    return { error: parse.error.errors[0].message, message: "" };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.updateUser({
    password: parse.data.password,
  });

  if (error) {
    return { error: error.message, message: "" };
  }

  return {
    error: "",
    message: "Your password has been updated.",
  };
}
