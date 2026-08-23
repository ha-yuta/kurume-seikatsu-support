"use client";

import Image from "next/image";
import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function OperatorProfile() {
  return (
    <section style={{ backgroundColor: colors.white, padding: "140px 24px", position: "relative" }}>
      <AnimatedSection style={{ maxWidth: "700px", margin: "0 auto" }}>
        <SectionTitle en="STAFF" ja="担当スタッフ紹介" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/profile-staff.webp"
              alt="担当スタッフ"
              fill
              sizes="160px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <p
            style={{
              fontSize: "16px",
              color: colors.text,
              lineHeight: 2,
              letterSpacing: "0.5px",
              margin: 0,
              maxWidth: "520px",
            }}
          >
            「ちょっと困った」に、丁寧に向き合います。作業前に内容と料金をしっかりご説明し、
            ご納得いただいてから作業を始めますので、はじめての方もご安心ください。
            地域の皆さまに安心してご相談いただけるよう、日々心がけています。
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
