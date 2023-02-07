"use client";
import cn from "classnames";
import { useState } from "react";
import { SiSpotify } from "react-icons/si";
import { BsImageFill } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";

const CardForm = ({ values, setValue }: any) => {
  return (
    <div className="w-full">
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
            value={values.title}
            onChange={(e) => setValue({ ...values, title: e.target.value })}
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
            value={values.date}
            onChange={(e) => setValue({ ...values, date: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Color
          </label>

          <div className="flex space-x-2">
            <button
              onClick={() => setValue({ ...values, color: "blue" })}
              className={cn(
                "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-blue-300 hover:bg-blue-400",
                { "border-black": values.color === "blue" }
              )}
            />

            <button
              onClick={() => setValue({ ...values, color: "green" })}
              className={cn(
                "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-green-300 hover:bg-green-400",
                { "border-black": values.color === "green" }
              )}
            />
            <button
              onClick={() => setValue({ ...values, color: "red" })}
              className={cn(
                "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-red-300 hover:bg-red-400",
                { "border-black": values.color === "red" }
              )}
            />
            <button
              onClick={() => setValue({ ...values, color: "purple" })}
              className={cn(
                "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-purple-300 hover:bg-purple-400",
                { "border-black": values.color === "purple" }
              )}
            />
            <button
              onClick={() => setValue({ ...values, color: "yellow" })}
              className={cn(
                "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-yellow-300 hover:bg-yellow-400",
                { "border-black": values.color === "yellow" }
              )}
            />
            <button
              onClick={() => setValue({ ...values, color: "orange" })}
              className={cn(
                "w-7 h-7 rounded-full cursor-pointer border-2 border-transparent hover:opacity-90 bg-orange-300 hover:bg-orange-400",
                { "border-black": values.color === "orange" }
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
              onClick={() => setValue({ ...values, contentType: "stories" })}
              className={cn(
                "inline-flex items-center border px-4 py-2 rounded-md",
                {
                  "bg-blue-100 border-blue-700 hover:border-blue-800 active:bg-blue-200":
                    values.contentType === "stories",
                },
                {
                  "border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100":
                    values.contentType !== "stories",
                }
              )}
            >
              <BsImageFill className="mr-2 text-blue-600" />
              Stories
            </button>

            <button
              onClick={() => setValue({ ...values, contentType: "gallery" })}
              className={cn(
                "inline-flex items-center border px-4 py-2 rounded-md",
                {
                  "bg-blue-100 border-blue-700 hover:border-blue-800 active:bg-blue-200":
                    values.contentType === "gallery",
                },
                {
                  "border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100":
                    values.contentType !== "gallery",
                }
              )}
            >
              <IoIosImages className="text-lg mr-2 text-blue-600" />
              Photo gallery
            </button>

            <button
              onClick={() => setValue({ ...values, contentType: "spotify" })}
              className={cn(
                "inline-flex items-center border px-4 py-2 rounded-md",
                {
                  "bg-blue-100 border-blue-700 hover:border-blue-800 active:bg-blue-200":
                    values.contentType === "spotify",
                },
                {
                  "border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100":
                    values.contentType !== "spotify",
                }
              )}
            >
              <SiSpotify className="text-lg mr-2 text-blue-600" />
              Spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoriesEditor = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="w-full">
      <div className="py-1.5 text-center border-b">
        <p>Add story</p>
      </div>

      <div className="px-4 py-4 space-y-5">
        <div className="h-full">
          <button>Select picture from</button>
        </div>
      </div>
    </div>
  );
};

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
          {/* <CardForm values={{}} setValue={(v) => null} /> */}
          {/*  */}

          <div className="w-full text-center pt-2">
            <button className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Onboarding;
