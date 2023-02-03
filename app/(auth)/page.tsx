import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import LoginForm from "./login-form";
import ProfileForm from "./profile-form";

// TODO:: incase of a landing page move this to an Auth component
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
    return <LoginForm />;
  }

  if (!hasCompleteProfile) {
    return <ProfileForm profile={profile} />;
  }

  redirect("/app");
};

export default Page;
