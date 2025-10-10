"use client";
import Image from "next/image";
import ImageMe from "../../../public/images/img.jpg";

export default function ProfileImage() {
 return (
  <div className="flex-shrink-0">
   <div className="relative inline-block group">
    <div className="absolute -inset-2 rounded-full">
     <div className="w-full h-full rounded-full rotating-border relative"></div>
    </div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg animate-pulse"></div>
    <Image
     width={200}
     height={200}
     src={ImageMe}
     alt="Ömer Halis DEMİR"
     className="relative w-30 h-30 lg:w-42 lg:h-42 xl:w-60 xl:h-60 rounded-full object-cover 
                     border-4 border-white shadow-xl hover:shadow-2xl 
                     transition-all duration-300 hover:scale-105 z-10"
    />
   </div>
  </div>
 );
}