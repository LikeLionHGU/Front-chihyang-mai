"use client";

import { Button } from "@mui/material";

type Props = {
  text: string;
};

export default function FunctionButton({ text }: Props) {
  return (
    <Button
      sx={{
        backgroundColor: "primary.container2",
        px: "10px",
        mx: "5px",
      }}
    >
      {text}
    </Button>
  );
}
