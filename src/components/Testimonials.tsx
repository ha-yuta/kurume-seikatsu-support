"use client";

import { colors } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { SectionDottedCircle } from "./Decorations";

export default function Testimonials() {
  const reviews = [
    {
      text: "頭や心の整理がつかないまま、どこか執着を捨てられずそれが物にも現れている状態で片付けのサポートをお願いしました。長時間開かずの部屋の前に進めることができました。家族も帰宅時、片付いた部屋に驚いた様子。次はさらなる断捨離を予定しています。作業中、細かい配慮や気遣いを随所に感じ、今回は私自身も救われました。どうもありがとうございました。",
    },
    {
      text: "対応が穏やかで、家の中の作業でも安心して頼むことができました。作業も丁寧で、設置する棚の取り付け位置に障害になる家具をどかしたり、照明ソケットも取り外して希望位置に取り付けをしてくれました。棚の位置もしっかり調整されており、大変助かりました。またサポートして欲しい時は頼むことになるかと思います。",
    },
  ];

  return (
    <section style={{ backgroundColor: colors.cream, padding: "140px 24px", position: "relative", overflow: "hidden" }}>
      <SectionDottedCircle style={{ width: "350px", bottom: "-100px", right: "-100px" }} />

      <AnimatedSection style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionTitle en="VOICE" ja="お客様の声" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.white,
                borderRadius: "16px",
                padding: "36px 32px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ color: colors.amber, fontSize: "18px", letterSpacing: "2px", marginBottom: "20px" }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.text,
                  lineHeight: 2,
                  letterSpacing: "0.3px",
                  margin: 0,
                }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: colors.lightText,
            marginTop: "32px",
            letterSpacing: "0.5px",
          }}
        >
          ※ご依頼者様のお声を、許可のうえ匿名で掲載しています。
        </p>
      </AnimatedSection>
    </section>
  );
}
