"use client";
import { useState } from "react";
import { useSupabase } from "@/libs/supabase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getBaseURL } from "@/libs/utils";

const Form = () => {
  const { supabase } = useSupabase();

  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget as any));

    try {
      setLoading(true);

      const { error } = await supabase.auth.resetPasswordForEmail(payload.email.toString(), {
        redirectTo: getBaseURL() + "profile/password",
      });

      if (error) {
        throw error;
      }

      setEmailSent(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {emailSent ? (
        <div>
          <p className="text-sm text-neutral-700">We&apos;ve sent you a link to reset your password. Please check your email inbox.</p>
        </div>
      ) : (
        <form onSubmit={(e) => onSubmit(e)}>
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

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
            >
              Continue
              {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
            </button>

            {error && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again</p>}
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
