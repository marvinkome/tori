"use client";
import React from "react";
import { useSupabase } from "@/libs/supabase";
import { getBaseURL } from "libs/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [email, setEmail] = React.useState("");

  const [error, setError] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [isEmailLoading, setEmailLoading] = React.useState(false);
  const [isGoogleLoading, setGoogleLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget as any));

    try {
      setEmailLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email: payload.email.toString(),
        options: {
          shouldCreateUser: true,
          emailRedirectTo: getBaseURL(),
        },
      });

      if (error) {
        // TODO:: handle error case
        return console.error(error);
      }

      setEmailSent(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setEmailLoading(false);
    }
  };

  const onGoogleAuth = async () => {
    try {
      setGoogleLoading(true);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
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

  return (
    <>
      <h2 className="text-2xl font-bold mb-1">Hey, Welcome to Tori 👋</h2>
      <p className="text-[rgb(0_0_0/55%)]">Use your email or google account to continue</p>

      <div className="mt-6 space-y-4">
        {emailSent ? (
          <div>
            <p className="text-gray-700">
              We&apos;ve sent an email to <span className="font-semibold">{email}</span> containing a link to continue
            </p>
          </div>
        ) : (
          <>
            <button
              disabled={isGoogleLoading}
              onClick={() => onGoogleAuth()}
              className="w-full inline-flex items-center justify-center bg-gray-100 rounded-md px-4 py-2 font-semibold leading-7 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-gray-200"
            >
              <FcGoogle className="mr-2 text-lg" />
              Continue with Google
              {isGoogleLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
            </button>

            <div className="flex flex-row items-center">
              <div className="w-full grow h-px bg-neutral-200" />
              <span className="mx-2 text-sm">or</span>
              <div className="w-full grow h-px bg-neutral-200" />
            </div>

            <div>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-2">
                    Your email address
                  </label>
                  <input
                    className="border w-full py-2 px-3 rounded-md"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isEmailLoading}
                    className="w-full inline-flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 font-semibold leading-7 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-blue-700"
                  >
                    Continue
                    {isEmailLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
                  </button>

                  {error && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again</p>}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LoginForm;
