import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: React.ReactNode | string;
}

export interface SocialLink {
  icon: IconType;
  url: string;
  color: string;
}

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: "location",
    value: "İstanbul, Türkiye",
    countryCode: "TR",
  },
  {
    icon: FaPhone,
    label: "phone",
    value: "+90 507 849 29 03",
  },
  {
    icon: FaEnvelope,
    label: "emailLabel",
    value: "omerhd34@outlook.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/",
    color: "hover:text-blue-500",
  },
  {
    icon: FaGithub,
    url: "https://github.com/omerhd34",
    color: "hover:text-gray-400",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/@%C3%96mer_Halis_Demir",
    color: "hover:text-sky-400",
  },
];
