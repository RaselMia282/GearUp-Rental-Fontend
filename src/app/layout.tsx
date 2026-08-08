import type { Metadata } from "next";

import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Navbar } from "@/components/shared/navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Assignment-5",
  description: "Gear rental web application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className=" flex flex-col min-h-screen">
        <Toaster position="top-right"richColors></Toaster>
        <Navbar></Navbar>
        <main className="flex-1">
          {children}
          </main>
      </body>
    </html>
  );
}
