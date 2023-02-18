import { createClient } from "@/libs/supabase/server";

const getProfile = async (username: string) => {
  const supabase = createClient();

  const profileResponse = await supabase.from("profiles").select(`username, fullname, bio`).eq("username", username).single();
  return profileResponse.data;
};

export default async function Head({ params }: any) {
  const profile = await getProfile(params.username);

  return (
    <>
      <title>{profile?.fullname}</title>
      <meta name="description" content={profile?.bio} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
