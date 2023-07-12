import Title from "@/components/Home/Title";
import Feed from "@/components/Feed";
import { FeedExamples, FundingExamples } from "@/components/data";
import FeedBlock from "@/components/FeedBlock";
import Link from "next/link";

export default function Profile() {
  const feeds = FeedExamples;
  const fundings = FundingExamples;

  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <div className="w-[100%] border h-[300px] bg-gray-200" />
      <div className="px-[100px] relative">
        <div className="flex gap-[30px] items-end absolute top-[-125px]">
          <div className="w-[150px] h-[150px] rounded-full flex justify-center items-center bg-gray-300 font-bold">
            프로필 사진
          </div>
          <Title
            title="사용자 이름"
            subTitle="사용자의 부가설명, URL 등을 넣는 곳"
          />
        </div>
        <div className="h-[100px]"></div>
        <Title
          title="내가 작성한 피드"
          subTitle="내가 어떤 취미생활을 공유했는지 살펴보세요."
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
            title="내가 요청한 펀딩"
            subTitle="요청한 펀딩의 현황을 볼 수 있어요!"
          />
          {fundings.slice(0, 5).map((funding, index) => (
            <Link href={`/fund/${funding.id}`}>
              <FeedBlock
                title={funding.title}
                request_num={funding.request_num}
                index={index + 1}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-[20px] w-[100%]">
          <Title
            title="내가 모금한 펀딩"
            subTitle="자신이 모금한 펀딩의 현황을 살펴보세요"
          />
          {fundings.slice(0, 5).map((funding, index) => (
            <Link href={`/fund/${funding.id}`}>
              <FeedBlock
                title={funding.title}
                request_num={funding.request_num}
                index={index + 1}
              />
            </Link>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
