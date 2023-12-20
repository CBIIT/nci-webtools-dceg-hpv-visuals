"use client";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import GoogleAnalytics from "@/components/analytics";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./styles/main.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--bs-font-sans-serif",
  display: "block",
});

export default function RootLayout({ children }) {
  const routes = [
    { title: "Home", path: "/" },
    { title: "View Images", path: "/view" },
    {
      title: "Learn about PAVE",
      path: "/learn-about-pave",
      subRoutes: [{ title: "Testing", path: "/learn-about-pave/testing" }],
    },
    { title: "Lessons Learned /Publications", path: "/publications" },
  ];

  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <title>HPV Visuals</title>
          <meta name="keywords" content="HPVAVE" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} />
          <script src="https://cbiit.github.io/nci-softwaresolutions-elements/components/include-html.js"></script>
        </head>
        <body
          className={[inter.className, "d-flex flex-column vh-100"].join(" ")}
        >
          <include-html src="https://cbiit.github.io/nci-softwaresolutions-elements/banners/government-shutdown.html"></include-html>
          <Header routes={routes} />
          <main className="position-relative d-flex flex-column flex-grow-1 align-items-stretch bg-light">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </RecoilRoot>
  );
}
