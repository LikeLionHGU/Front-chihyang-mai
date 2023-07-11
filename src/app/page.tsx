import Image from "next/image";
import styles from "./page.module.css";
import { RecoilRoot } from "recoil";
import Title from "@/components/Home/Title";
import PersonInfo from "@/components/PersonInfo";
import { useMatch } from "react-router-dom";
import Feed from "@/components/Feed";
import { FeedExamples, FundingExamples } from "@/components/data";
import FeedBlock from "@/components/FeedBlock";

export default function Home() {
  // const posts = [
  //   {
  //     id: "skamdak",
  //     name: "dsnakd",
  //   },
  // ]

  const feeds = FeedExamples;
  const fundings = FundingExamples;

  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <div className="w-[100%] border h-[400px] bg-gray-200" />
      <div className="px-[100px]">
        <Title
          title="실시간 인기 피드"
          subTitle="현재 인기 있는 피드를 살펴보세요."
        />
        <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
          {feeds.slice(0, 5).map((feed) => (
            <Feed
              key={feed.id}
              content={feed.content}
              likes={feed.id}
              name={feed.writer_name}
            />
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
              title={funding.title}
              request_num={funding.request_num}
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
              title={funding.title}
              request_num={funding.request_num}
              index={index + 1}
            />
          ))}
        </div>
      </div>
      실시간 펀딩랭킹 가장 핫한 펀딩을 만나보세요! 추천 펀딩 내 취미에 맞는 펀딩
      목록을 추천해줘요!
      <div className="w-[100%] bg-black px-[100px] flex py-[50px] h-[200px] justify-between text-white">
        <Image
          src={"/img/footerLogo.png"}
          width={100}
          height={40}
          alt="footerLogo"
        />
        <div className="flex flex-col">
          <span>정책 • 약관</span>
          <span>개인정보 처리방침</span>
        </div>
      </div>
    </div>
  );
}
