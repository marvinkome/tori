import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

import Form from "./form";

const checkForProfile = async () => {
  const supabase = createClient();
  const sessionResponse = await supabase.auth.getSession();
  if (!sessionResponse.data.session) {
    return null;
  }

  const currentUser = sessionResponse.data.session.user;
  const profileResponse = await supabase.from("profiles").select("username, fullname, bio").eq("id", currentUser.id).single();
  return profileResponse.data;
};

const Page = async () => {
  const profile = await checkForProfile();
  const hasCompleteProfile = profile?.fullname && profile?.username;

  if (!profile) {
    redirect(`/signin`);
  }

  if (hasCompleteProfile) {
    redirect(`/${profile.username}`);
  }

  return (
    <>
      <h3 className="text-xl font-serif font-semibold">Tori</h3>
      <div className="mt-2">
        <div className="mb-4">
          <h2 className="font-medium text-neutral-600">You&apos;re in!</h2>
          <p className="text-sm text-neutral-400">Set up your profile below.</p>
        </div>

        <Form initialProfile={profile} />
      </div>
    </>
  );
};

export default Page;
