import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TakeMyOnlineClassUSA — Online Class Support for Busy Students",
  description:
    "TMOCU provides professional online class support for busy students. We help manage your coursework, assignments, quizzes, and exams so you can focus on what matters most.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "TakeMyOnlineClassUSA — Online Class Support for Busy Students",
    description:
      "Professional academic support for students managing heavy online workloads. Coursework, assignments, quizzes, and exam support, all in one place.",
    url: SITE_URL,
    siteName: "TakeMyOnlineClassUSA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TakeMyOnlineClassUSA — Online Class Support for Busy Students",
    description:
      "Professional academic support for students managing heavy online workloads.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-surface-offwhite text-text-main">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
