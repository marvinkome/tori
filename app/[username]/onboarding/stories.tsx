/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const SomeComponent = ({ files }: { files: any[] }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full h-full relative border">
      <img
        className="aspect-square object-cover"
        alt="nothing for now"
        src={files[activeImage].preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(files[activeImage].preview);
        }}
      />

      <button className="left-0 top-0 bottom-0 my-auto mx-2 absolute w-8 h-8 rounded-full bg-[rgba(0,0,0,0.2)] text-white inline-flex items-center justify-center">
        <BiChevronLeft className="text-3xl ml-[-1px]" />
      </button>

      <button className="right-0 top-0 bottom-0 my-auto mx-2 absolute w-8 h-8 rounded-full bg-[rgba(0,0,0,0.2)] text-white inline-flex items-center justify-center">
        <BiChevronRight className="text-3xl mr-[-1px]" />
      </button>
    </div>
  );
};

const StoriesEditor = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => {
          return {
            file: file,
            preview: URL.createObjectURL(file),
          };
        })
      );
    },
  });

  return (
    <div className="h-full flex items-center justify-center">
      {!files.length ? (
        <div className="text-center">
          <p className="mb-2">Drag files and videos here</p>

          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <button className="inline-flex items-center justify-center bg-blue-600 text-white text-sm rounded-md px-4 py-1 font-semibold leading-7 hover:bg-blue-700 active:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:bg-blue-700">
              Select from device
            </button>
          </div>
        </div>
      ) : (
        <SomeComponent files={files} />
      )}
    </div>
  );
};

export default StoriesEditor;
