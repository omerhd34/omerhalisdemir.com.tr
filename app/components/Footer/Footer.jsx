"use client";
import FooterBrand from "./FooterBrand";
import QuickLinksSection from "./QuickLinksSection";
import SocialMediaSection from "./SocialMediaSection";
import ContactInfoSection from "./ContactInfoSection";
import LanguageSelector from "./LanguageSelector";
import FooterBottom from "./FooterBottom";
import translations from "./FooterTranslations";
import {
 getQuickLinks,
 getSocialLinks,
 getCvLink,
 getBrandDescription,
 languagesConfig,
 contactConfig,
} from "./FooterData";

export default function Footer({ language = "TR", onLanguageChange }) {
 const t = translations[language];
 const quickLinks = getQuickLinks(t);
 const socialLinks = getSocialLinks(t);
 const cvLink = getCvLink(language, t);
 const brandDescription = getBrandDescription(language);

 const languageSelector = (
  <LanguageSelector
   language={language}
   onLanguageChange={onLanguageChange}
   languagesConfig={languagesConfig}
  />
 );

 return (
  <footer className="relative z-40 backdrop-blur-md mt-[171px]">
   <div className="container mx-auto px-4 pb-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <nav className="bg-[#020617] px-6 py-8 rounded-2xl shadow-2xl">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <FooterBrand brandDescription={brandDescription} />
      <QuickLinksSection title={t.quickLinks} quickLinks={quickLinks} />
      <SocialMediaSection
       title={t.socialMedia}
       socialLinks={socialLinks}
       cvLink={cvLink}
      />
      <ContactInfoSection
       title={t.contactInfo}
       location={t.location}
       tel={contactConfig.tel}
       email={contactConfig.email}
      />
     </div>

     <div className="border-t border-[#ebf3fe]/20 mt-12 pt-8">
      <FooterBottom
       languageSelector={languageSelector}
       madeWithLove={t.madeWithLove}
      />
     </div>
    </nav>
   </div>
  </footer>
 );
}
