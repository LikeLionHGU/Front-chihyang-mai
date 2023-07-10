"use client";

import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import HeaderButton from "./HeaderButton";
import DarkModeToggle from "./DarkModeToggle";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/atom";
import SearchBar from "./SearchBar";
import FunctionButton from "./FunctionButton";

export default function Header() {
  const user = useRecoilValue(userState);
  return (
    <Box
      sx={{
        width: "100%",
        height: "65px",
        paddingLeft: "100px",
        paddingRight: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.dark",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "550px",
        }}
      >
        <Box
          style={{
            fontSize: "30px",
            color: "secondary.contrastText",
            fontWeight: "bold",
          }}
        >
          취향마이
        </Box>

        <HeaderButton text={"Home"} />
        <HeaderButton text={"FEED"} />
        <HeaderButton text={"FUNDING"} />
        <HeaderButton text={"MY"} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchBar />

        <Box sx={{ display: "flex", alignItems: "center", mx: "30px" }}>
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
            {user.name} <span style={{ fontWeight: "400" }}>님</span>
          </Typography>
        </Box>

        <FunctionButton text={"피드 추가하기"} />
        <FunctionButton text={"펀딩 요청하기"} />
        <DarkModeToggle />
      </Box>
    </Box>
  );
}
