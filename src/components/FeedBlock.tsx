"use client";
import { fundingState } from "@/store/atom";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { motion } from "framer-motion";

export default function FeedBlock({ index, funding }: any) {
  const setFunding = useSetRecoilState(fundingState);
  return (
    <Link
      href={{
        pathname: `/fund/${funding?.id}`,
      }}
      onClick={() => setFunding(funding)}
    >
      <motion.div
        whileHover={{ x: -5 }}
        className="flex border rounded-md border-container1 text-black"
      >
        <img
          src={funding?.image_urls[0].image_url}
          className="bg-gray-200 w-[100px] h-[70px]"
        />
        <div className="flex justify-between pl-[10px] pr-[50px] items-center w-[100%]">
          <div className="flex flex-col items-start justify-center">
            <span className="font-bold">{funding?.title}</span>
            <div className="flex gap-[10px]">
              <span>{funding?.request_num}명 참여</span>
              <span>000% 달성</span>
              <span>000000원 달성</span>
            </div>
          </div>
          <div className="text-main text-[40px] font-bold">{index}</div>
        </div>
      </motion.div>
    </Link>
  );
}
