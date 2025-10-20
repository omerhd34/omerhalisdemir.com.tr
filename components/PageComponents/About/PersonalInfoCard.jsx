import { FaUser, FaGraduationCap, FaBirthdayCake, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

export default function PersonalInfoCard({ language, isVisible }) {
 const translations = {
  title: {
   'EN': "Personal Information",
   'TR': "Kişisel Bilgiler",
  },
  birthDate: {
   'EN': "Birth Date",
   'TR': "Doğum Tarihi",
  },
  location: {
   'EN': "Location",
   'TR': "Konum",
  },
  education: {
   'EN': "Education",
   'TR': "Eğitim",
  },
  passion: {
   'EN': "Passion",
   'TR': "Tutku",
  },
  istanbulCommerce: {
   'EN': "Istanbul Commerce University",
   'TR': "İstanbul Ticaret Üniversitesi",
  },
  softwareDev: {
   'EN': "Software Development",
   'TR': "Yazılım Geliştirme",
  },
 };

 const personalInfo = [
  {
   label: translations.birthDate[language],
   value: "29.03.1998",
   icon: FaBirthdayCake,
  },
  {
   label: translations.location[language],
   value: (
    <span className="flex items-center justify-center gap-2">
     İstanbul, Türkiye
     <ReactCountryFlag
      countryCode="TR"
      svg
      style={{ width: "20px", height: "15px" }}
      aria-label="Turkey"
     />
    </span>
   ),
   icon: FaMapMarkerAlt,
  },
  {
   label: translations.education[language],
   value: translations.istanbulCommerce[language],
   icon: FaGraduationCap,
  },
  {
   label: translations.passion[language],
   value: translations.softwareDev[language],
   icon: FaCode,
  },
 ];

 const cardClasses = `
    bg-secondary p-4 sm:p-8 rounded-4xl shadow-4xl
    transition-all duration-1000 delay-300
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `;

 return (
  <section className={cardClasses.trim()} aria-labelledby="personal-info-heading">
   <div className="text-center mb-6 sm:mb-8">
    <FaUser className="w-8 h-8 mx-auto mb-3 text-primary" aria-hidden="true" />
    <h2 id="personal-info-heading" className="text-2xl font-bold text-primary">
     {translations.title[language]}
    </h2>
   </div>

   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
    {personalInfo.map((info) => {
     const IconComponent = info.icon;

     const itemClasses = `text-center p-3 sm:p-4 rounded-2xl bg-muted 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl
            h-full min-h-[90px] sm:min-h-[150px] flex flex-col justify-between
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `;

     return (
      <article
       key={info.label}
       className={itemClasses.trim()}
       style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
      >
       <div className="flex flex-col items-center justify-center flex-grow py-1 sm:py-3 ">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
        <h4 className="mt-2 font-semibold text-xs sm:text-[16px] tracking-wide text-primary ">
         {info.label}
        </h4>
        <p className="font-medium text-sm sm:text-base break-words text-center mt-1 text-primary">
         {info.value}
        </p>
       </div>
      </article>
     );
    })}
   </div>
  </section>
 );
}