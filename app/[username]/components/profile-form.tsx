"use client";

import cn from "classnames";
import { Fragment, useState, startTransition, useRef } from "react";
import { animate, AnimationPlaybackControls, motion, useMotionValue, useTransform } from "framer-motion";
import { FiX } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSupabase } from "@/libs/supabase";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/navigation";

const ConfirmButton = ({ children, onClick }: any) => {
  const controls = useRef<AnimationPlaybackControls>();
  const pathLength = useMotionValue(0);

  const onPointerDown = () => {
    controls.current = animate(pathLength, 1, {
      duration: 1,
      onComplete: () => {
        controls.current = undefined;
        onClick();
      },
    });
  };

  const onPointerUp = () => {
    if (controls.current) controls.current = animate(pathLength, 0);
  };

  return (
    <motion.button
      type="button"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      className="relative inline-flex items-center text-sm rounded-full border p-0.5 mt-[2px]"
    >
      {children}

      <svg viewBox="0 0 100 100" className="absolute inset-[-1.5px] -rotate-90 stroke-red-600">
        <motion.circle cx="50px" cy="50px" r="48" fill="transparent" strokeWidth={4} style={{ pathLength: pathLength }} />
      </svg>
    </motion.button>
  );
};

const ProfileForm = ({ profile, followers }: any) => {
  const router = useRouter();
  const { supabase, session } = useSupabase();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [sharing, setSharing] = useState(false);
  const [shareState, setShareState] = useState<"error" | "invited" | "email-sent">();

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
          fullname: payload.name.toString(),
          bio: payload.bio.toString(),
          is_public: payload.is_public ? true : false,
          updated_at: new Date().toISOString(),
        })
        .eq("id", currentUser.id);

      if (error) throw error;
      setIsModalOpen(false);

      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onShareProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(e.currentTarget as any));
    try {
      setShareState(undefined);
      setSharing(true);

      const response = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: payload.invite_email }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      setShareState(data.message);
      (e.target as any).reset();

      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      console.error(error);
      setShareState("error");
    } finally {
      setSharing(false);
    }
  };

  const onRemoveAccess = async (id: string) => {
    try {
      const currentUser = session?.user!;
      let { error } = await supabase.from("followers").delete().eq("following_id", currentUser.id).eq("follower_id", id);

      if (error) throw error;

      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }

      startTransition(() => {
        router.refresh();
      });
    } catch (e) {
      console.error();
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
              className="bg-white w-full mx-4 sm:max-w-sm md:mx-auto py-3 px-4 rounded-lg shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-medium text-neutral-500">Settings</h2>

                <button onClick={() => setIsModalOpen(false)} className="p-1 border rounded-full hover:shadow-sm transition-all">
                  <GrFormClose />
                </button>
              </div>

              <form id="share-form" onSubmit={onShareProfile} />
              <form id="profile-form" onSubmit={onSubmit}>
                <div className="mb-4">
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

                <div className="mb-4">
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

                <Switch.Group>
                  <div className="mb-2">
                    <Switch.Label className="text-sm block mb-1 text-neutral-600 font-medium">Make public</Switch.Label>

                    <Switch name="is_public" defaultChecked={profile.is_public} as={Fragment}>
                      {({ checked }) => (
                        <button
                          className={cn("relative inline-flex h-6 w-11 p-1 items-center rounded-full", {
                            "bg-neutral-800 justify-end": checked,
                            "bg-neutral-300 justify-start": !checked,
                          })}
                        >
                          <span className="sr-only">Toggle profile visibility</span>
                          <motion.span
                            layout
                            transition={{
                              type: "spring",
                              stiffness: 700,
                              damping: 50,
                            }}
                            className={cn(`inline-block h-4 w-4 transform rounded-full bg-white transition`)}
                          />
                        </button>
                      )}
                    </Switch>
                    <span className="mt-1 block text-xs text-neutral-500">You can make your profile only visible to people you know</span>
                  </div>
                </Switch.Group>

                <div className="mb-4">
                  <label htmlFor="followers" className="text-sm block mb-1 text-neutral-500 font-medium">
                    People with access
                  </label>

                  <div className="space-y-1 mb-2">
                    {!!followers.length && (
                      <>
                        {followers.map(({ follower }: any) => (
                          <div key={follower.id} className="flex items-center justify-between">
                            <p className="text-sm text-neutral-700">
                              • {follower.fullname ? `${follower.fullname} (${follower.email})` : follower.email}
                            </p>

                            <ConfirmButton onClick={() => onRemoveAccess(follower.id)}>
                              <FiX className="text-sm" />
                            </ConfirmButton>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="flex items-start justify-between space-x-2">
                    <div className="w-full">
                      <input
                        required
                        name="invite_email"
                        type="email"
                        placeholder="Email address"
                        form="share-form"
                        className="text-sm bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
                      />

                      {shareState === "error" && <span className="text-xs text-red-600">Something went wrong please try again</span>}
                      {shareState === "email-sent" && <span className="text-xs text-neutral-500">Invite email sent</span>}
                    </div>

                    <button
                      type="submit"
                      form="share-form"
                      disabled={sharing}
                      className="inline-flex items-center justify-center text-sm rounded-lg px-3 py-1.5 bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
                    >
                      Share
                      {sharing && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
                    >
                      Save
                      {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => signOut()}
                      className="inline-flex items-center text-sm rounded-full p-0 text-neutral-400 hover:text-neutral-500"
                    >
                      Sign out
                    </button>
                  </div>

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
