import React from "react";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#222831] sm:px-24 text-white sm:h-20 flex flex-col justify-between sm:flex-row items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl h-14 mt-2">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="logo font-bold italic text-4xl h-14 cursor-pointer ">
        <Link href="/">
          <div>
            <span className="text-[#F05454]">Flix</span>on
          </div>
        </Link>
      </div>
    </header>
  );
}
