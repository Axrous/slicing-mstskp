import Hero from "../components/Hero";
import Features from "../components/Features";
import Reason from "../components/reason-section/Reason";
import AlternativesSection from "../components/alternatives/AlternativesSection";
import FooterSection from "../components/footer/FooterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Reason />
      <AlternativesSection />
      <FooterSection />
    </>
  );
}
