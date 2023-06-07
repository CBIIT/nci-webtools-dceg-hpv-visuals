"use client";
import Script from "next/script";

export default function GoogleAnalytics({id}) {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></Script>
      <Script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "${id}");
      `}
      </Script>
    </>
  )
}
