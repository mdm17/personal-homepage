"use client";

import { ReactNode, FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import { contentOnRight } from "../_lib/stage";

interface ILayoutProps {
  children: ReactNode;
}

export const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const onRight = contentOnRight(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={`stage-card pointer-events-none relative z-10 min-h-screen w-full max-w-3xl px-6 pb-52 pt-28 sm:px-10 lg:max-w-none lg:pb-28 ${onRight ? "on-right" : ""}`}
    >
      <div key={pathname} className="pointer-events-auto">
        {children}
      </div>
    </div>
  );
};
