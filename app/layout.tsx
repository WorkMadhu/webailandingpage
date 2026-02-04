import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebAI Automations - Full-Service Automation Company",
  description: "Transform your business with cutting-edge AI and automation solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
