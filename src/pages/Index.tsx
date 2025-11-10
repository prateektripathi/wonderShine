import { useEffect, useState } from "react";
import { Car } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
  const hash = window.location.hash; // e.g. "#services"
  if (hash) {
    const id = hash.replace("#", ""); // "services"
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    const home = document.getElementById("home");
    home?.scrollIntoView({ behavior: "smooth" });
  }
}, []);

  return (
    <div className="min-h-screen relative">
      <Header links={[
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]} />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button (bottom-left) */}
      <a
        href="https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20or%20solar%20cleaning%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
