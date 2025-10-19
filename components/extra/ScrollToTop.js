"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
