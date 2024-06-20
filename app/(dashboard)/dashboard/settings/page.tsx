import { DeleteAccountForm } from "@/components/settings/delete-account-form";
import { UpdatePasswordForm } from "@/components/settings/update-password-form";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
  description: "Update your account settings",
};

export default async function PrivatePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect_to=/dashboard/settings");
  }

  return (
    <div className="grid gap-6">
      <UpdatePasswordForm />
      <DeleteAccountForm />
    </div>
  );
}
