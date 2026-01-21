import { ICON_MAP, ICON_COLOR_MAP } from "../../extra/icons";

export const iconMap = ICON_MAP;
export const iconColorMap = ICON_COLOR_MAP;

export const categoryColorMap = {
 education: "bg-green-700",
 internship: "bg-green-700",
 certificates: "bg-green-700",
};

export const getStatusBg = (status) => {
 switch (status) {
  case "completed":
   return "bg-blue-900 border-accent";
  case "current":
   return "bg-red-900 border-accent";
  case "upcoming":
   return "bg-yellow-500/20 border-accent";
  default:
   return "bg-gray-500/20 border-accent";
 }
};
