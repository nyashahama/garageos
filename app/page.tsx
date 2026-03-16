import ScrollReveal from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Ticker />
      <Stats />
      <Problem />
      <Features />
      <Advantages />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
