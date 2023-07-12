"use client";

import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
export default function Content({ control }: any) {
  return (
    <Controller
      name={"content"}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          color="error"
          sx={{ width: "100%" }}
          id="outlined-multiline-static"
          label="펀딩 내용"
          multiline
          rows={7}
          // defaultValue="요청할 펀딩에 대한 내용을 여기에 입력하세요."
        />
      )}
    />
  );
}
