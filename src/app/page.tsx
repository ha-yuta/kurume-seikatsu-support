import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import OperatorProfile from "@/components/OperatorProfile";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import AreaHours from "@/components/AreaHours";
import NotAccepted from "@/components/NotAccepted";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <Problems />
      <Services />
      <section style={{ background: "#e9f0e7", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ letterSpacing: "0.15em", fontSize: "12px", fontWeight: 700, color: "#54795c" }}>FOR PROPERTY OWNERS & MANAGEMENT</p>
          <h2 style={{ color: "#26472e", fontSize: "clamp(22px, 3vw, 30px)", margin: "12px 0" }}>不動産オーナー・管理会社様へ</h2>
          <p style={{ lineHeight: 1.9, color: "#415947" }}>管理物件の現地確認・写真報告・ちょっとした軽作業など、現場の「手が足りない」にお応えします。単発のご相談から承ります。</p>
          <Link href="/property-support" style={{ display: "inline-block", marginTop: 18, padding: "14px 28px", background: "#2e603c", color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>不動産向けサービスを見る →</Link>
        </div>
      </section>
      <OperatorProfile />
      <Testimonials />
      <Pricing />
      <Process />
      <AreaHours />
      <NotAccepted />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
