import Redirect from "@/components/redirect";
import { createClient } from "@/libs/supabase/server";
import { headers } from "next/headers";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Page = async ({ searchParams }: any) => {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    return <Redirect path={`/profile?invitedBy=${searchParams.invitedBy}`} />;
  }

  return (
    <div className="flex w-full items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin ml-2 text-2xl" />
    </div>
  );
};

export default Page;
