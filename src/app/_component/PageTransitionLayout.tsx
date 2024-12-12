import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC } from "react";

// ROUTER
import { usePathname } from "next/navigation";

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

export const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const router = usePathname();

  const variants = {
    hidden: {  x: -1000, y: 0 },
    enter: {  x: 0, y: 0 },
    exit: {  x: 0, y: -1000 },
}

  return (
    <AnimatePresence mode={"wait"} onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={router}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear', duration: 0.5 }}
        className="
                    w-full 
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 min-h-screen
                " // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
