"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { PageTransitionLayout } from "./_component/PageTransitionLayout";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

export default function Template({ children }: { children: React.ReactNode }) {
  const router = usePathname();
  return (
    <PageTransitionLayout>
      {children}
    </PageTransitionLayout>
  );
}
