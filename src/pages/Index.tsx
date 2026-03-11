import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import GateServices from "@/components/GateServices";
import CameraServices from "@/components/CameraServices";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <GateServices />
        <CameraServices />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
