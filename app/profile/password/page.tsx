import { createClient } from "@/libs/supabase/server";
import Form from "./form";

const Page = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session) return null;

  return (
    <>
      <h3 className="text-xl font-serif font-semibold">Tori</h3>
      <div className="mt-2">
        <div className="mb-4">
          <h2 className="font-medium text-neutral-600">Update password</h2>
          <p className="text-sm text-neutral-400">Choose a new password below</p>
        </div>

        <Form />
      </div>
    </>
  );
};

export default Page;
