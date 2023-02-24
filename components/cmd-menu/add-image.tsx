"use client";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BsImage } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

import image1 from "public/story-1.jpg";
import image2 from "public/story-2.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ImageSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = [image1, image2];

  const paginate = (newDirection: number) => {
    setActiveIdx((idx) => idx + newDirection);
  };

  const activeImage = images[activeIdx];

  return (
    <div className="relative select-none flex items-start">
      <Image src={activeImage} alt="Gallery photo" className="aspect-square object-cover rounded-lg select-none shadow" />

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

const AddImage = ({ goBack }: any) => {
  const [images, setImages] = useState<FileList>();
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const imageRef = useRef<HTMLInputElement>(null);

  const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files.length) return;

    setImagesPreview(Array.from(files).map((file) => URL.createObjectURL(file)));
    setImages(files);
  };

  useEffect(() => {
    return () => {
      imagesPreview.map((url) => URL.revokeObjectURL(url));
    };
  }, [imagesPreview]);

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

        <p className="text-sm text-neutral-400 py-1">Add photos</p>
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

          <input ref={imageRef} type="file" className="hidden" multiple accept="image/*" onChange={onImageSelect} />
        </div>
      )}

      {!!images?.length && (
        <div className="grow flex flex-col sm:flex-row pt-2 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-2/4">
            <ImageSlider />
          </div>

          <div className="w-full sm:w-2/4 flex flex-col">
            <div className="mb-4">
              <label htmlFor="title" className="text-sm block mb-1 text-neutral-600 font-medium">
                Caption
              </label>
              <input
                required
                id="caption"
                type="text"
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
      )}
    </div>
  );
};

export default AddImage;
