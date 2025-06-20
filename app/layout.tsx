import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from "./components/Header"
import Footer from "./components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Western Governors University",
  description: "Western Governors University – Online University",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/western-governors-university-logo-12A4A0E47B-seeklogo.com-dbYhBmoHoGL2vGUVvM1SFRJcXDrqjp.png",
        sizes: "any",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Zoho SalesIQ */}
        <Script id="zoho-salesiq" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "YOUR_ZOHO_WIDGET_CODE",
              values: {},
              ready: function () {},
            };
            const d = document;
            const s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zoho.com/widget";
            const t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
