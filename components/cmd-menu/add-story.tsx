"use client";
import dayjs from "dayjs";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { startTransition, useEffect, useRef, useState } from "react";
import { useSupabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const paginate = (newDirection: number) => {
    setActiveIdx((idx) => idx + newDirection);
  };

  const activeImage = images[activeIdx];

  return (
    <div className="relative select-none flex items-start">
      <Image
        src={activeImage}
        alt="Gallery photo"
        width={270}
        height={270}
        className="aspect-square object-cover rounded-lg select-none shadow"
      />

      <div className="absolute left-0 bottom-0 z-10 p-2 pb-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => paginate(-1)}
            disabled={activeIdx === 0}
            className="text-neutral-50/50 rounded-full bg-neutral-900/80 p-1 hover:bg-neutral-900 hover:text-neutral-50 transition:colors duration-100 ease-in disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
          >
            <HiChevronLeft className="text-lg" />
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={activeIdx === images.length - 1}
            className="text-neutral-50/50 rounded-full bg-neutral-900/80 p-1 hover:bg-neutral-900 hover:text-neutral-50 transition:colors duration-100 ease-in disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
          >
            <HiChevronRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AddStory = ({ goBack, closeModal }: any) => {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  const [formValue, setFormValue] = useState({
    title: "",
    date: "",
  });

  const [images, setImages] = useState<FileList>();
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const imageRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      imagesPreview.map((url) => URL.revokeObjectURL(url));
    };
  }, [imagesPreview]);

  const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files.length) return;

    setImagesPreview(Array.from(files).map((file) => URL.createObjectURL(file)));
    setImages(files);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);
    if (!images || !images.length) return;

    try {
      setIsLoading(true);

      const currentUser = session?.user!;
      const file = images[0];

      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", `${currentUser.id}/story/`);
      formData.append("upload_preset", "tori-preset");

      const data = await fetch("https://api.cloudinary.com/v1_1/marvinkome/image/upload", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      let { error } = await supabase.from("posts").insert({
        author: currentUser.id,
        title: formValue.title,
        type: "story",
        date: formValue.date,
        stories: [
          {
            title: formValue.title,
            image: data.public_id,
          },
        ],
      });
      if (error) {
        throw error;
      }

      startTransition(() => router.refresh());
      closeModal();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-2 w-full min-h-[320px] flex flex-col">
      <div className="relative flex items-center justify-center">
        {!images?.length && (
          <button
            onClick={() => goBack()}
            className="absolute left-0 text-sm text-neutral-500 px-3 inline-flex items-center py-1 rounded-md hover:text-neutral-600"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </button>
        )}

        <p className="text-sm text-neutral-400 py-1">Add story</p>
      </div>

      {!images?.length && (
        <div className="grow flex flex-col items-center justify-center">
          <BsImage className="text-4xl mb-1.5 -rotate-6 text-neutral-400" />
          <p className="text-sm mb-3 text-neutral-500">Select some pictures to continue</p>

          <button
            onClick={() => imageRef.current?.click()}
            className="text-sm text-white bg-black px-4 inline-flex items-center justify-between py-1.5 rounded-md hover:bg-neutral-800"
          >
            Select Photos
          </button>

          <input ref={imageRef} type="file" className="hidden" accept="image/*" onChange={onImageSelect} />
        </div>
      )}

      {!!images?.length && (
        <div className="grow flex flex-col sm:flex-row pt-2 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-2/4">
            <ImageSlider images={imagesPreview} />
          </div>

          <form onSubmit={submitForm} className="w-full sm:w-2/4 flex flex-col">
            <div className="mb-4">
              <label htmlFor="title" className="text-sm block mb-1 text-neutral-600 font-medium">
                Caption
              </label>
              <input
                id="caption"
                type="text"
                value={formValue.title}
                onChange={(e) => setFormValue({ ...formValue, title: e.target.value })}
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
                max={dayjs().format("YYYY-MM-DD")}
                value={formValue.date}
                onChange={(e) => setFormValue({ ...formValue, date: e.target.value })}
                className="bg-neutral-100 w-full py-1.5 px-3 rounded-md resize-none hover:bg-[#f0f0f0] placeholder:text-neutral-500"
              />
            </div>

            <div className="w-full mt-auto text-right mb-2 flex justify-between items-center space-x-2">
              {error && <p className="mt-1 text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="ml-auto inline-flex items-center justify-center bg-neutral-900 text-sm text-white rounded-lg px-3 py-1.5 hover:bg-neutral-800 active:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-neutral-600"
              >
                Save
                {isLoading && <AiOutlineLoading3Quarters className="animate-spin ml-2" />}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddStory;
