import Link from "next/link";

export default function QuickLinksSection({ title, quickLinks }) {
 return (
  <div className="space-y-4">
   <h3 className="text-accent font-semibold text-lg border-b border-[#66bb6a]/40 pb-2">
    {title}
   </h3>
   <ul className="space-y-2">
    {quickLinks.map((link) => (
     <li key={link.name}>
      <Link
       href={link.href}
       className="text-accent transition-colors duration-300 text-sm flex items-center group cursor-pointer hover:cursor-pointer"
      >
       <span className="text-accent w-0 group-hover:w-2 h-0.5 bg-[#66bb6a] mr-0 group-hover:mr-2 transition-all duration-300"></span>
       {link.name}
      </Link>
     </li>
    ))}
   </ul>
  </div>
 );
}
