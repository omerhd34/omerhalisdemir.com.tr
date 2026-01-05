"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
 const pathname = usePathname();
 const previousPathname = useRef(pathname);

 useEffect(() => {
  if (previousPathname.current !== pathname) {
   window.scrollTo(0, 0);
   previousPathname.current = pathname;
  }
 }, [pathname]);

 return null;
}
