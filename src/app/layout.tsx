import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PrefsProvider } from "@/components/providers/Prefs";
import Backdrop from "@/components/scene/Backdrop";
import SceneLoader from "@/components/scene/SceneLoader";
import "./globals.css";

const sans = { variable: "--font-sans-ui" };
const display = { variable: "--font-display" };
const elu = { variable: "--font-elu" };
const sinhala = { variable: "--font-sinhala" };

const SITE_DESCRIPTION =
  "Read all 111 verses of the fifteenth-century Sinhala classic Salalihini Sandeshaya (The Starling's Message) with explanations in Sinhala and English, as a starling flies from Kotte to Kelaniya.";

export const metadata: Metadata = {
  title: {
    default: "සැළලිහිණි සංදේශය · Salalihini Sandeshaya",
    template: "%s · Salalihini Sandeshaya",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Salalihini Sandeshaya",
  keywords: [
    "Salalihini Sandeshaya",
    "සැළලිහිණි සංදේශය",
    "Selalihini Sandesaya",
    "Thotagamuwe Sri Rahula",
    "Sinhala poetry",
    "Sandesha Kavya",
    "Kotte",
    "Kelaniya",
  ],
  openGraph: {
    title: "සැළලිහිණි සංදේශය · The Starling's Message",
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_LK",
    alternateLocale: ["si_LK"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0820",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${elu.variable} ${sinhala.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Geist:wght@300;400;500;600;700&family=Noto+Sans+Sinhala:wght@400;500;600;700&family=Noto+Serif+Sinhala:wght@400;600;700&display=swap"
        />
      </head>
      <body className="relative min-h-dvh">
        <PrefsProvider>
          <LoadingScreen />
          <Suspense fallback={null}>
            <Backdrop />
            <SceneLoader />
            <Header />
          </Suspense>
          <a
            href="#main"
            className="fixed left-4 top-3 z-[70] -translate-y-16 rounded-full bg-gold px-4 py-2 text-sm font-medium text-black focus:translate-y-0"
          >
            Skip to content
          </a>
          {children}
        </PrefsProvider>
      </body>
    </html>
  );
}
