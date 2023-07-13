"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function page() {
  const [currentNum, setCurrentNum] = useState(1);
  const [dir, setDir] = useState("left");

  const banners = [
    "/img/banner1.png",
    "/img/banner2.png",
    "/img/banner3.png",
    "/img/banner4.png",
  ];

  //   const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     if(e.currentTarget.innerText === "")
  //   }

  return (
    <div className="relative">
      <div className="flex">
        <AnimatePresence>
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            src={`/img/banner${currentNum}.png`}
            key={currentNum}
            className="w-[100%]"
          ></motion.img>
        </AnimatePresence>
      </div>
      <div className="h-[100px] flex flex-col gap-[5px] absolute top-5 right-5">
        {[1, 2, 3, 4].map((num, index) => (
          <button
            key={index}
            className={`w-[6px] h-[6px] rounded-full ${
              currentNum === num ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentNum(num)}
          >
            {" "}
          </button>
        ))}
      </div>
    </div>
  );
}
