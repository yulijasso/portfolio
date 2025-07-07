import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MySpace-Inspired Y2K Portfolio",
  description: "A nostalgic MySpace-inspired portfolio for a software engineer with Y2K aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
