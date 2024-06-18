import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function handleLogout() {
    "use server";

    const supabase = createClient();

    await supabase.auth.signOut();
    revalidatePath("/", "layout");
    redirect("/");
  }

  return user ? (
    <div className="mr-2 flex items-center gap-4">
      <form action={handleLogout}>
        <Button variant="secondary" size="sm" className="px-4">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className={cn(
        buttonVariants({ variant: "secondary", size: "sm" }),
        "mr-2 px-4",
      )}
    >
      Login
    </Link>
  );
}
