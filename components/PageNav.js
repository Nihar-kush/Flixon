import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Router from "next/router";
import React from "react";
import Link from "next/link";

export default function PageNav({ page }) {
  return (
    <div className="w-[80%] h-20 my-20 ml-10 sm:ml-36 flex justify-center p-3">
      <button
        className="flex bg-[#222831] w-40 text-2xl font-bold items-center justify-center shadow-[#f1d9d9] shadow-lg gap-x-3 text-white rounded-xl hover:scale-125 cursor-pointer"
        onClick={() => Router.push(`/?page=${page - 1}`)}
        disabled={page <= 1}
      >
        <ArrowLeftIcon className="h-8 w-8" />
        Prev
      </button>
      <button
        className="flex bg-[#222831] w-40 text-2xl font-bold items-center justify-center shadow-[#f1d9d9] shadow-lg gap-x-3 text-white rounded-xl hover:scale-125 cursor-pointer"
        onClick={() => Router.push(`/?page=${page + 1}`)}
      >
        Next
        <ArrowRightIcon className="h-8 w-8" />
      </button>
      <Link href="/">
        <a>First page</a>
      </Link>
    </div>
  );
}
