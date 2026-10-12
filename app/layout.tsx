import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hamza — Software Developer",
  description:
    "Software Developer based in Lahore, focused on databases, SQL, and automation. Python, MySQL, MariaDB, Oracle, PostgreSQL, Django.",
  keywords: [
    "Hamza",
    "Software Developer",
    "Database Developer",
    "SQL",
    "Python",
    "Django",
    "MySQL",
    "PostgreSQL",
    "Lahore",
  ],
  authors: [{ name: "Hamza" }],
  openGraph: {
    title: "Hamza — Software Developer",
    description:
      "Software Developer focused on databases, SQL, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}