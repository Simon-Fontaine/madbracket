"use server";

import { userLoginSchema } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginUser(
  prevState: {
    error: string;
    redirectTo: string;
  },
  formData: FormData,
) {
  if (!prevState.redirectTo.startsWith("/")) {
    prevState.redirectTo = "/dashboard";
  }

  const parse = userLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
      redirectTo: prevState.redirectTo,
    };
  }

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: parse.data.email,
    password: parse.data.password,
  });

  if (error) {
    return { error: error.message, redirectTo: prevState.redirectTo };
  }

  revalidatePath(prevState.redirectTo, "layout");
  redirect(prevState.redirectTo);
}
