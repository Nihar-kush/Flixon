import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";
import axios from "axios";

 
export default function ViewCard({ movie }) {
  const videoUrl = "http://localhost:4000/api/movies";

  const fetchVideoLink = () => {
    const url = `${videoUrl}/link?movieUrl=${movie.downloadLink}`;
    axios.get(url)
      .then((response) => {
        const fetchedVideoLink = response.data;
        window.open(fetchedVideoLink, '_blank');
      })
      .catch((error) => {
        console.error('Error fetching video link:', error);
      });
  };
  
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
          {movie.title ? movie.title : "Movie Title..."}
        </h1>
        <PlayIcon
          onClick={fetchVideoLink}
          className="h-10 w-10 transition transform duration-100 hover:scale-125 hover:animate-pulse bg-[#F05454] rounded-full text-white cursor-pointer"
        />
      </div>
      {/* {
        <iframe src={movie.downloadLink} />
      } */}
    </div>
  );
}
