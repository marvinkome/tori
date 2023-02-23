"use client";
import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Dialog } from "@headlessui/react";
import { BsCardImage } from "react-icons/bs";
import { CgCarousel } from "react-icons/cg";
import { CiStickyNote } from "react-icons/ci";
import { FiPower, FiUser } from "react-icons/fi";

const CmdMenu = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((o) => !o);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Cloning the element here to pass the onClick prop to it. Doing this so the child can be styled how it wants, without relying on extra props */}
      {React.cloneElement(children, {
        onClick: () => setOpen(true),
      })}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="fixed inset-0 bg-white/80" aria-hidden="true" />

        <div className="fixed inset-0 flex items-end md:items-center justify-center md:p-4">
          <Dialog.Panel className="mx-auto w-full max-w-lg rounded-lg bg-white shadow-2xl">
            <Command loop label="Add Card" className="p-2 w-full">
              <Command.Input
                placeholder="What do you need?"
                className="w-full py-2 px-2 border-b border-neutral-100 placeholder:text-neutral-400 focus:outline-none"
              />

              <Command.List className="mt-3">
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group
                  className="mb-1"
                  heading={<p className="font-medium text-xs text-neutral-400 mb-1 px-2">Add card</p>}
                >
                  <Command.Item
                    value="note-card"
                    className="w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600 hover:text-neutral-700 hover:bg-neutral-100 transition-colors duration-100 ease-in-out"
                  >
                    <BsCardImage className="mr-2 text-base" />
                    <span>Add Image</span>
                  </Command.Item>

                  <Command.Item
                    value="note-card"
                    className="w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600 hover:text-neutral-700 hover:bg-neutral-100 transition-colors duration-100 ease-in-out"
                  >
                    <CgCarousel className="mr-2 text-base" />
                    <span>Add Story</span>
                  </Command.Item>

                  <Command.Item
                    value="note-card"
                    className="w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600 hover:text-neutral-700 hover:bg-neutral-100 transition-colors duration-100 ease-in-out"
                  >
                    <CiStickyNote className="mr-2 text-base" />
                    <span>Add Note</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading={<p className="font-medium text-xs text-neutral-400 mb-1 px-2">Profile</p>}>
                  <Command.Item
                    value="note-card"
                    className="w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600 hover:text-neutral-700 hover:bg-neutral-100 transition-colors duration-100 ease-in-out"
                  >
                    <FiUser className="mr-2 text-base" />
                    <span>Edit Profile</span>
                  </Command.Item>

                  <Command.Item
                    value="note-card"
                    className="w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600 hover:text-neutral-700 hover:bg-neutral-100 transition-colors duration-100 ease-in-out"
                  >
                    <FiPower className="mr-2 text-base" />
                    <span>Logout</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default CmdMenu;
