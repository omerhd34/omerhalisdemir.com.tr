export default function ProjectStats({ stats, language, isVisible }) {
 return (
  <div
   className={`text-center mb-8 xs:mb-10 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   <div className="flex justify-center gap-4 xs:gap-6 sm:gap-8">
    <div className="text-center">
     <div className="text-xl xs:text-2xl font-bold text-green-400">{stats.total}</div>
     <div className="text-xs xs:text-sm">
      {language === "TR" ? "Toplam Proje" : "Total Projects"}
     </div>
    </div>
    <div className="text-center">
     <div className="text-xl xs:text-2xl font-bold text-green-500">{stats.completed}</div>
     <div className="text-xs xs:text-sm">
      {language === "TR" ? "Tamamlanan" : "Completed"}
     </div>
    </div>
    <div className="text-center">
     <div className="text-xl xs:text-2xl font-bold text-green-600">{stats.current}</div>
     <div className="text-xs xs:text-sm">
      {language === "TR" ? "Devam Eden" : "In Progress"}
     </div>
    </div>
   </div>
  </div>
 );
}
