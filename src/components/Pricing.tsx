"use client";

import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { SectionDottedCircle } from "./Decorations";

export default function Pricing() {
  const extensionItems = [
    { label: "延長 30分", price: "2,000", unit: "円" },
    { label: "延長 1時間", price: "4,000", unit: "円" },
  ];

  const quoteExamples = [
    "大型家具の移動・設置",
    "ベッド等の組立作業",
    "草むしり（作業量・範囲による）",
    "引っ越しの手伝い",
    "大掃除・片付け",
    "庭木の剪定",
    "網戸の張替え",
    "など",
  ];

  const freeAreas = [
    {
      pref: "東京都",
      cities:
        "東久留米市・練馬区・西東京市・小平市・東大和市・清瀬市・府中市・東村山市・三鷹市・武蔵野市・調布市・国分寺市",
    },
    {
      pref: "埼玉県",
      cities: "所沢市・新座市",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: colors.white,
        padding: "140px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div id="pricing" style={{ position: "absolute", top: "-100px" }} />
      <SectionDottedCircle style={{ width: "350px", top: "-80px", left: "-100px" }} />

      <AnimatedSection style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTitle en="PRICE" ja="料金の目安（税込）" />

        {/* お見積り無料バッジ */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: colors.amber,
              color: colors.white,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(212, 137, 42, 0.25)",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 500, opacity: 0.9 }}>お見積り</span>
            <span style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "2px" }}>無料</span>
          </div>
        </div>

        {/* メイン価格カード */}
        <div
          style={{
            backgroundColor: "rgba(90, 143, 60, 0.08)",
            padding: "48px 40px",
            borderRadius: "16px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ fontSize: "18px", color: colors.darkGreen, fontWeight: 500, marginBottom: "16px", letterSpacing: "1px" }}>
            訪問サポート 1時間
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "6px" }}>
            <span
              style={{
                fontSize: "clamp(42px, 10vw, 56px)",
                fontWeight: 500,
                color: colors.darkGreen,
                fontFamily: "var(--font-shippori), serif",
                lineHeight: 1,
              }}
            >
              5,500
            </span>
            <span style={{ fontSize: "20px", color: colors.darkGreen, fontWeight: 500 }}>円（税込）</span>
          </div>
          <div style={{ fontSize: "16px", color: colors.lightText, marginTop: "20px", lineHeight: 1.8 }}>
            ＝ 訪問＋1時間までの軽作業
          </div>
          <div style={{ fontSize: "15px", color: colors.text, marginTop: "12px", lineHeight: 1.8 }}>
            1時間以内であれば、複数の軽作業を<span style={{ whiteSpace: "nowrap" }}>まとめて</span>ご相談いただけます。
          </div>
          <div style={{ fontSize: "15px", color: colors.text, marginTop: "16px", lineHeight: 1.8 }}>
            例：電球交換、カーテン取付、家具の<span style={{ whiteSpace: "nowrap" }}>簡単な移動</span>、<br />
            ちょっとした取付、軽い片付け など
          </div>
        </div>

        {/* 延長料金 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {extensionItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.cream,
                borderRadius: "16px",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "15px", color: colors.lightText, marginBottom: "12px", letterSpacing: "1px" }}>
                {item.label}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "clamp(26px, 5vw, 32px)",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    fontFamily: "var(--font-shippori), serif",
                  }}
                >
                  {item.price}
                </span>
                <span style={{ fontSize: "16px", color: colors.text }}>{item.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 補足 */}
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: colors.text,
            marginBottom: "40px",
            lineHeight: 1.8,
            backgroundColor: colors.cream,
            padding: "20px 24px",
            borderRadius: "8px",
          }}
        >
          ※作業前に必ず料金を提示し、ご同意後に開始します。追加作業は都度確認します。
        </p>

        {/* 別途お見積りの作業 */}
        <div
          style={{
            backgroundColor: colors.white,
            border: `1px solid rgba(0,0,0,0.08)`,
            borderRadius: "12px",
            padding: "32px",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: colors.darkGreen,
              marginBottom: "20px",
              fontFamily: "var(--font-shippori), serif",
              letterSpacing: "1px",
            }}
          >
            内容に応じて別途お見積りする作業
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {quoteExamples.map((example, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: colors.cream,
                  color: colors.text,
                  fontSize: "14px",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  lineHeight: 1.6,
                }}
              >
                {example}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: colors.lightText, margin: 0, lineHeight: 1.8 }}>
            上記のような作業は内容・量に応じて別途お見積りいたします。その他の作業についても、まずはお気軽にご相談ください。
          </p>
        </div>

        {/* 出張料無料エリア */}
        <div
          style={{
            backgroundColor: "rgba(90, 143, 60, 0.08)",
            borderRadius: "16px",
            padding: "32px",
            marginBottom: "40px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: colors.darkGreen,
              marginBottom: "20px",
              fontFamily: "var(--font-shippori), serif",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            出張料無料エリア
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {freeAreas.map((area, index) => (
              <div key={index} style={{ display: "flex", flexWrap: "wrap", gap: "8px", lineHeight: 1.8 }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: colors.darkGreen, whiteSpace: "nowrap" }}>
                  {area.pref}：
                </span>
                <span style={{ fontSize: "15px", color: colors.text }}>{area.cities}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "14px", color: colors.lightText, marginTop: "20px", marginBottom: 0, lineHeight: 1.8, textAlign: "center" }}>
            上記以外のエリアも対応可能な場合がございます。お気軽にご相談ください。
          </p>
        </div>

        {/* 最下部注記 */}
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: colors.lightText,
            lineHeight: 1.8,
          }}
        >
          表示料金は目安です。作業内容・量・難易度により変動する場合があります。<br />
          作業前に必ずご説明し、ご同意のうえ作業します。
        </p>
      </AnimatedSection>
    </section>
  );
}
