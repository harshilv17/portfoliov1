import "./globals.css";
import Header from "@/components/Header";
import GridBackground, { GlowEffects } from "@/components/Background";

export const metadata = {
  title: "HARSHIL VALECHA | Full-Stack Developer",
  description: "Passionate full-stack developer building innovative digital products. Focused on web development, AI/ML, and creating seamless user experiences.",
  keywords: ["developer", "web developer", "full-stack", "portfolio", "react", "nextjs"],
  authors: [{ name: "Harshil Valecha" }],
  openGraph: {
    title: "HARSHIL VALECHA | Full-Stack Developer",
    description: "Passionate full-stack developer building innovative digital products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GridBackground />
        <GlowEffects />
        <Header />
        {children}
      </body>
    </html>
  );
}
