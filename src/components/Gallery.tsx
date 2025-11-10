import { useState } from "react";
import { Car, Bike } from "lucide-react"; // Added Bike icon
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

// Import before and after images
import carBefore from "@/assets/before-car.jpg";
import carAfter from "@/assets/after-car.png";
import bikeBefore from "@/assets/before-bike.jpg"; // <- add your bike images
import bikeAfter from "@/assets/after-bike.jpg";

// Import ALL necessary icons
import BookingIcon from "@/components/icons/BookingIcon";
import ArrivalVanIcon from "@/components/icons/ArrivalVanIcon";
import CarCleaningIcon from "@/components/icons/CarCleaningIcon";
import CarKeyIcon from "@/components/icons/CarKeyIcon";
import BikeWashIcon from "@/components/icons/SolarPanelCleaningIcon"; // <- create if needed

// Import the NEW arrow icons
import ArrowRight from "@/components/icons/ArrowRight";
import ArrowPath from "@/components/icons/ArrowPath";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<"car" | "bike">("car");

  const carProcessSteps = [
    { icon: BookingIcon, title: "Book Your Service", description: "Easy booking via WhatsApp or our app." },
    { icon: ArrivalVanIcon, title: "We Come To You", description: "Our fully-equipped service van arrives." },
    { icon: CarCleaningIcon, title: "Expert Detailing", description: "Meticulous cleaning with premium products." },
    { icon: CarKeyIcon, title: "A Sparkling Finish", description: "Handing you the keys of your car back." },
  ];

  const bikeProcessSteps = [
    { icon: BookingIcon, title: "Book Bike Wash", description: "Quick scheduling via WhatsApp or our app." },
    { icon: ArrivalVanIcon, title: "Mobile Service Van", description: "We arrive at your location fully equipped." },
    { icon: BikeWashIcon, title: "Professional Wash", description: "Thorough wash & detailing for bikes." },
    { icon: CarKeyIcon, title: "Ride Ready", description: "Your bike is fresh, clean, and ready to ride." },
  ];

  const currentProcess = activeTab === "car" ? carProcessSteps : bikeProcessSteps;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <Car className="w-4 h-4" />
            <span className="font-semibold">Our Work & Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            A Flawless Finish, Every Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the stunning results and learn how our simple, 4-step process works.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center my-16 px-4">
          <div className="relative flex w-full max-w-md bg-black rounded-xl overflow-hidden shadow-md px-1 py-1">
            <div
              className={`absolute top-1 bottom-1 left-1 w-[48%] bg-red-800 rounded-lg shadow-md transition-transform duration-300 ease-in-out ${
                activeTab === "bike" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setActiveTab("car")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 font-semibold rounded-lg transition-colors duration-300 ${
                activeTab === "car" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <Car className="w-5 h-5" /> Car Washing
            </button>
            <button
              onClick={() => setActiveTab("bike")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 font-semibold rounded-lg transition-colors duration-300 ${
                activeTab === "bike" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <Bike className="w-5 h-5" /> Bike Washing
            </button>
          </div>
        </div>

        {/* Main Grid: Image on Left, Process Grid on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Slider */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <div className="aspect-[4/3] w-full h-full">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={activeTab === "car" ? carBefore : bikeBefore}
                    alt="Before"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={activeTab === "car" ? carAfter : bikeAfter}
                    alt="After"
                  />
                }
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: Process Grid */}
          <div className="relative">
            {/* --- Path Arrows (Desktop Only) --- */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              <ArrowRight className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-gray-300" />
              <ArrowPath className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 text-gray-300" />
              <ArrowRight className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-gray-300" />
            </div>

            {/* --- Process Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {currentProcess.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-slate-50 p-6 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-slate-200/70 z-0">
                    {index + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-xl mb-4">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* ...your stats content... */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
