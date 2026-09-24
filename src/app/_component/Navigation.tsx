"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "./NoScrollLink";
import { isActiveLink } from "../_lib/utils";
import { usePathname } from "next/navigation";

const links: { name: string; href: string }[] = [
  {
    name: "Beranda",
    href: "/"
  },
  {
    name: "Riwayat",
    href: "/riwayat"
  },
  {
    name: "Portofolio",
    href: "/portfolio"
  },
  {
    name: "Kontak",
    href: "/contact"
  }
];

const Navigation = (): JSX.Element => {
  const router = usePathname();

  return (
    <AnimatePresence>
      <nav className="flex gap-x-3 sm:gap-x-6">
        {links.map(({ name, href }) =>
          <Link key={name} href={href}>
            <div className="relative text-xs text-starlight/80 hover:text-starlight sm:text-sm">
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
