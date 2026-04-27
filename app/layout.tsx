import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Harish Bhatt | WEB  Developer & SEO Specialist Portfolio",
  description: "Harish Bhatt is a full stack developer from Nepal specializing in SEO, React, Node.js, Prisma, and modern web applications. Explore portfolio projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <meta name="google-site-verification" content="DfaOt5xW4_4K_lHwkhdlC3TShNz6hf3TwAEM1GQm1OI" />
      </head>
      <body>{children}</body>
    </html>
  );
}
