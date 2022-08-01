import React from "react";

export default function HeaderItem({ title, Icon }) {
  return (
    <div className="group cursor-pointer flex flex-col items-center w-12 sm:w-20 text-gray-500 hover:text-white active:text-[#F05454]">
      <Icon className="h-8 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-wider group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}
