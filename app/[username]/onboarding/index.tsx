"use client";
import cn from "classnames";
import { useState } from "react";
import { SiSpotify } from "react-icons/si";
import { BsImageFill } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";

const Onboarding = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("blue");
  const [contentType, setContentType] = useState<string>();

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-xl">
          <div className="py-1.5 text-center border-b">
            <p>Add new entry</p>
          </div>

          <div className="px-4 py-4 space-y-5">
            <div>
              <label htmlFor="title" className="block font-medium text-sm mb-1">
                Title
              </label>

              <input
                id="title"
                className="border w-full py-2 px-3 rounded-md"
                type="text"
                placeholder="What do you want to share?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Date
              </label>

              <input
                id="date"
                className="border w-full py-2 px-3 rounded-md"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Color
              </label>

              <div className="flex space-x-2">
                <button
                  onClick={() => setColor("blue")}
                  className={cn(
                    "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-blue-300 hover:bg-blue-400",
                    { "border-black": color === "blue" }
                  )}
                />

                <button
                  onClick={() => setColor("green")}
                  className={cn(
                    "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-green-300 hover:bg-green-400",
                    { "border-black": color === "green" }
                  )}
                />
                <button
                  onClick={() => setColor("red")}
                  className={cn(
                    "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-red-300 hover:bg-red-400",
                    { "border-black": color === "red" }
                  )}
                />
                <button
                  onClick={() => setColor("purple")}
                  className={cn(
                    "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-purple-300 hover:bg-purple-400",
                    { "border-black": color === "purple" }
                  )}
                />
                <button
                  onClick={() => setColor("yellow")}
                  className={cn(
                    "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-yellow-300 hover:bg-yellow-400",
                    { "border-black": color === "yellow" }
                  )}
                />
                <button
                  onClick={() => setColor("orange")}
                  className={cn(
                    "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-orange-300 hover:bg-orange-400",
                    { "border-black": color === "orange" }
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Content
              </label>

              <div className="flex space-x-3">
                <button
                  onClick={() => setContentType("stories")}
                  className={cn(
                    "inline-flex items-center border px-4 py-2 rounded-md",
                    { "bg-blue-100 border-blue-700 hover:border-blue-800 active:bg-blue-200": contentType === "stories" },
                    { "border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100": contentType !== "stories" }
                  )}
                >
                  <BsImageFill className="mr-2 text-blue-600" />
                  Stories
                </button>

                <button
                  onClick={() => setContentType("gallery")}
                  className={cn(
                    "inline-flex items-center border px-4 py-2 rounded-md",
                    { "bg-blue-100 border-blue-700 hover:border-blue-800 active:bg-blue-200": contentType === "gallery" },
                    { "border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100": contentType !== "gallery" }
                  )}
                >
                  <IoIosImages className="text-lg mr-2 text-blue-600" />
                  Photo gallery
                </button>

                <button
                  onClick={() => setContentType("spotify")}
                  className={cn(
                    "inline-flex items-center border px-4 py-2 rounded-md",
                    { "bg-blue-100 border-blue-700 hover:border-blue-800 active:bg-blue-200": contentType === "spotify" },
                    { "border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100": contentType !== "spotify" }
                  )}
                >
                  <SiSpotify className="text-lg mr-2 text-blue-600" />
                  Spotify
                </button>
              </div>
            </div>

            <div className="w-full text-center pt-2">
              <button className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Onboarding;
