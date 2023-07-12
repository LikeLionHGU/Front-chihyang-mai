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

import TextareaDecorators from "@/components/FundAdd/TextareaDecorator";

export default function FundAddPage() {
  const [script, setScript] = useState("");

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="px-[100px] py-[50px]">
      <PersonInfo image_url="/static/images/avatar/1.jpg" />
      <div className="flex gap-[30px]">
        <div className="w-[55%] h-[480px] bg-gray-100"></div>
        <div className="flex flex-col items-start w-[45%] justify-between gap-[20px]">
          <input
            type="text"
            className={`${styles.input} w-[100%] border border-red-700 py-[10px] rounded-md px-[10px] text-[20px]`}
            placeholder="요청할 펀딩 제목을 입력하세요."
          />
          <Asynchronous />
          <TextField
            // className={`bg-container1`}
            color="error"
            placeholder="펀딩 요청 대상"
          />
          <TextField
            color="error"
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="펀딩 내용"
            multiline
            rows={7}
            defaultValue="요청할 펀딩에 대한 내용을 여기에 입력하세요."
          />
          {/* <TextareaDecorators /> */}
          <Button color="error" className="bg-sub1" variant="contained">
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
