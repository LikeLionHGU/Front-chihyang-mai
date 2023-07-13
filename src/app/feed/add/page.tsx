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
    <div className="w-[600px] h-[720px] z-50 bg-white relative ">
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
    </div>
  );
}
