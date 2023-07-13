"use client";

import { useRef } from "react";

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

      <button
        className="bg-sub2 rounded-md px-[20px] py-[5px]"
        onClick={handleClick}
      >
        이미지 업로드
      </button>
    </>
  );
}
