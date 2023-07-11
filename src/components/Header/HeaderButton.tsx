"use client";

import { usePathname } from "next/navigation";

type Props = {
  text: string;
};

export default function HeaderButton({ text }: Props) {
  const pathname = usePathname();

  const textConverter = (text: string) => {
    if (text === "Home") return "/";
    return text;
  };
  return (
    <button
      style={{
        color: `${pathname}` === textConverter(text) ? "white" : "black",
        fontSize: "25px",
        fontWeight: "bold",
        textDecoration:
          `${pathname}` === textConverter(text) ? "underline" : "none",
      }}
      onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.opacity = "0.5";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      {text}
    </button>
  );
}
