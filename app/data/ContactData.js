import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

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
    value: "omerhd16@outlook.com",
  },
];

export const socialLinks = [
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
];
