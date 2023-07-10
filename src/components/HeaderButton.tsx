"use client";

import { Button } from "@mui/material";

type Props = {
  text: string;
};

export default function HeaderButton({ text }: Props) {
  return (
    <Button
      //   color="primary"
      sx={{
        color: "secondary.darker",
        fontSize: "25px",
      }}
    >
      {text}
    </Button>
  );
}
