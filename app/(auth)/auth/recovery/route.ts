import { createClient } from "@/utils/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (error) {
      return NextResponse.redirect(
        `${origin}/reset-password?error=${error.message}`,
      );
    }

    return NextResponse.redirect(`${origin}/login/update-password`);
  }

  return NextResponse.redirect(
    `${origin}/login/update-password?error=Invalid token. Please try again.`,
  );
}
