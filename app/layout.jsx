import "./styles/globals.css";
import ScrollToTop from "../components/extra/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from "./context/DataContext";
import LayoutContent from "./LayoutContent.jsx";

export const metadata = {
 title: "Ömer Halis Demir | Full Stack Developer",
 description: "Modern web uygulamaları geliştiriyorum.",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body>
    <ScrollToTop />
    <LanguageProvider>
     <DataProvider>
      <LayoutContent>{children}</LayoutContent>
     </DataProvider>
    </LanguageProvider>
   </body>
  </html>
 );
}