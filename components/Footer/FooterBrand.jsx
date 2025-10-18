import Link from "next/link";

export default function FooterBrand({ brandDescription }) {
 return (
  <div className="lg:col-span-1 space-y-4">
   <Link href="/" className="inline-block group">
    <span className="text-[30px] bg-clip-text font-extrabold bg-gradient-to-r text-tertiary group-hover:scale-105 transition-all duration-700 ease-in-out">
     Ömer Halis DEMİR
    </span>
   </Link>
   <div className="text-secondary text-sm leading-relaxed max-w-xs">
    {brandDescription}
   </div>
  </div>
 );
}