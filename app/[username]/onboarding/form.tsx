"use client";
import clx from "classnames";
import { useState } from "react";
import { BiCarousel } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import { SiSpotify } from "react-icons/si";
import { FiSlash } from "react-icons/fi";
import cardColors from "@/libs/card-colors";
import StoriesEditor from "./stories";

type ContentType = "story" | "gallery" | "spotify" | "none";
const Form = () => {
  const [contentType, setContentType] = useState<ContentType>();

  return (
    <div>
      <h2 className="text-xl mb-6 font-medium text-center">Add new post</h2>

      <div className="flex space-x-8">
        <div className="w-3/5">
          {!contentType && (
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => setContentType("story")}
                  className={clx(
                    "w-full inline-flex flex-col items-center justify-center",
                    "text-lg font-semibold py-6 rounded-lg shadow-sm border",
                    "border-gray-200 text-gray-400 hover:border-gray-400",
                    { "border border-blue-600 hover:border-blue-700": contentType === "story" }
                  )}
                >
                  <BiCarousel className="text-4xl mb-2" />
                  <span className="text-gray-800">Stories</span>
                </button>

                <button
                  onClick={() => setContentType("gallery")}
                  className={clx(
                    "w-full inline-flex flex-col items-center justify-center",
                    "text-lg font-semibold py-6 rounded-lg shadow-sm border",
                    "border-gray-200 text-gray-400 hover:border-gray-400",
                    { "border border-blue-600 hover:border-blue-700": contentType === "gallery" }
                  )}
                >
                  <TfiGallery className="text-4xl mb-2" />
                  <span className="text-gray-800">Gallery</span>
                </button>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setContentType("spotify")}
                  className={clx(
                    "w-full inline-flex flex-col items-center justify-center",
                    "text-lg font-semibold py-6 rounded-lg shadow-sm border",
                    "border-gray-200 text-gray-400 hover:border-gray-400",
                    { "bord border-blue-600 hover:border-blue-700": contentType === "spotify" }
                  )}
                >
                  <SiSpotify className="text-4xl mb-2" />
                  <span className="text-gray-800">Spotify</span>
                </button>

                <button
                  onClick={() => setContentType("none")}
                  className={clx(
                    "w-full inline-flex flex-col items-center justify-center",
                    "text-lg font-semibold py-6 rounded-lg shadow-sm border",
                    "border-gray-200 text-gray-400 hover:border-gray-400",
                    { "bord border-blue-600 hover:border-blue-700": contentType === "none" }
                  )}
                >
                  <FiSlash className="text-4xl mb-2" />
                  <span className="text-gray-800">None</span>
                </button>
              </div>
            </div>
          )}

          {contentType === "story" && <StoriesEditor />}
        </div>

        <div className="w-2/5 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Write a caption
            </label>
            <textarea
              id="title"
              rows={4}
              placeholder="Make it brief and catchy..."
              className="border w-full py-2 px-3 rounded-md [resize:none] placeholder:text-black/50 focus:placeholder:text-black/70"
            />
          </div>

          <div>
            <label htmlFor="custom_date" className="block text-sm mb-1">
              Choose event date
            </label>
            <input className="border w-full py-2 px-3 rounded-md" id="custom_date" type="date" placeholder="johndoe@gmail.com" />
          </div>

          <div>
            <label htmlFor="custom_date" className="block text-sm mb-1">
              Card theme
            </label>

            <div className="flex space-x-2">
              {cardColors.map((color) => (
                <button
                  key={color.name}
                  className={clx("w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90", color.classNames)}
                />
              ))}
            </div>
          </div>

          <div className="pt-2 text-right">
            <button
              disabled
              className="inline-flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 font-semibold leading-7 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-blue-700"
            >
              Create post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
