"use client";
import React from "react";
import { useSupabase } from "@/libs/supabase";
import { getBaseURL } from "libs/utils";
import { AiOutlineLoading3Quarters, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const AuthForm = () => {
  const { supabase } = useSupabase();
  const [email, setEmail] = React.useState("");

  const [authStatus, setAuthStatus] = React.useState("ready");
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

      setAuthStatus("email-success");
    } catch (error) {
      console.error(error);
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
          redirectTo: getBaseURL(),
        },
      });

      if (error) {
        // TODO:: handle error case
        return console.error(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="mt-6">
      {authStatus === "email-success" ? (
        <div className="mt-">
          <p className="text-gray-700">
            We&apos;ve sent an email to <span className="font-semibold">{email}</span> containing a link to continue
          </p>
        </div>
      ) : (
        <>
          <button
            disabled={isGoogleLoading}
            onClick={() => onGoogleAuth()}
            className="w-full inline-flex items-center justify-center bg-gray-100 rounded-md px-4 py-2 text-sm font-semibold leading-7 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-gray-200"
          >
            <FcGoogle className="mr-2 text-lg" />
            Continue with Google
            {isGoogleLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
          </button>

          <div className="mt-6">
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Your email address</label>
                <input
                  className="border w-full py-2 px-3 rounded-md"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isEmailLoading}
                className="w-full inline-flex items-center justify-center bg-blue-600 text-white text-sm rounded-md px-4 py-2 font-semibold leading-7 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-blue-700"
              >
                <AiOutlineMail className="text-base mr-2" />
                Continue with email
                {isEmailLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthForm;
