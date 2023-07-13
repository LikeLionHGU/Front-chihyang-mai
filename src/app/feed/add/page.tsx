"use client";

import CancelButton from "@/components/Feed/add/CancelButton";
import Content from "@/components/FundAdd/Content";
import Asynchronous from "@/components/FundAdd/Select";
import PersonInfo from "@/components/PersonInfo";
import { userState } from "@/store/atom";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

interface IFormData {
  content: string;
  tag: string;
  image_url?: string;
}

interface IPostFeedRequest {
  content: string;
  tag: string;
  writer_id: number;
  image_urls: string[];
}

export default function FeedAddPage() {
  const { handleSubmit, control } = useForm<IPostFeedRequest>({
    defaultValues: {
      content: "",
      tag: null,
      image_urls: [],
    },
  });

  const onValid = (formData: IFormData) => {
    // console.log(formData);
  };

  return (
    <div className="w-[600px] h-[770px] z-50 bg-white relative ">
      <div className="bg-gray-100 w-[100%] h-[300px] flex items-center justify-center text-[25px]">
        이미지 / 영상
      </div>
      <CancelButton />
      <div className="px-[30px] py-[20px] w-[100%] h-[100%]">
        <div className="flex justify-between">
          <PersonInfo />
        </div>
        <div className="font-bold my-[10px] flex flex-col gap-[20px]">
          <Asynchronous control={control} />
          <Content control={control} label={"피드 내용"} />
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit(onValid)}
              color="error"
              className="bg-sub2 text-black px-[20px] "
              variant="contained"
            >
              게시하기
            </Button>
          </div>
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
  );
}
