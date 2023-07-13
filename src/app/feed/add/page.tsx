"use client";

import { postFeed } from "@/apis/feed";
import CancelButton from "@/components/Feed/add/CancelButton";
import Content from "@/components/FundAdd/Content";
import Asynchronous from "@/components/FundAdd/Select";
import Title from "@/components/Home/Title";
import ImageUpload from "@/components/ImageUpload";
// import ImageUpload from "@/components/ImageUpload";
import PersonInfo from "@/components/PersonInfo";

import { userState } from "@/store/atom";
import { Button } from "@mui/material";
import axios from "axios";
import { watch } from "fs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
// import UploadImage from '@/components/UploadImage';

interface IFormData {
  content: string;
  tag: any;
  image_urls?: string;
}

interface IPostFeedRequest {
  content: string;
  tag: string;
  writer_id: number;
  image_urls: string;
}

export default function FeedAddPage() {
  const router = useRouter();

  const { handleSubmit, control, setValue, getValues, watch } =
    useForm<IPostFeedRequest>({
      defaultValues: {
        content: "",
        tag: undefined,
        image_urls: "",
      },
    });

  watch("image_urls");
  const onValid = async (formData: IFormData) => {
    const newFeed = {
      content: formData.content,
      tag: formData.tag?.title,
      writer_id: user_id,
      image_urls: [formData.image_urls],
    };

    console.log(
      postFeed(newFeed).then((res) => {
        if (res) {
          alert("피드가 생성되었습니다.");
          router.push("/feed");
        }
      })
    );
  };

  const user_id = useRecoilValue(userState).id;

  return (
    <div className="flex flex-col items-center gap-[50px]">
      <Title title="피드 작성하기" subTitle="나의 일상을 공유해주세요" />
      <div className="w-[600px] h-[720px] z-50 bg-white relative shadow-xl border border-gray-200 rounded-md">
        <div className="bg-gray-100 w-[100%] h-[300px] flex items-center justify-center">
          {getValues("image_urls") === "" ? (
            <ImageUpload setValue={setValue} />
          ) : (
            <img src={getValues("image_urls")} className="w-[400px]" />
          )}
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
                onClick={handleSubmit(onValid as any)}
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
    </div>
  );
}
