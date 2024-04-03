"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser, BiMoney } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import GoogleLoginComp from "@/components/GoogleLogin";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuitems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Message",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Option",
    icon: <SlOptions />,
  },
];

export default function Home() {
  const [handleLogin, setHandleLogin] = useState();

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56 overflow-x-hidden">
        <div className="col-span-3 pt-1 ml-10">
          <div className="text-2xl cursor-pointer transition-all rounded-full p-4 hover:bg-gray-600 h-fit w-fit">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {SidebarMenuitems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 mt-2 cursor-pointer w-fit"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-4">
              <button className="bg-[#1d9bf0] px-4 py-2 text-lg font-semibold rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600 hideScrollBar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">
          <div className="rounded-lg">
            <h1 className="my-2 text-2xl">New to twitter</h1>
            <GoogleLoginComp />
          </div>
        </div>
      </div>
    </div>
  );
}
