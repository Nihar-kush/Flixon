import Router from "next/router";
import React from "react";

export default function Categories({ data }) {
  return (
    <div className="sm:px-24 sm:h-20 flex flex-col justify-between sm:flex-row items-center bg-[#DDDDDD]">
      <select
        name="category"
        id="category"
        className="cursor-pointer rounded shadow"
      >
        <option selected disabled>
          Category
        </option>
        {data
          .filter((element, idx) => element.category)
          .map((element, idx) => {
            return (
              <option
                key={"option-" + idx}
                onClick={() => Router.push(`/?category=${element.category}`)}
              >
                {element.category}
              </option>
            );
          })}
      </select>
    </div>
  );
}
