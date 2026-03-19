import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
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
