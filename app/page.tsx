import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import BenefitsSection from "@/components/benefits-section";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/cta-section";
import ContactFormSection from "@/components/contactform-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      <Footer />

    </div>
  );
}
