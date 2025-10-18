import Link from "next/link";

export default function SocialMediaSection({ title, socialLinks }) {
 return (
  <div className="space-y-4">
   <h3 className="text-secondary font-semibold text-lg border-b border-[#66bb6a]/40 pb-2">
    {title}
   </h3>
   <div className="space-y-3">
    {socialLinks.map((link) => {
     const IconComponent = link.icon;
     return (
      <Link
       key={link.name}
       href={link.href}
       target="_blank"
       rel="noopener noreferrer"
       className={`flex items-center space-x-3 text-secondary ${link.color} transition-all duration-300 text-sm group cursor-pointer hover:cursor-pointer`}
      >
       <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
       <span className="group-hover:translate-x-1 transition-transform duration-300">
        {link.name}
       </span>
      </Link>
     );
    })}
   </div>
  </div>
 );
}