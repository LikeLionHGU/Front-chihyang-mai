"use client";

import Link from "next/link";
import PersonInfo from "./PersonInfo";
import { IFunding } from "./data";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fundingState } from "@/store/atom";
import { motion } from "framer-motion";

type Props = {
  funding: any;
};

export default function Fund({ funding }: Props) {
  const setFunding = useSetRecoilState(fundingState);
  const summaryContent = (content: string) => {
    if (content.length > 25) return content.slice(0, 25) + "...";
    return content;
  };

  return (
    <Link
      href={{
        pathname: `/fund/${funding?.id}`,
        // query: [funding, funding?.image_urls?.[0]?.image_url],
      }}
      onClick={() => setFunding(funding)}
    >
      <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-[10px]">
        <img
          src={funding?.image_urls[0].image_url}
          className="h-[180px] rounded-md bg-gray-300"
          alt={funding?.image_urls[0].image_url}
        />

        <div className="flex items-center justify-between">
          <PersonInfo name={funding?.name} />

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
            <span className="text-black text-[18px] ml-[10px]">
              {funding?.requested_num}
            </span>
          </div>
        </div>
        <div className="text-black font-bold">
          {summaryContent(funding?.content)}
        </div>
      </motion.div>
    </Link>
  );
}
