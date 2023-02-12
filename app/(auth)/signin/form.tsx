"use client";
import { useState } from "react";
import { useSupabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { getBaseURL } from "@/libs/utils";

const Form = () => {
  const router = useRouter();
  const { supabase } = useSupabase();

  const [error, setError] = useState(false);

  const [isEmailLoading, setEmailLoading] = useState(false);
  const [isGoogleLoading, setGoogleLoading] = useState(false);

  const onGoogleAuth = async () => {
    try {
      setGoogleLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: getBaseURL() + "signin",
          queryParams: { access_type: "offline", prompt: "consent" },
        },
      });

      if (error) {
        throw error;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const onEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget as any));

    try {
      setEmailLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: payload.email.toString(),
        password: payload.password.toString(),
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <button
        disabled={isGoogleLoading}
        onClick={() => onGoogleAuth()}
        className="w-full inline-flex items-center justify-center bg-neutral-100 text-sm rounded-lg px-3 py-1.5 hover:bg-[#f0f0f0] active:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-300"
      >
        <FcGoogle className="mr-2 text-md" />
        Continue with Google
        {isGoogleLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
      </button>

      <div className="flex flex-row items-center">
        <div className="w-full grow h-px bg-neutral-200" />
        <span className="mx-2 text-sm">or</span>
        <div className="w-full grow h-px bg-neutral-200" />
      </div>

      <form onSubmit={(e) => onEmailAuth(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="text-sm block mb-1 text-neutral-600 font-medium">
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="text-sm block mb-1 text-neutral-600 font-medium">
            Password
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
            disabled={isEmailLoading}
            className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
          >
            Sign in
            {isEmailLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
          </button>

          {error && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
