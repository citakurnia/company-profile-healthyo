import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthYo! Company Profile",
  description: "Company profile website as Cita Kurnia's Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex flex-col min-h-screen bg-blue-med z-5">
          <div className="relative bg-white-broken/40 w-full z-50 mx-auto px-4 py-2 md:py-3 lg:px-10">
            <Header />
          </div>
          <main className="relative flex flex-col flex-grow align-top z-10">
            {children}
          </main>
          <div className="relative bg-white-broken/40 w-full rounded-t-3xl mx-auto px-5 pt-4 pb-2 md:pt-4 md:pb-2 z-10 md:px-7 lg:px-10">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
