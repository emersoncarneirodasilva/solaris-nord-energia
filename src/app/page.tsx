import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import CompanyStrengths from "../components/CompanyStrengths";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";
import FinalConversionSection from "../components/FinalConversionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTASection />
      <CompanyStrengths />
      <ContactForm />
      <FAQSection />
      <FinalConversionSection />
    </>
  );
}
