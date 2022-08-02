import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export default function PageNav({ page }) {
  const router = useRouter();
  const category = router.query.category;
  return (
    <div className="w-[80%] h-20 my-20 ml-10 sm:ml-36 flex justify-center gap-x-2 p-3">
      <button
        className="p-3 flex bg-[#222831] w-30 text-2xl font-bold items-center justify-center shadow-[#f1d9d9] shadow-lg gap-x-3 text-white rounded-xl hover:bg-[#F05454] cursor-pointer"
        onClick={() =>
          category
            ? router.push(`/?page=${page - 1}&category=${category}`)
            : router.push(`/?page=${page - 1}`)
        }
        disabled={page <= 1}
      >
        <ArrowLeftIcon className="h-6 w-6" />
        Prev
      </button>
      <button
        className="p-3 flex bg-[#222831] w-30 text-2xl font-bold items-center justify-center shadow-[#f1d9d9] shadow-lg gap-x-3 text-white rounded-xl hover:bg-[#F05454] cursor-pointer"
        onClick={() =>
          category
            ? router.push(`/?page=${page + 1}&category=${category}`)
            : router.push(`/?page=${page + 1}`)
        }
      >
        Next
        <ArrowRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
