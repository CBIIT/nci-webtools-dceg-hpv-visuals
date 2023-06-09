"use client";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import GoogleAnalytics from "@/components/analytics";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./styles/main.scss";

const inter = Inter({ subsets: ["latin"], variable: "--bs-font-sans-serif", display: "block" });

export const metadata = {
  title: "HPV Visuals",
  description: "HPV Visuals",
};

export default function RootLayout({ children }) {
  const routes = [
    { title: "Home", path: "/"},
    { title: "Explore", path: "/explore" },
    { title: "About", path: "/about" },
  ]

  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <title>HPV Visuals</title>
          <meta name="keywords" content="HPVAVE" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} />
        </head>
        <body className={[inter.className, "d-flex flex-column vh-100"].join(" ")}>
          <Header routes={routes} />
          <main className="position-relative d-flex flex-column flex-grow-1 align-items-stretch bg-light">{children}</main>
          <Footer />
        </body>
      </html>
    </RecoilRoot>
  );
}
