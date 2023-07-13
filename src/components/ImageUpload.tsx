"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function ImageUpload({ setValue }: any) {
  const inputRef = useRef(null);

  const handleChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    setValue("image_urls", "/img/" + e.currentTarget.files[0].name);
    console.log("/img/" + e.currentTarget.files[0]?.name);
  };

  const handleClick = () => {
    (inputRef.current as any).click();
  };

  return (
    <>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={handleChange}
      />

      <motion.button
        whileHover={{ y: [0, -10, 0, 0, -10, 0] }}
        className="bg-container1 text-main rounded-md px-[30px] py-[10px]"
        onClick={handleClick}
      >
        이미지 업로드
      </motion.button>
    </>
  );
}
