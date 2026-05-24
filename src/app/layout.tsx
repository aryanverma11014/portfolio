import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aryan-verma.dev"),
  title: {
    default: "Aryan Verma | Backend Developer",
    template: "%s | Aryan Verma"
  },
  description:
    "Portfolio of Aryan Verma, an aspiring Backend Developer building scalable APIs, authentication systems, databases, and production-ready backend services.",
  keywords: [
    "Aryan Verma",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "SQL",
    "Redis",
    "System Design"
  ],
  authors: [{ name: "Aryan Verma" }],
  creator: "Aryan Verma",
  openGraph: {
    title: "Aryan Verma | Backend Developer",
    description:
      "Building scalable APIs, backend systems, and modern web applications.",
    url: "https://aryan-verma.dev",
    siteName: "Aryan Verma Portfolio",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Verma | Backend Developer",
    description:
      "Building scalable APIs, backend systems, and modern web applications."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
