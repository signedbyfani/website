import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: new URL("https://www.fanindra.xyz/"),
  title: {
    default: "Fanindra Maharana",
    template: "%s | Fanindra Maharana",
  },
  description: "Fanindra Maharana is an Interaction Designer based out of India. Currently pursuing M. Des at JKLU, Jaipur.",
  keywords: [
    "Interaction Design",
    "UI/UX",
    "User Experience",
    "Product Design",
    "Web Development",
    "Fanindra Maharana",
    "Design Portfolio"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fanindra.xyz/",
    title: "Fanindra Maharana",
    description: "Fanindra Maharana is an Interaction Designer based out of India. Currently pursuing M. Des at JKLU, Jaipur.",
    images: ["https://www.fanindra.xyz/og.png"],
    siteName: "Fanindra Maharana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanindra Maharana",
    description: "Fanindra Maharana is an Interaction Designer based out of India. Currently pursuing M. Des at JKLU, Jaipur.",
    images: ["https://www.fanindra.xyz/og.png"],
    creator: "@fanindraaa", // Replace with actual Twitter handle
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
  alternates: {
    canonical: "https://www.fanindra.xyz/",
  },
};