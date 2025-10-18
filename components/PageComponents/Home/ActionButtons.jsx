"use client";
import Link from "next/link";
import { FaDownload, FaEye } from "react-icons/fa";

export default function ActionButtons({ cvUrl, downloadText, viewProjectsText }) {
 return (
  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center">
   <Link
    href={cvUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r bg-muted border-1 hover:border-2 border-info text-primary rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px] "
   >
    <FaDownload className="w-4 h-4 lg:w-5 lg:h-5" />
    <span>{downloadText}</span>
   </Link>

   <Link
    href="/projects"
    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r bg-muted border-1 hover:border-2 border-info text-primary rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px] "
   >
    <FaEye className="w-4 h-4 lg:w-5 lg:h-5" />
    <span>{viewProjectsText}</span>
   </Link>
  </div>
 );
}