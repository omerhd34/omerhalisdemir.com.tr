import { useLanguage } from "../../app/context/LanguageContext";
import FooterBrand from "./FooterBrand";
import QuickLinksSection from "./QuickLinksSection";
import SocialMediaSection from "./SocialMediaSection";
import ContactInfoSection from "./ContactInfoSection";
import LanguageSelector from "./LanguageSelector";
import FooterBottom from "./FooterBottom";

const languagesConfig = [
 { code: "TR", name: "TR", countryCode: "TR" },
 { code: "EN", name: "EN", countryCode: "US" },
];

export default function Footer({ language = "TR", onLanguageChange }) {
 const { loading: langLoading } = useLanguage();
 if (langLoading) {
  return null;
 }

 return (
  <footer className="relative z-40 backdrop-blur-md mt-[30px] sm:mt-[171px]">
   <div className="container mx-auto px-4 pb-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <nav className="bg-[#0d2821] px-6 py-8 rounded-2xl shadow-2xl">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <FooterBrand language={language} />
      <QuickLinksSection language={language} />
      <SocialMediaSection language={language} />
      <ContactInfoSection language={language} />
     </div>
     <div className="border-t border-[#66bb6a]/30 mt-12 pt-8">
      <FooterBottom
       languageSelector={
        <LanguageSelector
         language={language}
         onLanguageChange={onLanguageChange}
         languagesConfig={languagesConfig}
        />
       }
      />
     </div>
    </nav>
   </div>
  </footer>
 );
}
