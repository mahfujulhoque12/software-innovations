"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/redux-store/store";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased bg-[#eff3f8] font-sans`}
      >
     
          <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
  
      </body>
    </html>
  );
}
