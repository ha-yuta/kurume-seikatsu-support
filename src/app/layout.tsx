import type { Metadata } from "next";
import { Zen_Maru_Gothic, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

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
  title: "くるめ生活サポート｜介護保険外の便利屋（東久留米・小平・西東京）",
  description:
    "電球交換、家具移動、片付け、草取り、買い物代行など介護保険外の暮らしの困りごとをサポート。見積無料／作業前に料金説明し同意後に作業。受付9:00〜18:00、主に金土日（予約制）。電話070-2493-5340",
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
