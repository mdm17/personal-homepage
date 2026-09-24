"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ReactNode, FC } from "react";
import { usePathname } from "next/navigation";
import { contentOnRight, useWideScreen } from "../_lib/stage";

interface ILayoutProps {
  children: ReactNode;
}

const slide = { type: "spring" as const, stiffness: 70, damping: 18 };

export const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const wide = useWideScreen();
  const reduceMotion = useReducedMotion();
  const onRight = wide && contentOnRight(pathname);

  return (
    <motion.div
      className="pointer-events-none relative z-10 min-h-screen w-full max-w-3xl px-6 pb-52 pt-28 sm:px-10 lg:max-w-[40rem] lg:pb-28 xl:max-w-[42rem]"
      initial={false}
      animate={{ x: onRight ? "calc(100vw - 100% - 4rem)" : wide ? "2rem" : "0rem" }}
      transition={reduceMotion ? { duration: 0 } : slide}
    >
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={pathname}
          className="pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
