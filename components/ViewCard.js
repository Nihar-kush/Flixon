import React from "react";
import Image from "next/image";
import { DownloadIcon, PlayIcon } from "@heroicons/react/outline";

export default function ViewCard({ movie }) {
  return (
    <div className="rounded-3xl flex flex-col gap-y-5 overflow-hidden shadow-[#f1d9d9] shadow-lg p-5 hover:scale-110 transition duration-500 ease-in-out">
      <Image
        layout="responsive"
        src={
          movie.img_url
            ? movie.img_url
            : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        width={500}
        height={750}
        quality={100}
        className="rounded-xl"
      />
      <div className="flex justify-center text-[#222831] ">
        <h1 className="truncate font-bold text-2xl">
          {movie.title ? movie.title.slice(9) : "Title loading..."}
        </h1>
        <a href={movie.downloadLink}>
          <PlayIcon className="h-10 w-10 transition transform duration-100 hover:scale-125 hover:animate-pulse bg-[#F05454] rounded-full text-white cursor-pointer" />
          {/* <iframe src={movie.downloadLink} /> */}
        </a>
      </div>
    </div>
  );
}
