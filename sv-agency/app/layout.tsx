import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SV Agency - Complete AI Customer Systems",
  description: "Building complete AI customer systems for modern businesses. Landing pages, WhatsApp chatbots, Google Business setup, and automation that works while you sleep.",
  keywords: ["AI automation", "landing pages", "WhatsApp chatbot", "Google Business", "customer systems"],
  authors: [{ name: "Sai Videsh" }],
  creator: "Sai Videsh",
  publisher: "SV Agency",
  metadataBase: new URL("https://sv-agency.vercel.app"),
  openGraph: {
    title: "SV Agency - Complete AI Customer Systems",
    description: "Building complete AI customer systems for modern businesses. Landing pages, WhatsApp chatbots, Google Business setup, and automation that works while you sleep.",
    url: "https://sv-agency.vercel.app",
    siteName: "SV Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SV Agency - Complete AI Customer Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV Agency - Complete AI Customer Systems",
    description: "Building complete AI customer systems for modern businesses. Landing pages, WhatsApp chatbots, Google Business setup, and automation that works while you sleep.",
    images: ["/og-image.png"],
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
    <html lang="en" className="scroll-smooth">
      <body className="font-geist antialiased">
        {children}
      </body>
    </html>
  );
}
