"use client";

import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { SectionDottedCircle } from "./Decorations";

export default function Pricing() {
  const priceItems = [
    { label: "出張費", price: "1,000", unit: "円", note: "東久留米・小平・西東京市内" },
    { label: "作業費（1時間）", price: "3,500", unit: "円", note: "" },
    { label: "延長（30分）", price: "1,500", unit: "円", note: "" },
  ];

  const exampleCategories = [
    {
      title: "草取り・庭まわり",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
          <path d="M12 22c-4-2-7-6-7-10 0-3 2-6 5-7 2 3 2 6 2 9" />
          <path d="M12 22c4-2 7-6 7-10 0-3-2-6-5-7-2 3-2 6-2 9" />
          <path d="M12 22V8" />
        </svg>
      ),
      items: [
        { desc: "スポット草取り（通路・ブロック際など／〜1時間）", price: "4,500円" },
        { desc: "草取り（少なめ／〜1.5時間）", price: "6,000円" },
        { desc: "草取り（多め／〜2時間）", price: "7,500円" },
        { desc: "庭全体など量が多い場合", price: "現地見積（目安 9,000円〜）" },
      ],
      note: null,
    },
    {
      title: "簡易剪定（低木・生け垣）",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      items: [
        { desc: "お試し剪定（〜1時間）", price: "6,000円" },
        { desc: "しっかり剪定（〜2時間）", price: "9,000円" },
        { desc: "量が多い場合", price: "現地見積（目安 12,000円〜）" },
      ],
      note: "※安全のため、脚立で安全に届く範囲（目安〜2m）の簡易剪定に限ります。",
    },
    {
      title: "片付け・家具移動（軽作業）",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "32px", height: "32px" }}>
          <rect x="3" y="8" width="18" height="10" rx="1" />
          <path d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2M7 18v2M17 18v2" />
        </svg>
      ),
      items: [
        { desc: "〜1時間", price: "4,500円" },
        { desc: "〜1.5時間", price: "6,000円" },
        { desc: "〜2時間", price: "7,500円" },
      ],
      note: null,
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

        {/* 基本料金テーブル */}
        <div
          style={{
            backgroundColor: colors.cream,
            borderRadius: "16px",
            padding: "8px 0",
            marginBottom: "24px",
          }}
        >
          {priceItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "32px 40px",
                borderBottom: index < priceItems.length - 1 ? `1px solid rgba(0,0,0,0.06)` : "none",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                  }}
                >
                  {item.label}
                </span>
                {item.note && (
                  <span
                    style={{
                      fontSize: "14px",
                      color: colors.lightText,
                      marginLeft: "12px",
                    }}
                  >
                    {item.note}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "clamp(28px, 5vw, 36px)",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    fontFamily: "var(--font-shippori), serif",
                  }}
                >
                  {item.price}
                </span>
                <span style={{ fontSize: "16px", color: colors.text }}>
                  {item.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 最低料金 */}
        <div
          style={{
            backgroundColor: "rgba(90, 143, 60, 0.08)",
            padding: "40px",
            borderRadius: "16px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ fontSize: "16px", color: colors.lightText, marginBottom: "16px", letterSpacing: "2px" }}>
            最低料金
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
              4,500
            </span>
            <span style={{ fontSize: "20px", color: colors.darkGreen, fontWeight: 500 }}>円（税込）</span>
          </div>
          <div style={{ fontSize: "16px", color: colors.lightText, marginTop: "16px", lineHeight: 1.8 }}>
            出張費＋作業1時間相当
          </div>
        </div>

        {/* 補足 */}
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: colors.text,
            marginBottom: "80px",
            lineHeight: 1.8,
            backgroundColor: colors.cream,
            padding: "20px 24px",
            borderRadius: "8px",
          }}
        >
          ※作業前に必ず料金を提示し、ご同意後に開始します。追加作業は都度確認します。
        </p>

        {/* よくあるご依頼の料金目安 */}
        <h3
          style={{
            fontSize: "clamp(22px, 4vw, 28px)",
            fontWeight: 500,
            color: colors.darkGreen,
            textAlign: "center",
            marginBottom: "48px",
            fontFamily: "var(--font-shippori), serif",
            letterSpacing: "2px",
          }}
        >
          よくあるご依頼の料金目安
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {exampleCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              style={{
                backgroundColor: colors.cream,
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                minWidth: "320px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                  color: colors.lightGreen,
                }}
              >
                {category.icon}
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    margin: 0,
                    fontFamily: "var(--font-shippori), serif",
                    wordBreak: "keep-all",
                  }}
                >
                  {category.title}
                </h4>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    style={{
                      paddingBottom: itemIndex < category.items.length - 1 ? "16px" : 0,
                      borderBottom: itemIndex < category.items.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        color: colors.text,
                        lineHeight: 1.6,
                        marginBottom: "6px",
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.desc}
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: colors.darkGreen,
                        textAlign: "right",
                        wordBreak: "keep-all",
                      }}
                    >
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
              {category.note && (
                <p
                  style={{
                    fontSize: "14px",
                    color: colors.lightText,
                    marginTop: "16px",
                    lineHeight: 1.6,
                    wordBreak: "keep-all",
                  }}
                >
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ごみについて */}
        <div
          style={{
            backgroundColor: colors.white,
            border: `1px solid rgba(0,0,0,0.08)`,
            borderRadius: "12px",
            padding: "24px 32px",
            marginBottom: "40px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: colors.darkGreen,
              marginBottom: "16px",
            }}
          >
            ごみについて
          </h4>
          <p style={{ fontSize: "16px", color: colors.text, margin: "0 0 8px 0", lineHeight: 1.8 }}>
            お客様の家庭ゴミとして出す場合：<strong>無料</strong>（袋はお客様側でご用意）
          </p>
          <p style={{ fontSize: "14px", color: colors.lightText, margin: 0, lineHeight: 1.8 }}>
            ※不用品回収・処分（持ち帰り処分）は許可が必要なため対応しておりません。
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
