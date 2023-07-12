"use client";

import { feedModalState } from "@/store/atom";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isFeedModal = useRecoilValue(feedModalState);
  return (
    <AnimatePresence>
      {isFeedModal && (
        <motion.div
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          //   exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          className="z-10 fixed left-0 top-0 w-[100%] h-[100%] bg-black flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
