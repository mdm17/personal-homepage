"use client";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Link from "./NoScrollLink";
import { isActiveLink } from "../_lib/utils";
import { usePathname } from "next/navigation";

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Contact",
    href: "/contact"
  },
  {
    name: "Portfolio",
    href: "/portfolio"
  }
];

const Navigation = (): JSX.Element => {
  const router = usePathname();

  return (
    <AnimatePresence>
      <nav className="flex">
        {links.map(({ name, href }) =>
          <Link key={name} href={href}>
            <div className="mr-6 sm:mr-8 flex flex-col relative">
              {name}
              {isActiveLink(href, router) &&
                <motion.div
                  layoutId="navigation-underline"
                  className="navigation-underline"
                  animate
                />}
            </div>
          </Link>
        )}
      </nav>
    </AnimatePresence>
  );
};

export default Navigation;
