"use client";
import { useState } from "react";
import { useSupabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Form = () => {
  const router = useRouter();
  const { supabase } = useSupabase();

  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget as any));

    try {
      setLoading(true);

      const getUserResponse = await supabase.auth.getUser();
      if (getUserResponse.error || !getUserResponse.data.user) {
        throw getUserResponse.error || new Error("no user available");
      }

      const currentUser = getUserResponse.data.user;

      const { error } = await supabase.auth.updateUser({
        password: payload.password.toString(),
      });

      if (error) {
        throw error;
      }

      const profileResponse = await supabase.from("profiles").select("username, fullname").eq("id", currentUser.id).single();
      const profile = profileResponse.data;

      const hasCompleteProfile = profile?.fullname && profile?.username;
      if (hasCompleteProfile) {
        return router.push(`/${profile.username}`);
      }

      router.push("/profile");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="password" className="text-sm block mb-1 text-neutral-600 font-medium">
            New Password
          </label>
          <input
            required
            id="password"
            name="password"
            type="password"
            minLength={6}
            className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
          >
            Update
            {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
          </button>

          {error && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
