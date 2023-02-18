import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

const checkForProfile = async () => {
  const supabase = createClient();
  const sessionResponse = await supabase.auth.getSession();
  if (!sessionResponse.data.session) {
    return null;
  }

  const currentUser = sessionResponse.data.session.user;
  const profileResponse = await supabase.from("profiles").select("username, fullname").eq("id", currentUser.id).single();
  return profileResponse.data;
};

const Page = async () => {
  const profile = await checkForProfile();
  const hasCompleteProfile = profile?.fullname && profile?.username;

  if (!profile) {
    redirect("/signin");
  }

  if (!hasCompleteProfile) {
    redirect("/profile");
  }

  redirect(`/${profile?.username}`);
};

export const revalidate = 0;
export const dynamic = "force-dynamic";
export default Page;
