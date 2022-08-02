import Router from "next/router";
import React from "react";

export default function Categories({ data }) {
  return (
    <div className="sm:px-24 h-20 flex items-center justify-center bg-[#DDDDDD]">
      <div className=" flex gap-4 overflow-x-scroll p-3">
        {data
          .filter((element, idx) => element.category)
          .map((element, idx) => {
            return (
              <button
                className="p-3 cursor-pointer bg-[#222831] text-gray-400 rounded-md hover:bg-[#F05454]"
                key={"option-" + idx}
                onClick={() => Router.push(`/?category=${element.category}`)}
              >
                {element.category}
              </button>
            );
          })}
      </div>
    </div>
  );
}
