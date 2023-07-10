"use client";

import ThemeProvider from "@/theme";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Recoil({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
