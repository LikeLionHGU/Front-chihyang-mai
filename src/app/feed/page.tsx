"use client";

import Feed from "@/components/Feed";
import CommentBlock from "@/components/Feed/CommentBlock";
import Title from "@/components/Home/Title";
import PersonInfo from "@/components/PersonInfo";
import {
  FeedExamples,
  messagesAboutFundingExamples,
  messagesExamples,
} from "@/components/data";
import Link from "next/link";
import FundingCommentBlock from "../../components/Feed/FundingCommentBlock";
import FeedModal from "@/components/Feed/FeedModal";
import { getFeed } from "@/apis/feed";
import { useEffect, useState } from "react";

export default function FeedPage() {
  //   const messagesAboutFunding = messagesAboutFundingExamples;

  //   console.log("11");
  //   const messages = messagesExamples;
  // const feeds = FeedExamples;
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeed().then((res) => {
      setFeeds(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <img src={"./img/feedBanner.png"} />
      <div className="px-[100px] flex flex-col gap-[50px]">
        <div>
          <div className="flex justify-between items-end">
            <Title
              title="최근 피드"
              subTitle="최근 멤버들이 올린 피드를 보며 공감해요"
            />
            <button className="bg-sub1 px-[15px] py-[8px] rounded-md text-white">
              피드 추가하기
            </button>
          </div>
          <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
            {feeds?.slice(0, 15).map((feed: any) => (
              <Feed key={feed?.id} feed={feed} />
            ))}
          </div>
          <div className="h-[100px]"> </div>
        </div>
      </div>
      <FeedModal />
    </div>
  );
}
