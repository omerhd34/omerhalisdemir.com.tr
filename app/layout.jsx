import "./styles/globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { DataProvider } from "./context/DataContext";
import LayoutContent from "./LayoutContent.jsx";

export const metadata = {
 title: "Ömer Halis Demir | Full Stack Developer",
 description: "Modern web uygulamaları geliştiriyorum.",
 icons: {
  icon: [
   { url: '/favicon.ico', sizes: 'any' },
   { url: '/favicon.svg', type: 'image/svg+xml' },
  ],
  apple: '/apple-touch-icon.png',
 },
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   </head>
   <body>
    <LanguageProvider>
     <DataProvider>
      <LayoutContent>{children}</LayoutContent>
     </DataProvider>
    </LanguageProvider>
   </body>
  </html>
 );
}