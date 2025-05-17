import "@/styles/main.css";

import type { Metadata } from "next";

import { OpenGraph } from "@/lib/og";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider";

export const metadata: Metadata = {
  ...OpenGraph,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <RootProvider>
          <main className="mx-auto max-w-screen-md overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
            <article className="article">{children}</article>
          </main>
        </RootProvider>
      </body>
    </html>
  );
}
