"use client";

import { userState } from "@/store/atom";
import { Avatar, Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { usePathname } from "next/navigation";

type Props = {
  name?: string;
};

export default function PersonInfo({ name }: Props) {
  const user = useRecoilValue(userState);

  const pathname = usePathname();

  const convertName = (name: string) => {
    if (pathname === "/profile") return user.name;
    else if (name) return name;
    return user.name;
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mx: "0px" }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Typography
        variant={"body1"}
        sx={{
          color: "secondary.darker",
          fontWeight: "bold",
          marginLeft: "10px",
          fontSize: "14px",
        }}
      >
        {convertName(name as string)}{" "}
        <span style={{ fontWeight: "400" }}>님</span>
      </Typography>
    </Box>
  );
}
