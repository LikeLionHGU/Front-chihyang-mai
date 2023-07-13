"use client";

import { useSearchParams } from "next/navigation";
import PersonInfo from "../PersonInfo";
import {
  FeedExamples,
  messagesAboutFundingExamples,
  messagesExamples,
} from "../data";
import CancelButton from "./CancelButton";
import CommentBlock from "./CommentBlock";
import FundingCommentBlock from "./FundingCommentBlock";
import Layout from "./Layout";
import { feedState } from "@/store/atom";
import { useRecoilValue } from "recoil";

export default function FeedModal() {
  const feed = useRecoilValue(feedState);

  return (
    <Layout>
      <div className="w-[600px] h-[700px] z-50 bg-white relative ">
        <div className="bg-gray-100 w-[100%] h-[300px] flex items-center justify-center text-[25px]">
          이미지 / 영상
        </div>
        <CancelButton />
        <div className="px-[30px] py-[20px] w-[100%] h-[100%]">
          <div className="flex justify-between">
            <PersonInfo name={`${feed?.writer_name}`} />
            <button className="bg-sub2 px-[20px] rounded-md text-black font-bold">
              펀딩 요청하기
            </button>
          </div>
          <div className="font-bold my-[10px]">{feed?.content}</div>
          <button className="bg-sub2 px-[25px] py-[5px] rounded-md">
            {feed?.tag}
          </button>
          <div className="flex items-center gap-[10px] my-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
            <div className="font-bold">324 liked</div>
          </div>
          <div className="w-[100%] h-[120px] overflow-y-scroll flex flex-col gap-1">
            {messagesAboutFundingExamples[feed?.id % 4]?.map(
              (message: any, index: number) => (
                <FundingCommentBlock
                  key={index}
                  comment={message?.message}
                  name={message?.name}
                />
              )
            )}
            {messagesExamples[feed?.id % 4]?.map((message, index) => (
              <CommentBlock
                key={index}
                comment={message?.message}
                name={message?.name}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-[100%] bg-sub1 h-[50px] flex gap-[10px] p-[10px]">
          <div className="bg-white rounded-md text-[14px] font-bold px-[20px] flex items-center ">
            펀딩관련댓글
          </div>
          <input
            className="bg-white rounded-md w-[70%] h-[100%] text-[14px] px-[10px]"
            placeholder="여기에 댓글을 입력하세요"
          ></input>
          <div className="flex items-center justify-center w-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 512 512"
            >
              <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  );
}
