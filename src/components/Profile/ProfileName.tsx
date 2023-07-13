"use client";
import { useRecoilValue } from "recoil";
import Title from "../Home/Title";
import { userState } from "@/store/atom";

export default function ProfileName() {
  const userName = useRecoilValue(userState);
  return (
    <Title
      title={`${userName.name}`}
      subTitle="멋쟁이 사자 처럼 11기 화이팅!!"
    />
  );
}
