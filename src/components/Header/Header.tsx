import HeaderButton from "./HeaderButton";
import DarkModeToggle from "../DarkModeToggle";
import SearchBar from "./SearchBar";
import FunctionButton from "./FunctionButton";
import PersonInfo from "../PersonInfo";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-[100%] h-[65px] pl-[100px] pr-[10px] flex items-center justify-between bg-main">
      <div className="flex items-center justify-between w-[550px]">
        {/* <div className="text-[30px] text-white font-bold">취향마이</div> */}
        <Image
          src={"/img/headerLogo.png"}
          width={120}
          height={40}
          alt="headerLogo"
        />
        <HeaderButton text={"Home"} />
        <HeaderButton text={"FEED"} />
        <HeaderButton text={"FUNDING"} />
        <HeaderButton text={"MY"} />
      </div>
      <div className="flex items-center bg-inherit">
        <SearchBar />
        <div className="w-[30px]"></div>
        <PersonInfo />
        <div className="w-[30px]"></div>
        <FunctionButton text={"피드 추가하기"} link="/" />

        <FunctionButton text={"펀딩 요청하기"} link="/" />

        <DarkModeToggle />
      </div>
    </div>
  );
}
