import { createClient } from "@/libs/supabase/server";
import AuthForm from "./components/auth-form";

const Page = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center m-0 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="w-[28rem] max-w-full px-6">
        <div className="bg-white shadow-2xl px-6 py-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-1">Hey, Welcome to Tori 👋</h2>
          <p className="text-[rgb(0_0_0/55%)]">Use your email or google account to continue</p>

          {data.session ? <p>Is logged In</p> : <AuthForm />}
        </div>
      </div>
    </div>
  );
};

export default Page;
