"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

const AddNote = ({ goBack }: any) => {
  return (
    <div className="p-2 w-full min-h-[320px] flex flex-col">
      <div className="relative flex items-center justify-center">
        <button
          onClick={() => goBack()}
          className="absolute left-0 text-sm text-neutral-500 px-3 inline-flex items-center py-1 rounded-md hover:text-neutral-600"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        <p className="text-sm text-neutral-400 py-1">Add note</p>
      </div>

      <div className="grow w-full flex flex-col mt-2">
        <div className="mb-4">
          <textarea
            required
            id="caption"
            placeholder="What do you want to share?"
            rows={5}
            className="bg-neutral-100 w-full py-1.5 px-3 rounded-md resize-none hover:bg-[#f0f0f0] placeholder:text-neutral-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="text-sm block mb-1 text-neutral-600 font-medium">
            Date
          </label>
          <input
            required
            id="date"
            type="date"
            className="bg-neutral-100 w-full py-1.5 px-3 rounded-md resize-none hover:bg-[#f0f0f0] placeholder:text-neutral-500"
          />
        </div>

        <div className="w-full mt-auto text-right mb-2 flex justify-between items-center space-x-2">
          {/* <p className="mt-1 text-sm text-red-400">Something went wrong</p> */}

          <button
            type="submit"
            className="ml-auto inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
          >
            Save
            {false && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
