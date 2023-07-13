"use client";
import { patchFunding } from "@/apis/funding";
import PersonInfo from "@/components/Fund/PersonInfo";
import { FeedExamples, FundingExamples } from "@/components/data";
import { fundingState } from "@/store/atom";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
// import { useRouter } from "next/router";

interface IProp {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params }: any) {
  const funding = useRecoilValue(fundingState);
  const router = useRouter();
  // const searchParams = useSearchParams();

  // const [funding, setFunding] = useState(null);
  // let getFunding: any = {};

  // // Loop over the searchParams
  // useEffect(() => {
  //   searchParams.forEach((value, key) => {
  //     // Assign each key-value pair to the 'funding' object
  //     getFunding[key] = value;
  //   });
  //   console.log(getFunding);
  //   setFunding(getFunding);
  // }, []);

  return (
    <div className="px-[100px] py-[50px] mb-[50px]">
      <PersonInfo
        title="요청중인 펀딩"
        image_url="/static/images/avatar/1.jpg"
      />
      <div className="flex gap-[30px]">
        <img
          src={funding?.image_urls?.[0]?.image_url}
          className="w-[55%] h-[480px] bg-gray-100 flex items-center justify-center"
          alt={funding?.image_urls?.[0]?.image_url}
        />

        <div className="flex flex-col items-start w-[45%] justify-between ">
          <div className="text-[30px] font-bold">{funding?.title}</div>
          <div className="bg-sub2 px-[15px] py-[3px] rounded-md">
            {funding?.tag}
          </div>
          <div className="bg-container1 px-[15px] py-[3px] rounded-md">
            {funding?.influencer}
          </div>
          <p className="h-[200px]">{funding?.content}</p>

          <div className="flex items-center ">
            <span className="text-[20px] font-bold">
              <strong className="text-sub1 ">{funding?.requested_num}</strong>명
              지지
            </span>
            <div className="bg-sub2 px-[10px] py-[2px] rounded-md ml-[10px] text-[12px]">
              17일 남음
            </div>
          </div>

          <div className="flex items-center ">
            <span className="text-[14px] font-bold">
              <strong className="text-sub1 text-[20px]">0</strong>원 달성 (펀딩
              요청중
            </span>
            )
            <div className="bg-sub2 px-[10px] py-[2px] rounded-md ml-[10px] text-[12px]">
              0% 달성
            </div>
          </div>

          <div className="flex items-center gap-[20px]">
            <button className="text-[12px] w-[40px] h-[40px] rounded-md bg-container1">
              찜하기
            </button>
            <button
              onClick={() => {
                patchFunding(funding?.id);
                alert("해당 펀딩을 지지하셨습니다.");
                router.push("/fund");
              }}
              className="bg-sub1 px-[40px] h-[40px] text-white rounded-md"
            >
              펀딩 지지하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
