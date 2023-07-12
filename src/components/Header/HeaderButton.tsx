"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  text: string;
};

export default function HeaderButton({ text }: Props) {
  const pathname = usePathname();

  const textConverter = (text: string) => {
    if (text === "HOME") return "/";
    if (text === "FEED") return "/feed";
    if (text === "FUNDING") return "/fund";
    if (text === "MY") return "/profile";
    return text;
  };
  return (
    <Link href={textConverter(text)}>
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
    </Link>
  );
}
