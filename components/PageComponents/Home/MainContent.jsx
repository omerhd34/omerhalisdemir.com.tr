"use client";
import TypeWriter from "./TypeWriter";
import ActionButtons from "./ActionButtons";

export default function MainContent({ description, language }) {

 const professionTitles = language === "EN"
  ? [
   "Full Stack Developer",
   "Frontend Developer",
   "Backend Developer",
   "Electrical Electronic Engineer",
  ]
  : [
   "Full Stack Geliştirici",
   "Frontend Geliştirici",
   "Backend Geliştirici",
   "Elektrik Elektronik Mühendisi",
  ];

 return (
  <div className="flex-grow text-center lg:text-left">
   <h1 className="text-[24px] lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary mb-[1px] sm:mb-3">
    Ömer Halis DEMİR
   </h1>
   <TypeWriter texts={professionTitles} />
   <p className="text-primary tracking-tight sm:tracking-normal lg:tracking-wide text-[16px] lg:text-[18px] mb-3 sm:mb-6 max-w-2xl mx-auto lg:mx-0 text-left">
    {description}
   </p>
   <ActionButtons language={language} />
  </div>
 );
}