"use client";

import { useState } from "react";
import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { SectionDottedCircle } from "./Decorations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "どんなことをお願いできますか？",
      a: "電球交換、家具の移動、片付け（軽作業）、草取り・簡単な庭掃除、買い物代行など、日常の「ちょっと困った」軽作業に出張で対応します。",
    },
    {
      q: "介護保険外（制度外）のお手伝いとは何ですか？",
      a: "介護保険のサービスでは対応が難しい軽作業を、有償でお手伝いするものです。作業前に内容と料金をご説明し、ご同意をいただいてから作業します。",
    },
    {
      q: "対応エリアはどこですか？",
      a: "東久留米市・小平市・西東京市を中心に対応しています（近隣は応相談）。",
    },
    {
      q: "料金はどのように決まりますか？",
      a: "出張費と作業時間を基本に算出します。作業前に必ず金額を提示し、ご同意をいただいてから開始します。追加作業が必要な場合も都度確認します。",
    },
    {
      q: "最低料金はありますか？",
      a: "はい。出張費込みで4,500円（税込）が最低料金です。",
    },
    {
      q: "見積は無料ですか？",
      a: "内容が軽作業の範囲であれば、電話/SMSで目安をご案内できます。現地確認が必要な場合は事前にお伝えします。",
    },
    {
      q: "当日すぐ来てもらえますか？",
      a: "可能な範囲で調整しますが、基本は予約制です。まずはご希望日時をお知らせください。",
    },
    {
      q: "支払い方法は？",
      a: "現金／銀行振込に対応しています。領収書も発行します。",
    },
    {
      q: "キャンセル料はかかりますか？",
      a: "体調不良など事情がある場合は柔軟に対応します。分かった時点でご連絡ください。",
    },
    {
      q: "お受けできない作業はありますか？",
      a: "安全・法令遵守のため、電気工事、高所危険作業、重量物の単独運搬、不用品回収・処分、水回り分解修理などはお受けできません。",
    },
  ];

  return (
    <section style={{ backgroundColor: colors.cream, padding: "140px 24px", position: "relative", overflow: "hidden" }}>
      <div id="faq" style={{ position: "absolute", top: "-100px" }} />
      <SectionDottedCircle style={{ width: "400px", bottom: "-150px", right: "-150px" }} />

      <AnimatedSection style={{ maxWidth: "750px", margin: "0 auto" }}>
        <SectionTitle en="FAQ" ja="よくある質問" />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.white,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                {/* Qバッジ */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: colors.lightGreen,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "white", fontSize: "14px", fontWeight: 600 }}>Q</span>
                </div>
                <span
                  style={{
                    flex: 1,
                    fontSize: "17px",
                    fontWeight: 500,
                    color: colors.darkGreen,
                    lineHeight: 1.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  {faq.q}
                </span>
                {/* シェブロン */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.lightText}
                  strokeWidth="2"
                  style={{
                    width: "20px",
                    height: "20px",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: openIndex === index ? "rotate(180deg)" : "none",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div
                  style={{
                    padding: "0 28px 24px 76px",
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  {/* Aバッジ */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(196, 169, 98, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: "rgba(180, 160, 120, 0.9)", fontSize: "14px", fontWeight: 600 }}>A</span>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: colors.text,
                      lineHeight: 1.9,
                      margin: 0,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
