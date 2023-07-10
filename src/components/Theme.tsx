"use client";

import ThemeProvider from "@/theme";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export default function Theme({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
