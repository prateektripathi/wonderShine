import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Car,
  Heart
} from "lucide-react";
import name from "../assets/name.jpg";
import sign from "../assets/sign.jpg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const services = [
    "💧 Marvel Wash ",
    "✨ Magic Wash ",
    "🌟 Aura Wash ",
  ];

  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Main Footer Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <img src={sign} alt="logo" className="h-15 w-auto" />
              </div>
              <div>
                <img src={name} alt="name" className="h-4 sm:h-6 w-auto" />
                <p className="text-gray-400 text-sm">Car & Bike Wash • Lucknow</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Lucknow's premier mobile car washing service.
              <br /> Book via WhatsApp for professional quality at your doorstep.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">Gomti Nagar, Hazratganj, & More</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 63940 08997
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@wondershine.com" className="text-gray-400 hover:text-white transition-colors">
                  info@wondershine.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-gray-500 text-sm text-center md:text-left">
              <span>© 2025 Wondershine. Made with Sahind Technologies Pvt. Ltd.</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Lucknow.</span>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <NavLink to="/policy" className="hover:text-white transition-colors">Privacy</NavLink>
              <NavLink to="/terms" className="hover:text-white transition-colors">Terms</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
