import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Droplets,
  Bike,
  Car,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroCarWash from "@/assets/Car-video.mp4";
import heroSolarCleaning from "@/assets/bike-video.mp4";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroCarWash,
      title: "Premium Car Washing in Lucknow",
      subtitle: "Professional • Eco-Friendly • Doorstep Service",
      description:
        "Experience Lucknow's best mobile car washing service. From basic wash to premium detailing, we bring the shine to your doorstep across Gomti Nagar, Hazratganj, and all major areas.",
      icon: <Car className="w-8 h-8" />,
    },
    {
      image: heroSolarCleaning,
      title: "Premium Bike Wash Across Lucknow",
subtitle: "Quick • Gentle • Doorstep Service",
description:
  "Give your bike the shine it deserves with our expert washing service. We use safe, high-quality products to protect your paint and ensure a spotless finish. Available across Lucknow for all types of bikes.",
icon: <Bike className="w-8 h-8" />, // Replace with an actual bike icon from your icon library

    },
  ];


const whatsappLink =
  "https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20or%20bike%20cleaning%20service";


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Bonus Scroll Padding CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 120px;
          }
        `}
      </style>

      <section
        id="home"
        className="relative min-h-screen pt-[112px] sm:pt-[120px] flex items-center overflow-hidden"
        role="region"
        aria-label="Hero Section with Image Slider"
      >
        {/* Background Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.image.endsWith(".mp4") ? (
                <video
                  src={slide.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="p-3 bg-gradient-primary rounded-full text-white floating-animation">
                {slides[currentSlide].icon}
              </div>
              <div className="flex gap-2">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                <Droplets className="w-6 h-6 text-primary animate-bounce" />
              </div>
            </div>

            <div className="transition-opacity duration-1000 opacity-100">
              <h2 className="text-primary font-semibold text-base sm:text-lg mb-2 drop-shadow">
                {slides[currentSlide].subtitle}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="px-4 sm:px-0 mt-10">
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up w-full sm:w-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="sm"
                    className="group bg-green-600 w-full sm:w-auto flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-6 hover:bg-green-800 hover:scale-105 transition-transform"
                    aria-label="Book on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp Booking
                  </Button>
                </a>
                <Button
                  variant="glass"
                  size="sm"
                  className="w-full sm:w-auto text-sm sm:text-base px-4 py-6 hover:scale-105 transition-transform"
                  aria-label="Mobile App Coming Soon"
                >
                 App Launching Soon!!
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">132+</div>
                <div className="text-gray-300">Cars Washed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Bike Washed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">WhatsApp Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 floating-animation">
          <div className="w-16 h-16 bg-gradient-eco rounded-full opacity-30 shadow-xl blur-md mix-blend-overlay"></div>
        </div>
        <div
          className="absolute bottom-40 left-20 floating-animation"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-12 h-12 bg-gradient-primary rounded-full opacity-30 shadow-lg blur-md mix-blend-overlay"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
