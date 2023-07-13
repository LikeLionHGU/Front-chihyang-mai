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
import FeedModal from "@/components/Feed/FeedModal";
import Banner from "@/components/Home/Banner";
import { useEffect, useState } from "react";
import { getFeed } from "@/apis/feed";
import { getFunding } from "@/apis/funding";

export default function Home() {
  // const feeds = FeedExamples;
  const [feeds, setFeeds] = useState<IFeed[] | []>([]);
  // const fundings = FundingExamples;
  const [fundings, setFundings] = useState<IFunding[] | []>([]);
  //feed가져오기
  // getFeed().then((res) => console.log(res));
  useEffect(() => {
    getFeed().then((res) => setFeeds(res));
    getFunding().then((res) => setFundings(res));
  }, []);
  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <Banner />
      <div className="px-[100px]">
        <Title
          title="실시간 인기 피드"
          subTitle="현재 인기 있는 피드를 살펴보세요."
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
            title="실시간 펀딩 랭킹"
            subTitle="가장 핫한 펀딩을 만나보세요!"
          />
          {fundings.slice(0, 5).map((funding, index) => (
            <FeedBlock
              funding={funding}
              title={funding?.title}
              request_num={funding?.requested_num}
              index={index + 1}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[20px] w-[100%]">
          <Title
            title="추천 펀딩"
            subTitle="내 취미에 맞는 펀딩 목록을 추천해줘요!"
          />
          {fundings.slice(0, 5).map((funding, index) => (
            <FeedBlock
              funding={funding}
              title={funding?.title}
              request_num={funding?.request_num}
              index={index + 1}
            />
          ))}
        </div>
      </div>
      <div></div>

      <FeedModal />
    </div>
  );
}
