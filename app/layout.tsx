import type { Metadata } from "next";

import "./globals.css";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sushiman - Authentic Japanese Delights",
  description:
    "Explore the exquisite world of traditional and modern Japanese sushi. Fresh ingredients, masterful preparation, and a delightful culinary experience.",
  keywords: [
    "sushi",
    "japanese food",
    "sushi restaurant",
    "authentic sushi",
    "sushi delivery",
    "japanese cuisine",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
