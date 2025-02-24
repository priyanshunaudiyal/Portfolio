import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";
import { ModeToggle } from "@/components/ui/ModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu's Portfolio",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="align-center justify-between flex p-5">
            <h1 className="text-2xl font-bold select-none">Priyanshu's Portfolio</h1>
          <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}