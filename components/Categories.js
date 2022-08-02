import Router from "next/router";
import React from "react";

export default function Categories({ data }) {
  return (
    <div className="sm:px-24 p-3 h-auto flex items-center justify-center ">
      <div className=" flex gap-4 overflow-x-scroll p-3 no-scrollbar ">
        {data
          .filter((element, idx) => element.category)
          .map((element, idx) => {
            return (
              <button
                className="p-3 cursor-pointer ring-1 ring-[#F05454] shadow-md shadow-[#f1d9d9] bg-white rounded-md hover:bg-[#F05454] font-medium"
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
