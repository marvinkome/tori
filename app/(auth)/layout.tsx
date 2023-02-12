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

const Layout = async ({ children }: any) => {
  const profile = await checkForProfile();
  const hasCompleteProfile = profile?.fullname && profile?.username;

  if (profile) {
    if (!hasCompleteProfile) {
      redirect("/profile");
    } else {
      redirect(`/${profile?.username}`);
    }
  }

  return (
    <div className="max-w-sm my-20 mx-auto">
      <div className="px-6 py-6 h-full">
        <h3 className="text-xl font-serif font-semibold">Tori</h3>
        {children}
      </div>
    </div>
  );
};

export default Layout;
