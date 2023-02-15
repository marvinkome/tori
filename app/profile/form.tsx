"use client";

import { useSupabase } from "@/libs/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Form = ({ initialProfile }: { initialProfile: any }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { supabase, session } = useSupabase();

  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget as any));

    try {
      setError(false);
      setLoading(true);

      const currentUser = session?.user!;
      let { error } = await supabase
        .from("profiles")
        .update({
          username: payload.username.toString(),
          fullname: payload.name.toString(),
          bio: payload.bio.toString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", currentUser.id);

      if (error) throw error;

      const invitedBy = searchParams.get("invitedBy");
      router.push(`/${invitedBy || payload.username}`);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="text-sm block mb-1 text-neutral-600 font-medium">
          Slug
        </label>
        <div className="flex w-full items-center py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] bg-neutral-100">
          <span className="text-neutral-400">tori.so/</span>
          <input
            required
            id="username"
            name="username"
            type="text"
            minLength={3}
            defaultValue={initialProfile.username}
            className="bg-inherit w-full placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
        <span className="mt-1 block text-xs text-neutral-500">You can only choose a slug once. Choose carefully.</span>
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="text-sm block mb-1 text-neutral-600 font-medium">
          Full name
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
          defaultValue={initialProfile.fullname}
          className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="bio" className="text-sm block mb-1 text-neutral-600 font-medium">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={3}
          defaultValue={initialProfile.bio}
          className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500 [resize:none]"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
        >
          Finish
          {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
        </button>

        {error && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again</p>}
      </div>
    </form>
  );
};

export default Form;
