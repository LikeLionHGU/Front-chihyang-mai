"use client";

import Title from "@/components/Home/Title";
import Feed from "@/components/Feed";
import {
  FeedExamples,
  FundingExamples,
  IFeed,
  IFunding,
} from "@/components/data";
import FeedBlock from "@/components/FeedBlock";
import Link from "next/link";
import ProfileName from "@/components/Profile/ProfileName";
import FeedModal from "@/components/Feed/FeedModal";
import { useEffect, useState } from "react";
import { getFeed } from "@/apis/feed";
import { getFunding } from "@/apis/funding";

export default function Profile() {
  // const feeds = FeedExamples;
  const raiseFundings = FundingExamples;
  const [feeds, setFeeds] = useState<IFeed[] | []>([]);
  const [fundings, setFundings] = useState<IFunding[] | []>([]);

  useEffect(() => {
    getFeed().then((res) => setFeeds(res));
    getFunding().then((res) => setFundings(res));
  }, []);

  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <img
        src={"/img/profile.png"}
        className="w-[100%] border h-[300px] bg-gray-200"
      />

      <div className="px-[100px] relative">
        <div className="flex gap-[30px] items-end absolute top-[-125px]">
          <img
            src={"/img/me.png"}
            className="w-[150px] h-[150px] rounded-full flex justify-center items-center bg-gray-300 font-bold"
          />
          <ProfileName />
        </div>
        <div className="h-[100px]"></div>
        <Title
          title="내가 작성한 피드"
          subTitle="내가 어떤 취미생활을 공유했는지 살펴보세요."
        />
        <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
          {feeds.slice(0, 5).map((feed) => (
            <Feed key={feed?.id} feed={feed} />
          ))}
        </div>
      </div>
      <div className="flex gap-[40px] px-[100px]">
        <div className="flex flex-col gap-[20px] w-[100%]">
          <Title
            title="내가 요청한 펀딩"
            subTitle="요청한 펀딩의 현황을 볼 수 있어요!"
          />
          {fundings?.slice(0, 5)?.map((funding, index) => (
            <FeedBlock funding={funding} index={index + 1} />
          ))}
        </div>
        <div className="flex flex-col gap-[20px] w-[100%]">
          <Title
            title="내가 모금한 펀딩"
            subTitle="자신이 모금한 펀딩의 현황을 살펴보세요"
          />
          {raiseFundings?.slice(0, 5)?.map((funding, index) => (
            <FeedBlock funding={funding} index={index + 1} />
          ))}
        </div>
      </div>
      <div></div>
      <FeedModal />
    </div>
  );
}
