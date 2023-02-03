"use client";
import React from "react";
import { useSupabase } from "@/libs/supabase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";

const ProfileForm = ({ profile }: { profile: any }) => {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  const [formValue, setFormValue] = React.useState({
    username: profile.username ?? "",
    fullname: profile.fullname ?? "",
  });

  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(false);
      setIsLoading(true);

      const currentUser = session?.user!;

      let { error } = await supabase
        .from("profiles")
        .update({
          username: formValue.username.trim(),
          fullname: formValue.fullname.trim(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", currentUser.id);

      if (error) throw error;
      router.push("/app");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-1">Hey, Welcome to Tori 👋</h2>
      <p className="text-[rgb(0_0_0/55%)]">Setup your profile information</p>

      <div className="mt-6">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">
              Your username
            </label>

            <input
              required
              type="text"
              minLength={3}
              id="username"
              placeholder="johndoe"
              value={formValue.username}
              onChange={(e) => setFormValue({ ...formValue, username: e.target.value })}
              className="border w-full py-2 px-3 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fullname" className="block text-sm font-semibold mb-2">
              Your fullname
            </label>

            <input
              required
              type="text"
              id="fullname"
              placeholder="John Doe"
              value={formValue.fullname}
              onChange={(e) => setFormValue({ ...formValue, fullname: e.target.value })}
              className="border w-full py-2 px-3 rounded-md"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center bg-blue-600 text-white  rounded-md px-4 py-2 font-semibold leading-7 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-blue-700"
            >
              Create my profile
              {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
            </button>

            {error && <p className="mt-2 text-sm text-red-600">Error saving profile. Please check your details and try again</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
