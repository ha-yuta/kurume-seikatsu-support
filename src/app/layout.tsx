import type { Metadata } from "next";
import { Zen_Maru_Gothic, Shippori_Mincho_B1 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-8SJTH4V70Z";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
});

const shipporiMincho = Shippori_Mincho_B1({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kurume-support.com"),
  alternates: {
    canonical: "/",
  },
  title: "東久留米市の便利屋｜くるめ生活サポート（東京都・小平市・西東京市）",
  description:
    "東京都東久留米市・小平市・西東京市エリアで電球交換、家具移動、片付け、草取りなど介護保険外の暮らしの困りごとをサポート。見積無料／作業前に料金説明し同意後に作業。受付9:00〜18:00、主に金土日（予約制）。電話070-2493-5340",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "くるめ生活サポート｜介護保険外の便利屋",
    description: "電球交換、家具移動、片付け、草取り、買い物代行など暮らしの困りごとをサポート。東久留米・小平・西東京エリア対応。",
    type: "website",
    locale: "ja_JP",
    siteName: "くるめ生活サポート",
  },
  twitter: {
    card: "summary_large_image",
    title: "くるめ生活サポート｜介護保険外の便利屋",
    description: "電球交換、家具移動、片付け、草取り、買い物代行など暮らしの困りごとをサポート。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "くるめ生活サポート",
              url: "https://kurume-support.com",
              telephone: "070-2493-5340",
              address: {
                "@type": "PostalAddress",
                addressLocality: "東久留米市",
                addressRegion: "東京都",
                addressCountry: "JP",
              },
              areaServed: [
                { "@type": "City", name: "東久留米市" },
                { "@type": "City", name: "小平市" },
                { "@type": "City", name: "西東京市" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: `${zenMaruGothic.style.fontFamily}, sans-serif`,
        }}
        className={`${zenMaruGothic.variable} ${shipporiMincho.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
