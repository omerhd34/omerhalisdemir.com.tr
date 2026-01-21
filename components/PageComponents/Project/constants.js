import { ICON_MAP as BASE_ICON_MAP, ICON_COLOR_MAP as BASE_ICON_COLOR_MAP } from "../../extra/icons";

export const ICON_MAP = BASE_ICON_MAP;

export const ICON_SPECIFIC_COLORS = BASE_ICON_COLOR_MAP;

export const ELECTRONICS_IMAGES = {
 4: "/images/1.png",
 5: "/images/MetalDedector.png",
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
