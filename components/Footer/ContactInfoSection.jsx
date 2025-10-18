import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function ContactInfoSection({ title, location, tel, email }) {
 return (
  <div className="space-y-4">
   <h3 className="text-secondary font-semibold text-lg border-b border-[#ebf3fe]/30 pb-2">
    {title}
   </h3>
   <div className="space-y-3">
    <div className="flex items-start space-x-3 text-secondary text-sm">
     <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-secondary" />
     <span>{location}</span>
    </div>
    <div className="flex items-start space-x-3 text-secondary text-sm">
     <FaPhone className="w-4 h-4 mt-0.5 text-secondary" />
     <span>{tel}</span>
    </div>
    <div className="flex items-start space-x-3 text-secondary text-sm">
     <FaEnvelope className="w-4 h-4 mt-0.5 text-secondary" />
     <Link
      href={`mailto:${email}`}
      className="hover:text-secondary transition-colors duration-300 break-all cursor-pointer hover:cursor-pointer"
     >
      {email}
     </Link>
    </div>
   </div>
  </div>
 );
}
