"use client";
import { FaArrowUp } from "react-icons/fa";

interface ScrollToTopButtonProps {
  title?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  title = "Başa Dön",
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="hidden lg:block fixed bottom-5 right-5 z-50 p-3 bg-gradient-to-r from-[#020617] to-[#d4e6f9] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      title={title}
    >
      <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
    </button>
  );
};

export default ScrollToTopButton;
