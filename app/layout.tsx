import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "S&S Tech Labs | Transforming Ideas into Digital Solutions",
  description:
    "We build high-performance web applications, SaaS platforms, enterprise systems, IoT solutions, CRM platforms, and custom software products.",
  keywords: [
    "software development",
    "web applications",
    "SaaS",
    "custom software",
    "enterprise solutions",
  ],
  authors: [{ name: "S&S Tech Labs" }],
  openGraph: {
    title: "S&S Tech Labs | Transforming Ideas into Digital Solutions",
    description:
      "We build high-performance web applications, SaaS platforms, enterprise systems, and custom software products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
