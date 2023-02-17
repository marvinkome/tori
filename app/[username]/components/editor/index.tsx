"use client";

import cn from "classnames";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { RadioGroup } from "@headlessui/react";
import { FiX } from "react-icons/fi";

const StoryForm = ({ formValue, setFormValue }: any) => {
  const [editingIdx, setEditingIdx] = useState<number>();

  const storyImagePickerRef = useRef<HTMLInputElement>(null);
  const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const stories = [
      ...formValue.stories,
      {
        image: Object.assign(file, { preview: URL.createObjectURL(file) }),
        title: "",
        content: "",
      },
    ];

    setFormValue({ ...formValue, stories });
    setEditingIdx(stories.length - 1);
  };

  const onChange = (key: any, value: any, idx: number) => {
    const stories = formValue.stories.slice();
    stories[idx][key] = value;

    setFormValue({ ...formValue, stories });
  };

  const onRemoveStory = (idx: number) => {
    const stories = formValue.stories.slice();
    stories.splice(idx, 1);

    setFormValue({ ...formValue, stories });
    setEditingIdx(stories.length - 1);
  };

  return (
    <div className="mb-4">
      <label className="text-sm block mb-1 text-neutral-600 font-medium">Stories</label>

      <div className="space-y-2 mb-2">
        {formValue.stories.map((story: any, idx: any) => {
          return (
            <div key={story.image.name} className="flex space-x-3 border border-neutral-200 p-2 rounded-xl">
              <div className="relative w-[69px] h-[69px] shrink-0">
                <NextImage
                  alt={story.image.name}
                  src={story.image.preview}
                  onLoad={() => URL.revokeObjectURL(story.image.preview)}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col grow">
                {idx === editingIdx ? (
                  <div className="space-y-2">
                    <input
                      required
                      id="tag"
                      type="text"
                      placeholder="Title (optional)"
                      value={story.title}
                      onChange={(e) => onChange("title", e.target.value, idx)}
                      className="bg-neutral-100 w-full py-1.5 px-3 text-sm rounded-md hover:bg-[#f0f0f0] placeholder:text-neutral-500"
                    />

                    <textarea
                      id="tag"
                      rows={4}
                      placeholder="Caption (optional)"
                      value={story.content}
                      onChange={(e) => onChange("content", e.target.value, idx)}
                      className="bg-neutral-100 w-full py-1.5 px-3 text-sm rounded-md resize-none hover:bg-[#f0f0f0] placeholder:text-neutral-500"
                    />
                  </div>
                ) : (
                  <div className="grow">
                    <p className="text-sm font-medium line-clamp-1">{story.title}</p>
                    <p className="text-sm text-neutral-500 line-clamp-1">{story.content}</p>
                  </div>
                )}

                <div className="mt-auto space-x-2">
                  {idx !== editingIdx && (
                    <button type="button" onClick={() => setEditingIdx(idx)} className="text-xs underline">
                      Edit
                    </button>
                  )}

                  {idx === editingIdx && (
                    <button type="button" onClick={() => setEditingIdx(undefined)} className="text-xs underline">
                      Collapse
                    </button>
                  )}

                  <button type="button" onClick={() => onRemoveStory(idx)} className="text-xs underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => storyImagePickerRef.current?.click()}
        className="inline-flex text-sm items-center justify-center rounded-lg px-3 py-1 border mb-1 border-neutral-200 hover:border-neutral-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:border-neutral-200"
      >
        Select image
      </button>
      <input multiple type="file" className="hidden" accept="image/*" onChange={onSelectImage} ref={storyImagePickerRef} />
    </div>
  );
};

const GalleryForm = ({ formValue, setFormValue }: any) => {
  const galleryImagePickerRef = useRef<HTMLInputElement>(null);
  const onGalleryImageSelect = (e: any) => {
    const files = Array.prototype.slice.call(e.target.files, 0, 4 - formValue.images.length);
    console.log([...formValue.images, ...files]);
    setFormValue({
      ...formValue,
      images: [...formValue.images, ...files],
    });
  };

  return (
    <div className="mb-4">
      <label className="text-sm block mb-1 text-neutral-600 font-medium">Images</label>

      <div className="space-y-1 mb-2">
        {formValue.images.map((file: any) => (
          <div key={file.name} className="flex items-center justify-between">
            <p className="text-sm text-neutral-700">• {file.name}</p>

            <button
              type="button"
              onClick={() => setFormValue({ ...formValue, images: formValue.images.filter((f: any) => file.name !== f.name) })}
              className="relative inline-flex items-center text-sm rounded-full border p-0.5 mt-[2px]"
            >
              <FiX className="text-sm" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => galleryImagePickerRef.current?.click()}
        disabled={formValue.images.length >= 4}
        className="inline-flex text-sm items-center justify-center rounded-lg px-3 py-1 border mb-1 border-neutral-200 hover:border-neutral-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:border-neutral-200"
      >
        Select photos
      </button>
      <input multiple type="file" className="hidden" accept="image/*" onChange={onGalleryImageSelect} ref={galleryImagePickerRef} />

      <span className="block text-xs text-neutral-600">
        For now you can only upload 4 photos per post, you can create a story if you want more or less.
      </span>
    </div>
  );
};

const Editor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formValue, setFormValue] = useState({
    title: "",
    date: "",
    tag: "",
    tagColor: "lime",
    type: "note",
    images: [] as File[],
    stories: [] as { image: File; title?: string; content?: string }[],
  });

  const galleryImagePickerRef = useRef<HTMLInputElement>(null);
  const onGalleryImageSelect = (e: any) => {
    const files = Array.prototype.slice.call(e.target.files, 0, 4 - formValue.images.length);
    console.log([...formValue.images, ...files]);
    setFormValue({
      ...formValue,
      images: [...formValue.images, ...files],
    });
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center text-xs text-neutral-600 border border-neutral-200 p-1 sm:px-3 py-1 rounded-full sm:rounded-lg hover:shadow-sm"
      >
        <IoIosAdd className="text-base" />
        <span className="hidden sm:inline ml-1">Add post</span>
      </button>

      <div className="relative z-50" aria-labelledby="add-item" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white w-full mx-4 sm:max-w-md md:mx-auto  rounded-lg shadow-lg max-h-[680px] overflow-y-auto"
          >
            <div className="mb-4 flex items-center justify-between sticky top-0 bg-white pt-3 px-4">
              <h2 className="text-sm font-medium text-neutral-500">New post</h2>

              <button onClick={() => setIsModalOpen(false)} className="p-1 border rounded-full hover:shadow-sm transition-all">
                <GrFormClose />
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="px-4">
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
                        type="button"
                        value="lime"
                        className={({ checked }) =>
                          cn("w-7 h-7 rounded-full hover:bg-lime-400/80", {
                            "bg-lime-400/40": !checked,
                            "bg-lime-400/100 border border-black": checked,
                          })
                        }
                      />

                      <RadioGroup.Option
                        as="button"
                        type="button"
                        value="purple"
                        className={({ checked }) =>
                          cn("w-7 h-7 rounded-full hover:bg-purple-400/80", {
                            "bg-purple-400/40 ": !checked,
                            "bg-purple-400/100 border border-black": checked,
                          })
                        }
                      />

                      <RadioGroup.Option
                        as="button"
                        type="button"
                        value="orange"
                        className={({ checked }) =>
                          cn("w-7 h-7 rounded-full hover:bg-orange-400/80", {
                            "bg-orange-400/40 ": !checked,
                            "bg-orange-400/100 border border-black": checked,
                          })
                        }
                      />

                      <RadioGroup.Option
                        as="button"
                        type="button"
                        value="blue"
                        className={({ checked }) =>
                          cn("w-7 h-7 rounded-full hover:bg-blue-400/80", {
                            "bg-blue-400/40 ": !checked,
                            "bg-blue-400/100 border border-black": checked,
                          })
                        }
                      />

                      <RadioGroup.Option
                        as="button"
                        type="button"
                        value="amber"
                        className={({ checked }) =>
                          cn("w-7 h-7 rounded-full hover:bg-amber-400/80", {
                            "bg-amber-400/40 ": !checked,
                            "bg-amber-400/100 border border-black": checked,
                          })
                        }
                      />
                    </RadioGroup>
                  </div>
                </div>

                <RadioGroup value={formValue.type} onChange={(value: any) => setFormValue({ ...formValue, type: value })} className="mb-4">
                  <RadioGroup.Label className="text-sm block mb-1 text-neutral-600 font-medium">Type</RadioGroup.Label>

                  <div className="flex space-x-2">
                    <RadioGroup.Option
                      value="note"
                      as="button"
                      type="button"
                      className={({ checked }) =>
                        cn("inline-flex items-center justify-center text-sm px-3 py-0.5 rounded-lg border", {
                          "border-transparent bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700": checked,
                          "border-neutral-300 hover:border-neutral-400": !checked,
                        })
                      }
                    >
                      Note
                    </RadioGroup.Option>

                    <RadioGroup.Option
                      value="gallery"
                      as="button"
                      type="button"
                      className={({ checked }) =>
                        cn("inline-flex items-center justify-center text-sm px-3 py-0.5 rounded-lg border", {
                          "border-transparent bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700": checked,
                          "border-neutral-300 hover:border-neutral-400": !checked,
                        })
                      }
                    >
                      Gallery
                    </RadioGroup.Option>

                    <RadioGroup.Option
                      value="story"
                      as="button"
                      type="button"
                      className={({ checked }) =>
                        cn("inline-flex items-center justify-center text-sm px-3 py-0.5 rounded-lg border", {
                          "border-transparent bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700": checked,
                          "border-neutral-300 hover:border-neutral-400": !checked,
                        })
                      }
                    >
                      Story
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>

                {formValue.type === "gallery" && <GalleryForm formValue={formValue} setFormValue={setFormValue} />}
                {formValue.type === "story" && <StoryForm formValue={formValue} setFormValue={setFormValue} />}
              </div>

              <div className="sticky bottom-0 bg-white py-3 px-4 border-t text-right">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700"
                >
                  Save
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
