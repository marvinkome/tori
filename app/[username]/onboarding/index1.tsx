"use client";

import Image from "next/image";
import clx from "classnames";
import { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";

const Intro = ({ changePage }: any) => {
  return (
    <>
      <h2 className="text-2xl mb-2 font-intr font-medium">
        Let&apos;s add some <span className="font-bold">Tori</span> to your feed
      </h2>

      <p className="text-black/60 mb-4">
        Add some interesting things that happened recently. Maybe the coolest article you found, pictures from hangout, or even the best
        song you&apos;ve ever heard (yet). You can add up to 5 events to get started.
      </p>

      <button
        onClick={() => changePage()}
        className={clx(
          "inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
          "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
        )}
      >
        Continue
      </button>
    </>
  );
};

const Onboarding = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { open, getInputProps } = useDropzone({
    onDrop: (files) => {
      setFiles(files);
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="py-2 text-center">
            <p>Add new story</p>
          </div>

          <div className="w-full flex h-full">
            <div className="w-96 h-[65vh] px-2 py-2">
              {/* {!files.length && (
                <div className="flex items-center justify-center h-full">
                  <button onClick={() => open()} className="inline-flex rounded-md px-3 py-1 bg-blue-600 text-white hover:bg-blue-700">
                    Select a photo or video
                  </button>

                  <input {...getInputProps()} />
                </div>
              )} */}

              <div className="h-full">
                <div className="relative h-full rounded-xl overflow-hidden">
                  <Image alt="First story item" src="/story-1.jpg" className="object-cover object-center" fill />
                </div>
              </div>
            </div>

            <div className="w-96 px-2 py-2 space-y-4">
              <div className="">
                <label htmlFor="title" className="block font-medium mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="border w-full py-2 px-3 rounded-md"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="content" className="block font-medium mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  className="border w-full py-2 px-3 rounded-md [resize:none]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="text-right">
                <button className="inline-flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-1 font-semibold leading-7 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-blue-700">
                  Save story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
