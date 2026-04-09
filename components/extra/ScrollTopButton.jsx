"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const SCROLL_THRESHOLD_PX = 300;

export default function ScrollToTopButton({ title = "Başa Dön" }) {
 const [visible, setVisible] = useState(false);

 useEffect(() => {
  const update = () => {
   setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  return () => window.removeEventListener("scroll", update);
 }, []);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 return (
  <button
   type="button"
   onClick={scrollToTop}
   aria-hidden={!visible}
   tabIndex={visible ? 0 : -1}
   className={`hidden lg:flex fixed bottom-5 right-5 z-50 p-3 bg-linear-to-r from-[#020617] to-[#00ffbf] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group cursor-pointer items-center justify-center ${visible
     ? "opacity-100 pointer-events-auto"
     : "opacity-0 pointer-events-none"
    }`}
   title={title}
  >
   <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
  </button>
 );
}
