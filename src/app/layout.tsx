import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Circuit Guardians | Repairs, IT Support & Digital Products",
  description: "Circuit Guardians helps South African individuals and businesses with device repairs, practical IT support, and purpose-built web and mobile applications.",
  keywords: "tech repair, laptop repair, mobile repair, web development, app development, software installation",
  authors: [{ name: "Circuit Guardians" }],
  icons: {
    icon: [
      { url: '/cg-favicon.ico' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/cg-favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Circuit Guardians | Tech that works. Business that moves.",
    description: "Practical tech support, reliable repairs, and digital products built around your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
