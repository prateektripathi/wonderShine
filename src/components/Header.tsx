import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import name from "../assets/name.jpg";
import sign from "../assets/sign.jpg";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = props.links;

  const whatsappLink =
    "https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20or%20bike%20wash%20service";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-3 sm:px-4">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm gap-2">
          <div className="hidden sm:flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>+91 63940 08997</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>info@wondershine.com</span>
            </div>
          </div>
          <div className="text-white text-center sm:text-right text-[10px] sm:text-xs md:text-sm">
            🕒 Mon - Sun: 7:00 AM - 8:00 PM • Mobile App Coming Soon!
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black py-3 sm:py-4">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <img src={sign} alt="logo" className="h-10 sm:h-12 w-auto" />
            <div className="flex flex-col">
              <img src={name} alt="name" className="h-5 sm:h-6 md:h-7 w-auto" />
              <p className="pl-1 text-[10px] sm:text-xs md:text-sm text-white whitespace-nowrap">
                Car & Bike Wash • Lucknow
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors font-medium text-xs sm:text-sm md:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA - Desktop */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block"
          >
            <Button
              className="bg-green-600 text-white hover:bg-green-600/90 transition-colors flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base"
              size="lg"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Booking
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 px-4 pb-4 border-t border-gray-700 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-primary transition-colors font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-green-600 text-white hover:bg-green-600/90 transition-colors mt-2 flex items-center gap-2 text-sm"
                  size="lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp Booking
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
