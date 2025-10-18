export default function LoadingScreen({ language }) {
 const loadingMessage = language === "TR" ? "Yükleniyor..." : "Loading...";

 return (
  <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-[#17233a] transition-colors duration-500">
   <div
    className="
          h-16 w-16 
          border-8 
          border-green-500 
          border-t-transparent 
          rounded-full 
          animate-spin 
          mb-6 
          dark:border-indigo-400 dark:border-t-transparent"
    aria-label={loadingMessage}
   ></div>

   <div
    className="
          text-2xl 
          font-extrabold 
          text-gray-800 dark:text-gray-200
          opacity-0 
          animate-fade-in 
        "
    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
   >
    {loadingMessage}
   </div>

   <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
    {language === "TR" ? "Lütfen bekleyin..." : "Please wait..."}
   </div>
  </section>
 );
}
