"use client";

import { useEffect, useState } from "react";

export function contentOnRight(pathname: string) {
  return pathname === "/contact";
}

export function useWideScreen() {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return wide;
}
