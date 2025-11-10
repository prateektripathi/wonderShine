import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ecoImage from "../assets/ECO-friendly.png";
import teamImage from "../assets/Expert-team.png";
import qualityImage from "../assets/Support.png";
import timeImage from "../assets/time1.png";

const About = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Eco-Friendly Products",
      description:
        "We use only biodegradable, environmentally safe cleaning solutions.",
      imageUrl: ecoImage,
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Expert Team",
      description:
        "Trained professionals with years of experience in automotive.",
      imageUrl: teamImage,
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Quality Guarantee",
      description:
        "90% satisfaction guarantee on all our services and work.",
      imageUrl: qualityImage,
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Flexible Scheduling",
      description:
        "Convenient appointment times that work with your busy schedule.",
      imageUrl: timeImage,
    },
  ];

  const stats = [
    {
      number: "132+",
      label: "Cars Washed",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "50+",
      label: "Bike Washed",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "90%",
      label: "Customer Satisfaction",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "24/7",
      label: "WhatsApp Support",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <section id="about" className=" bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="font-semibold text-sm sm:text-base">About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 flex flex-wrap justify-center">
            Why Choose <span className="text-red-600 ml-2">WønderShinë?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're Lucknow's trusted mobile cleaning service, passionate about delivering exceptional doorstep solutions that protect your investments.
          </p>
        </div>

        {/* Flex Layout: Image + Features */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch mb-16">
          {/* Image side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center rounded-xl bg-white overflow-hidden">
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[100%]">
              <AnimatePresence>
                <motion.img
                  key={features[activeFeatureIndex].imageUrl}
                  src={features[activeFeatureIndex].imageUrl}
                  alt={features[activeFeatureIndex].title}
                  initial={{ rotateY: 180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 180, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-xl"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Feature list */}
          <div className="w-full lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeatureIndex(index)}
                onClick={() => setActiveFeatureIndex(index)}
                className="group p-5 sm:p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-red-600 to-black rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-3xl p-6 sm:p-8 md:p-10 xl:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              These numbers reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 group-hover:scale-110 transform-gpu transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              "To provide exceptional cleaning services that not only enhance the appearance and performance of our clients' vehicles but also contribute to a cleaner, more sustainable environment. We believe in building lasting relationships through trust, quality, and unmatched customer service."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
