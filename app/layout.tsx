
import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassBackButton from "@/components/ui/GlassBackButton";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medomas.com"),

  title: {
    default: "Medomas Healthcare | Quality, Science & Innovation",
    template: "%s | Medomas Healthcare",
  },

  description:
    "Medomas Healthcare Pvt. Ltd. is a Kerala-based healthcare and pharmaceutical company committed to quality, scientific collaboration and patient well-being.",

  applicationName: "Medomas Healthcare",

  openGraph: {
    type: "website",
    siteName: "Medomas Healthcare",
    title: "Medomas Healthcare",
    description:
      "Advancing Healthcare Through Quality, Science & Innovation.",
    images: ["/logo/medomas-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo/medomas-icon-transparent.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${dmSans.variable}`}
      >
        <Navbar />
        <GlassBackButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
