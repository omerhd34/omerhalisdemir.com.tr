import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Ömer Halis DEMİR",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
