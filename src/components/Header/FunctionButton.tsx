import { Button } from "@mui/material";
import Link from "next/link";

type Props = {
  text: string;
  link: string;
};

export default function FunctionButton({ text, link }: Props) {
  return (
    <Link href={link}>
      <button className="bg-container1 text-main py-[7px] px-[10px] mx-[5px] rounded-md  text-[14px]">
        {text}
      </button>
    </Link>
  );
}
