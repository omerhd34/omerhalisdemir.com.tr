"use client";
import { useState, useEffect } from "react";

export default function TypeWriter({ texts }) {
 const [displayedText, setDisplayedText] = useState("");
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
  const currentText = texts[currentIndex];
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = isDeleting ? 1000 : 2000;

  const timer = setTimeout(() => {
   if (!isDeleting) {
    if (displayedText.length < currentText.length) {
     setDisplayedText(currentText.slice(0, displayedText.length + 1));
    } else {
     setTimeout(() => setIsDeleting(true), pauseTime);
    }
   } else {
    if (displayedText.length > 0) {
     setDisplayedText(displayedText.slice(0, -1));
    } else {
     setIsDeleting(false);
     setCurrentIndex((prev) => (prev + 1) % texts.length);
    }
   }
  }, typingSpeed);

  return () => clearTimeout(timer);
 }, [displayedText, currentIndex, isDeleting, texts]);

 return (
  <div className="text-primary font-medium mb-4 text-[18px] lg:text-xl xl:text-2xl h-6 lg:h-8 flex items-center justify-center lg:justify-start">
   <span className="inline-block">
    {displayedText}
    <span className="animate-pulse ml-1 text-primary">|</span>
   </span>
  </div>
 );
}