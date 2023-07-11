"use client";

import { Button, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 200,
        marginLeft: "70px",
      }}
    >
      <InputBase
        sx={{ ml: 1.5, flex: 1, fontSize: "13px" }}
        placeholder="당신의 취미를 검색해보세요"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
