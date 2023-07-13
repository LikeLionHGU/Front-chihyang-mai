import Fund from "@/components/Fund";
import Title from "@/components/Home/Title";
import { FundingExamples } from "@/components/data";
import Link from "next/link";

export default function FundPage() {
  const fundings = FundingExamples;
  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <img src={"./img/fundBanner.png"} />
      <div className="px-[100px] flex flex-col gap-[50px]">
        <div>
          <Title
            title="요청중인 펀딩"
            subTitle="다른 맴버들이 어떤 펀딩을 원하는지 살펴보고, 함께 지지해 보세요"
          />
          <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
            {fundings.slice(0, 10).map((funding) => (
              <Fund key={funding.id} funding={funding} />
            ))}
          </div>
        </div>

        <div>
          <Title
            title="모금 진행중인 펀딩"
            subTitle="요청이 수락되어 모금 중인 펀딩에 실제로 참여해보세요."
          />
          <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
            {fundings.slice(0, 10).map((funding) => (
              <Fund key={funding.id} funding={funding} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
