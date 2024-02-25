import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border-l-0 border-r-0 border-b-0 border border-gray-600 p-5 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/113523391?v=4"}
            alt="user-image"
            height={50}
            width={50}
            className="rounded-2xl"
          />
        </div>
        <div className="col-span-11">
          <h5>Chetan Dighole</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel
            aliquid neque, eos ipsam veniam dignissimos perspiciatis! Quidem,
            quos quibusdam?
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
