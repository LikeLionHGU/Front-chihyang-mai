"use client";

import PersonInfo from "@/components/Fund/PersonInfo";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../../page.module.css";
import React, { useState } from "react";
import MultipleSelect from "@/components/FundAdd/Select";
import Asynchronous from "@/components/FundAdd/Select";
import { useForm, Controller } from "react-hook-form";

import TextareaDecorators from "@/components/FundAdd/TextareaDecorator";
import Influencer from "@/components/FundAdd/Influencer";
import Content from "@/components/FundAdd/Content";

// import UploadImage from "@/components/UploadImage";

interface IFormData {
  title: string;
  content: string;
  tag: string | null;
  influencer: string[];
  image_urls: string[];
}

export default function FundAddPage() {
  const onValid = (formData: IFormData) => {
    const newFunding = {
      title: formData.title,
      content: formData.content,
      tag: formData.tag,
      influencer: formData.influencer[0],
      image_urls: formData.image_urls,
    };

    console.log(newFunding);
  };
  const { handleSubmit, control, setValue, getValues } = useForm<IFormData>({
    defaultValues: {
      title: "",
      content: "",
      tag: null,
      influencer: [],
      image_urls: [],
    },
  });
  return (
    <div className="px-[100px] py-[50px]">
      <PersonInfo
        title="펀딩 요청하기 작성 페이지"
        image_url="/static/images/avatar/1.jpg"
      />
      <div className="flex gap-[30px]">
        <div className="w-[55%] h-[480px] bg-gray-100 flex items-center justify-center">
          {/* <UploadImage setValue={setValue} getValues={getValues} /> */}
        </div>
        <div className="flex flex-col items-start w-[45%] justify-between gap-[20px]">
          <Controller
            name={"title"}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: "100%", fontSize: "30px" }}
                color="error"
                placeholder="요청할 펀딩 제목을 입력하세요."
              />
            )}
          />
          <Select control={control} />
          <Influencer control={control} />
          <Content control={control} label={"펀딩 내용"} />

          <Button
            onClick={handleSubmit(onValid)}
            color="error"
            className="bg-sub1"
            variant="contained"
          >
            펀딩 요청 업로드
          </Button>
        </div>
      </div>
      <div className="bg-container1 w-[100%] h-[130px] mt-[20px] mb-[50px] py-[18px] px-[20px] flex flex-col items-start jusitfy-center">
        <p className="text-main text-[28px] font-bold">
          페이지를 작성하기 전에 꼭 알아두세요!
        </p>
        <p>
          펀딩 요청 작성일로 부터 100일 안에 지지자 100명을 달성할 경우 해당
          펀딩이 요청 대상에게 전달됩니다.
        </p>
        <p>또한 만약 대상자가 요청을 수락할 시 정식 모금이 시작됩니다.</p>
      </div>
    </div>
  );
}
