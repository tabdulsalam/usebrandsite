import "@/public/styles/globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Refluant",
  description: "Swap Your Luxury Attire with Fellow Fashion Enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
