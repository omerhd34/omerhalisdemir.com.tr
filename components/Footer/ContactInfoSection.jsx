import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function ContactInfoSection({ language }) {

 return (
  <div className="space-y-4">
   <h3 className="text-accent font-semibold text-lg border-b border-[#ebf3fe]/30 pb-2">
    {language === "TR" ? "İletişim Bilgileri" : "Contact Information"}
   </h3>
   <div className="space-y-3">
    <div className="flex items-start space-x-3 text-accent text-sm">
     <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-accent" />
     <span>İstanbul / Türkiye</span>
     <ReactCountryFlag
      countryCode="TR"
      svg
      style={{ width: "20px", height: "20px" }}
      aria-label="Turkey"
     />
    </div>
    <div className="flex items-start space-x-3 text-accent text-sm">
     <FaPhone className="w-4 h-4 mt-0.5 text-accent" />
     <span>+90 507 849 29 03</span>
    </div>
    <div className="flex items-start space-x-3 text-accent text-sm">
     <FaEnvelope className="w-4 h-4 mt-0.5 text-accent" />
     <Link
      href={`mailto:omerhd16@outlook.com`}
      className="hover:text-accent transition-colors duration-300 break-all cursor-pointer"
     >
      omerhd16@outlook.com
     </Link>
    </div>
   </div>
  </div>
 );
}
