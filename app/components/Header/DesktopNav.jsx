import Link from "next/link";

export function DesktopNav({ navigationItems, activeSection }) {
 return (
  <div className="hidden lg:flex items-center space-x-2">
   {navigationItems.map((item) => {
    const IconComponent = item.icon;
    const isActive = activeSection === item.key;

    return (
     <Link
      key={item.key}
      href={item.href}
      className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${isActive
       ? "text-[#c4c8bd] bg-muted"
       : "text-[#c4c8bd] hover:bg-[#01438882]/50"
       }`}
     >
      <IconComponent className="w-4 h-4" />
      <span>{item.name}</span>
      {isActive && (
       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#01438882] rounded-full"></div>
      )}
     </Link>
    );
   })}
  </div>
 );
}