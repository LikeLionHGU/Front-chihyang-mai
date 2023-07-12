"use client";

import { userState } from "@/store/atom";
import { Avatar, Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

type Props = {
  image_url?: string;
  name?: string;
};

export default function PersonInfo({ image_url, name }: Props) {
  const userName = useRecoilValue(userState);

  const nameConverter = (name: string) => {
    if (!name) return userName.name;
    return name;
  };

  return (
    <>
      <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
        요청중인 펀딩
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mx: "0px" }}>
        <Avatar alt="Remy Sharp" src={`${image_url}`} />
        <Typography
          variant={"body1"}
          sx={{
            color: "secondary.darker",
            my: "20px",
            marginLeft: "10px",
            fontSize: "16px",
          }}
        >
          {nameConverter(name as string)}{" "}
          <span style={{ fontWeight: "400" }}></span>
        </Typography>
      </Box>
    </>
  );
}
