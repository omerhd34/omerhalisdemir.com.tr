import Link from "next/link";

export function DesktopNav({ navigationItems, activeSection }) {
 return (
  <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
   {navigationItems.map((item) => {
    const IconComponent = item.icon;
    const isActive = activeSection === item.key;

    return (
     <Link
      key={item.key}
      href={item.href}
      className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-[17px] xl:text-[18px] font-medium transition-all duration-300 group ${isActive
       ? "text-[#81c784] bg-muted"
       : "text-[#a5d6a7] hover:bg-[#1a5745]/50"
       }`}

     >
      <IconComponent className="w-4 h-4" />
      <span>{item.name}</span>
      {isActive && (
       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#2e7d32] rounded-full"></div>
      )}
     </Link>
    );
   })}
  </div>
 );
}