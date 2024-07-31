import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Talk Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
