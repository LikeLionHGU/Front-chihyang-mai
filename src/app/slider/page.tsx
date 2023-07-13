"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function page() {
  const [currentNum, setCurrentNum] = useState(1);

  return (
    <div className="relative">
      <div className="flex">
        <motion.img
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          src={`/img/banner${currentNum}.png`}
          key={currentNum}
          className="w-[100%]"
        ></motion.img>
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
