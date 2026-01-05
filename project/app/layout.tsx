import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "next-themes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Forked UI - Modern React & Tailwind CSS Components",
    template: "%s | Forked UI",
  },
  description: "A curated collection of 100+ premium UI components built with React, Next.js, Tailwind CSS, and shadcn/ui. Copy, paste, and customize beautiful components for your next project.",
  keywords: ["React components", "Tailwind CSS", "UI library", "Next.js", "shadcn/ui", "web components", "frontend", "design system"],
  authors: [{ name: "Forked UI" }],
  creator: "Forked UI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forked-ui.vercel.app",
    siteName: "Forked UI",
    title: "Forked UI - Modern React & Tailwind CSS Components",
    description: "A curated collection of 100+ premium UI components built with React, Next.js, Tailwind CSS, and shadcn/ui.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forked UI - Modern React & Tailwind CSS Components",
    description: "A curated collection of 100+ premium UI components built with React, Next.js, Tailwind CSS, and shadcn/ui.",
    creator: "@gaurangp22",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <RootProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex flex-col min-h-screen">
                <div className="flex-1">{children}</div>
              </div>
            </ThemeProvider>
          </RootProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
