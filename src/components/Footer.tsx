import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-[100%] bg-black px-[100px] flex py-[50px] h-[200px] justify-between text-white">
      <Image
        src={"/img/footerLogo.png"}
        width={100}
        height={40}
        alt="footerLogo"
      />
      <div className="flex flex-col items-start">
        <span className="underline font-bold">정책 • 약관</span>
        <span className="underline font-bold">개인정보 처리방침</span>
      </div>
      <div className="flex flex-col items-start">
        <span className="font-bold">취향마이</span>
        <span>
          37554 경상북도 포항시 북구 흥해읍 한동로 558 한동대학교 (주)취향마이
        </span>
        <span>
          chwihyangmai, handong-Ro 558, Buk gu, Pohang, Gyeongsangbuk-do,
        </span>
        <span>37554 Korea</span>
      </div>
      <div>
        <span>Copyright© 취향마이 All rights reserved.</span>
      </div>
    </div>
  );
}
