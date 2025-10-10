import Link from "next/link";

export default function QuickLinksSection({ title, quickLinks }) {
 return (
  <div className="space-y-4">
   <h3 className="text-primary font-semibold text-lg border-b border-[#ebf3fe]/30 pb-2">
    {title}
   </h3>
   <ul className="space-y-2">
    {quickLinks.map((link) => (
     <li key={link.name}>
      <Link
       href={link.href}
       className="text-primary transition-colors duration-300 text-sm flex items-center group cursor-pointer hover:cursor-pointer"
      >
       <span className="text-primary w-0 group-hover:w-2 h-0.5 bg-[#ebf3fe] mr-0 group-hover:mr-2 transition-all duration-300"></span>
       {link.name}
      </Link>
     </li>
    ))}
   </ul>
  </div>
 );
}
