"use client";
import Link from "next/link";
import { SiFiverr, SiUpwork } from "react-icons/si";
import Image from 'next/image';

export default function ActionButtons() {

 return (
  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center">
   <Link
    href="https://bionluk.com/omerhd1/profesyonel-bireysel-veya-kurumsal-web-sitesi-kodlarim-821141"
    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-1 lg:py-2 bg-linear-to-r bg-muted border hover:border-2 border-info text-primary rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 lg:text-base w-full sm:w-auto min-w-[200px]"
    target="blank"
   >
    <Image
     src="../../../images/bionluk.png"
     width={120}
     height={40}
     alt="Bionluk"
     className="h-8 w-auto lg:h-10 object-contain transition-transform duration-300 group-hover:scale-125"
    />
   </Link>

   <Link
    href="https://www.fiverr.com/omerhd16/build-responsive-frontend-websites-with-html-css-js-ts-react-nextjs?ref_ctx_id=28b59d10571e49fcb3dbf403eb9dc56b&pckg_id=1&source=seller_page"
    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-1 lg:py-2 bg-linear-to-r bg-muted border hover:border-2 border-info text-primary rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 lg:text-base w-full sm:w-auto min-w-[200px]"
    target="blank"
   >
    <SiFiverr className="h-8 w-auto lg:h-10 transition-transform duration-300 group-hover:scale-125" />
   </Link>

   <Link
    href="https://www.upwork.com/freelancers/~01f41f1b6bb1a95b5a?s=1110580755107926016"
    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-1 lg:py-2 bg-linear-to-r bg-muted border hover:border-2 border-info text-primary rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 lg:text-base w-full sm:w-auto min-w-[200px]"
    target="blank"
   >
    <SiUpwork className="h-8 w-auto lg:h-10 transition-transform duration-300 group-hover:scale-125" />
   </Link>

  </div>
 );
}