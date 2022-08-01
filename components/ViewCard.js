import React from "react";
import Image from "next/image";
import { DownloadIcon, PlayIcon } from "@heroicons/react/outline";

export default function ViewCard({ movie }) {
  return (
    <div className="rounded-3xl flex flex-col gap-y-5 overflow-hidden shadow-[#f1d9d9] shadow-lg p-5 hover:scale-110 transition duration-500 ease-in-out">
      <Image
        layout="responsive"
        src={movie.img_url}
        width={500}
        height={750}
        quality={100}
        className="rounded-xl"
      />
      <div className="flex justify-center text-[#222831] ">
        <h1 className="truncate font-bold text-2xl">{movie.title.slice(9)}</h1>
        <a href={movie.downloadLink}>
          <PlayIcon className="h-10 w-10 transition transform duration-100 hover:scale-125 hover:animate-pulse bg-[#F05454] rounded-full text-white cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
