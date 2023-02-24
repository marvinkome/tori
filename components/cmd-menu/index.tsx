"use client";
import cn from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { Command } from "cmdk";
import { Dialog } from "@headlessui/react";
import { BsImage } from "react-icons/bs";
import { CgCarousel } from "react-icons/cg";
import { CiStickyNote } from "react-icons/ci";
import { FiPower, FiUser } from "react-icons/fi";

import AddImage from "./add-image";

const CmdMenu = ({ onChangePage }: any) => {
  const [search, setSearch] = React.useState("");

  return (
    <Command loop label="App menu" className="p-2 w-full">
      <Command.Input
        autoFocus
        value={search}
        onValueChange={(value) => setSearch(value)}
        placeholder="What do you need?"
        className="w-full py-2 px-2 border-b border-neutral-100 placeholder:text-neutral-400 focus:outline-none"
      />

      <Command.List className="mt-3">
        <Command.Empty className="h-12 flex items-center justify-center text-sm text-center">No results found.</Command.Empty>

        <Command.Group className="mb-1" heading={<p className="font-medium text-xs text-neutral-400 mb-1 px-2">Add card</p>}>
          <Command.Item
            className={cn(
              "w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600",
              "transition-colors duration-100 ease-in-out aria-selected:text-neutral-700 aria-selected:bg-neutral-100"
            )}
          >
            <BsImage className="mr-2 text-base" />
            <span>Add Image</span>
          </Command.Item>

          <Command.Item
            className={cn(
              "w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600",
              "transition-colors duration-100 ease-in-out aria-selected:text-neutral-700 aria-selected:bg-neutral-100"
            )}
          >
            <CgCarousel className="mr-2 text-base" />
            <span>Add Story</span>
          </Command.Item>

          <Command.Item
            className={cn(
              "w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600",
              "transition-colors duration-100 ease-in-out aria-selected:text-neutral-700 aria-selected:bg-neutral-100"
            )}
          >
            <CiStickyNote className="mr-2 text-base" />
            <span>Add Note</span>
          </Command.Item>
        </Command.Group>

        <Command.Group heading={<p className="font-medium text-xs text-neutral-400 mb-1 px-2">Profile</p>}>
          <Command.Item
            className={cn(
              "w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600",
              "transition-colors duration-100 ease-in-out aria-selected:text-neutral-700 aria-selected:bg-neutral-100"
            )}
          >
            <FiUser className="mr-2 text-base" />
            <span>Edit Profile</span>
          </Command.Item>

          <Command.Item
            className={cn(
              "w-full flex items-center h-12 px-4 rounded-md cursor-pointer text-sm text-neutral-600",
              "transition-colors duration-100 ease-in-out aria-selected:text-neutral-700 aria-selected:bg-neutral-100"
            )}
          >
            <FiPower className="mr-2 text-base" />
            <span>Logout</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
};

const DialogContent = () => {
  const [pages, setPages] = React.useState<string[]>(["home"]);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === "home";

  const popPage = useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  return (
    <>
      {/* <CmdMenu onChangePage={(page: string) => setPages([...pages, page])} /> */}
      <AddImage goBack={() => popPage()} />
    </>
  );
};

const MainDialog = ({ children }: any) => {
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
      {React.cloneElement(children, {
        onClick: () => setOpen(true),
      })}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="fixed inset-0 bg-white/80" aria-hidden="true" />

        <div className="fixed inset-0 flex items-end sm:items-center justify-center sm:p-4">
          <Dialog.Panel className="mx-auto w-full max-w-xl rounded-lg bg-white shadow-2xl">
            <DialogContent />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MainDialog;
