"use client";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import GoogleAnalytics from "@/components/analytics";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./styles/main.scss";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--bs-font-sans-serif",
  display: "block",
});

export default function RootLayout({ children }) {
  const routes = [
    { title: "Home", path: "/", subRoutes: [] },
    { title: "View Images", path: "/view", subRoutes: [] },
    {
      title: "Learn about PAVE",
      path: "/learn-about-pave",
      subRoutes: [
        // { title: "Learn about PAVE", path: "/learn-about-pave" },
        { title: "Testing", path: "/learn-about-pave/testing" },
      ],
    },
    {
      title: "Lessons Learned / Publications",
      path: "/lessons-learned",
      subRoutes: [
        { title: "Lessions Learned", path: "/lessons-learned" },
        { title: "Publications", path: "/publications" },
      ],
    },
  ];

  useEffect(() => {
    // Google Analytics script
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", process.env.GOOGLE_ANALYTICS_ID);
  }, []);
  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <title>HPV Visuals</title>
          <meta name="keywords" content="HPVAVE" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          {/* <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} /> */}
          <GoogleAnalytics id="G-4J9MRXD9YP" />
          <GoogleAnalytics id="G-VRQ8WTYGN7" />
          <GoogleAnalytics id="G-MZ8408HSC0" />
          <script src="https://cbiit.github.io/nci-softwaresolutions-elements/components/include-html.js"></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4J9MRXD9YP"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-4J9MRXD9YP');
              `,
            }}
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-VRQ8WTYGN7"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-VRQ8WTYGN7');
              `,
            }}
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MZ8408HSC0"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-MZ8408HSC0');
              `,
            }}
          ></script>
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
