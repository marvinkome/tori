"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { RadioGroup } from "@headlessui/react";

const CardForm = ({ formValue, setFormValue, changeStep }: any) => {
  return (
    <form id="card-form" onSubmit={(e) => e.preventDefault()}>
      <div className="mb-4">
        <label htmlFor="title" className="text-sm block mb-1 text-neutral-600 font-medium">
          Title
        </label>
        <input
          required
          id="title"
          type="text"
          value={formValue.title}
          onChange={(e) => setFormValue({ ...formValue, title: e.target.value })}
          className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
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
          value={formValue.date}
          onChange={(e) => setFormValue({ ...formValue, date: e.target.value })}
          className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tag" className="text-sm block mb-1 text-neutral-600 font-medium">
          Tag
        </label>

        <div className="flex items-center space-x-4">
          <input
            required
            id="tag"
            type="text"
            value={formValue.tag}
            onChange={(e) => setFormValue({ ...formValue, tag: e.target.value })}
            className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
          />

          <RadioGroup
            value={formValue.tagColor}
            onChange={(value: any) => setFormValue({ ...formValue, tagColor: value })}
            aria-required="true"
            className="flex space-x-2"
          >
            <RadioGroup.Option
              as="button"
              value="lime"
              className={cn("w-7 h-7 bg-lime-400/60 rounded-full hover:bg-lime-400/80")}
            />

            <RadioGroup.Option
              as="button"
              value="purple"
              className={cn("w-7 h-7 bg-purple-400/60 rounded-full hover:bg-purple-400/80")}
            />

            <RadioGroup.Option
              as="button"
              value="orange"
              className={cn("w-7 h-7 bg-orange-400/60 rounded-full hover:bg-orange-400/80")}
            />

            <RadioGroup.Option
              as="button"
              value="blue"
              className={cn("w-7 h-7 bg-blue-400/60 rounded-full hover:bg-blue-400/80")}
            />

            <RadioGroup.Option
              as="button"
              value="amber"
              className={cn("w-7 h-7 bg-amber-400/60 rounded-full hover:bg-amber-400/80")}
            />
          </RadioGroup>
        </div>
      </div>

      <RadioGroup
        value={formValue.type}
        onChange={(value: any) => setFormValue({ ...formValue, type: value })}
        className="mb-4"
      >
        <RadioGroup.Label className="text-sm block mb-1 text-neutral-600 font-medium">Type</RadioGroup.Label>

        <div className="flex space-x-2">
          <RadioGroup.Option
            value="note"
            className={cn(
              "inline-flex items-center justify-center border border-neutral-300 text-sm px-3 py-0.5 rounded-lg cursor-pointer hover:border-neutral-400"
            )}
          >
            Note
          </RadioGroup.Option>

          <RadioGroup.Option
            value="gallery"
            className={cn(
              "inline-flex items-center justify-center border border-neutral-300 text-sm px-3 py-0.5 rounded-lg cursor-pointer hover:border-neutral-400"
            )}
          >
            Gallery
          </RadioGroup.Option>

          <RadioGroup.Option
            value="story"
            className={cn(
              "inline-flex items-center justify-center border border-neutral-300 text-sm px-3 py-0.5 rounded-lg cursor-pointer hover:border-neutral-400"
            )}
          >
            Story
          </RadioGroup.Option>
        </div>
      </RadioGroup>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700"
      >
        {formValue.type === "note" ? "Save" : "Continue"}
      </button>
    </form>
  );
};
const Editor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeStep, setActiveStep] = useState<"item-details" | "gallery-details" | "story-details">("item-details");
  const [formValue, setFormValue] = useState({
    title: "",
    date: "",
    tag: "",
    tagColor: "lime",
    type: "note",
  });

  // const

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center text-xs text-neutral-600 border border-neutral-200 p-1 sm:px-3 py-1 rounded-full sm:rounded-lg hover:shadow-sm"
      >
        <IoIosAdd className="text-base" />
        <span className="hidden sm:inline ml-1">Add event</span>
      </button>

      <div className="relative z-50" aria-labelledby="add-item" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full mx-4 sm:max-w-md md:mx-auto py-3 px-4 rounded-lg shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium text-neutral-500">New event</h2>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 border rounded-full hover:shadow-sm transition-all"
              >
                <GrFormClose />
              </button>
            </div>

            <form id="card-form" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="title" className="text-sm block mb-1 text-neutral-600 font-medium">
                  Title
                </label>
                <input
                  required
                  id="title"
                  type="text"
                  value={formValue.title}
                  onChange={(e) => setFormValue({ ...formValue, title: e.target.value })}
                  className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
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
                  value={formValue.date}
                  onChange={(e) => setFormValue({ ...formValue, date: e.target.value })}
                  className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="tag" className="text-sm block mb-1 text-neutral-600 font-medium">
                  Tag
                </label>

                <div className="flex items-center space-x-4">
                  <input
                    required
                    id="tag"
                    type="text"
                    value={formValue.tag}
                    onChange={(e) => setFormValue({ ...formValue, tag: e.target.value })}
                    className="bg-neutral-100 w-full py-1.5 px-3 rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
                  />

                  <RadioGroup
                    value={formValue.tagColor}
                    onChange={(value: any) => setFormValue({ ...formValue, tagColor: value })}
                    aria-required="true"
                    className="flex space-x-2"
                  >
                    <RadioGroup.Option
                      as="button"
                      value="lime"
                      className={cn("w-7 h-7 bg-lime-400/60 rounded-full hover:bg-lime-400/80")}
                    />

                    <RadioGroup.Option
                      as="button"
                      value="purple"
                      className={cn("w-7 h-7 bg-purple-400/60 rounded-full hover:bg-purple-400/80")}
                    />

                    <RadioGroup.Option
                      as="button"
                      value="orange"
                      className={cn("w-7 h-7 bg-orange-400/60 rounded-full hover:bg-orange-400/80")}
                    />

                    <RadioGroup.Option
                      as="button"
                      value="blue"
                      className={cn("w-7 h-7 bg-blue-400/60 rounded-full hover:bg-blue-400/80")}
                    />

                    <RadioGroup.Option
                      as="button"
                      value="amber"
                      className={cn("w-7 h-7 bg-amber-400/60 rounded-full hover:bg-amber-400/80")}
                    />
                  </RadioGroup>
                </div>
              </div>

              <RadioGroup
                value={formValue.type}
                onChange={(value: any) => setFormValue({ ...formValue, type: value })}
                className="mb-4"
              >
                <RadioGroup.Label className="text-sm block mb-1 text-neutral-600 font-medium">Type</RadioGroup.Label>

                <div className="flex space-x-2">
                  <RadioGroup.Option
                    value="note"
                    className={cn(
                      "inline-flex items-center justify-center border border-neutral-300 text-sm px-3 py-0.5 rounded-lg cursor-pointer hover:border-neutral-400"
                    )}
                  >
                    Note
                  </RadioGroup.Option>

                  <RadioGroup.Option
                    value="gallery"
                    className={cn(
                      "inline-flex items-center justify-center border border-neutral-300 text-sm px-3 py-0.5 rounded-lg cursor-pointer hover:border-neutral-400"
                    )}
                  >
                    Gallery
                  </RadioGroup.Option>

                  <RadioGroup.Option
                    value="story"
                    className={cn(
                      "inline-flex items-center justify-center border border-neutral-300 text-sm px-3 py-0.5 rounded-lg cursor-pointer hover:border-neutral-400"
                    )}
                  >
                    Story
                  </RadioGroup.Option>
                </div>
              </RadioGroup>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
