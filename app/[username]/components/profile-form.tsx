"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSupabase } from "@/libs/supabase";

const ProfileForm = ({ profile }: any) => {
  const { supabase, session } = useSupabase();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center text-sm rounded-full border md:border-0 p-1 sm:p-0 border-neutral-200 text-neutral-700 md:text-neutral-400 hover:text-neutral-500"
      >
        <HiOutlineUser className="md:hidden" />
        <span className="hidden md:inline">Edit Profile</span>
      </button>

      {isModalOpen && (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full mx-4 md:max-w-sm md:mx-auto py-3 px-4 rounded-lg shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-medium text-neutral-500">Settings</h2>

                <button onClick={() => setIsModalOpen(false)} className="p-1 border rounded-full hover:shadow-sm transition-all">
                  <GrFormClose />
                </button>
              </div>

              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="text-sm block mb-1 text-neutral-600 font-medium">
                    Full name
                  </label>
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={profile.fullname}
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
                    defaultValue={profile.bio}
                    className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500 [resize:none]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
                  >
                    Save
                    {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
                  </button>

                  {error && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again</p>}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
