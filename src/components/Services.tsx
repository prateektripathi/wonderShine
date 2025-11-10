// import { Button } from "@/components/ui/button";
// import {
//   FaCarAlt,
//   FaShower,
//   FaShieldAlt,
//   FaMotorcycle,
//   FaCheckCircle,
//   FaArrowRight,
// } from "react-icons/fa";

// const Services = () => {
//   const carServices = [
//     {
//       icon: <FaCarAlt className="text-white w-10 h-10 animate-bounce" />,
//       hoverIcon: <FaCarAlt className="text-gray-300 w-24 h-24 opacity-40" />,
//       title: "💧 Marvel Wash",
//       description:
//         "Quick Clean & Refresh — fast, affordable wash ideal for city users. Ensures a spotless look with minimal time investment.",
//       features: [
//         "Basic interior vacuum",
//         "Basic exterior pressure foam wash",
//         "Wipe dry",
//         "🧼 Windscreen Cleaning Tablet ",
//         "💨 Car Perfume ",
//       ],
//       price: "₹500 / ₹600 / ₹700",
//       gradient: "bg-gradient-primary",
//     },
//     {
//       icon: <FaShower className="text-white w-10 h-10 animate-bounce" />,
//       hoverIcon: <FaShower className="text-gray-300 w-24 h-24 opacity-40" />,
//       title: "✨ Magic Wash",
//       description:
//         "Complete Interior–Exterior Revival — balanced and rewarding service offering visible results and high customer satisfaction.",
//       features: [
//         "Interior vacuum with door trims ",
//         "Footmat cleaning ",
//         "Seat & boot vacuum cleaning",
//         "Exterior pressure foam wash",
//         "Tyre & wheel arc pressure wash + polish",
//         "Glass cleaning",
//         "🎁 Car Perfume ",
//         "🧻 Tissue Box",
//         "🩰 Cotton Foot Mats ",
//       ],
//       price: "₹1,100 / ₹1,200 / ₹1,300",
//       gradient: "bg-gradient-eco",
//     },
//     {
//       icon: <FaShieldAlt className="text-white w-10 h-10 animate-bounce" />,
//       hoverIcon: <FaShieldAlt className="text-gray-300 w-24 h-24 opacity-40" />,
//       title: "🌟 Aura Wash",
//       description:
//         "Luxury-Grade Deep Detailing & Shine — premium cleaning for a brand-new feel. Perfect for monthly care or resale prep.",
//       features: [
//         "Interior vacuum ",
//         "Footmat cleaning ",
//         "Dashboard & door trim clean + polish",
//         "Seat, roof & boot vacuum cleaning",
//         "Exterior pressure foam wash",
//         "Tyre & wheel wash + polish",
//         "Glass cleaning & body silicon polish",
//         "💎 Car Perfume ",
//         "🩰 Cotton Foot Mats ",
//       ],
//       price: "₹1,700 / ₹1,800 / ₹1,900",
//       gradient: "bg-gradient-primary",
//     },
//     {
//       icon: <FaMotorcycle className="text-white w-10 h-10 animate-bounce" />,
//       hoverIcon: (
//         <FaMotorcycle className="text-gray-300 w-24 h-24 opacity-40" />
//       ),
//       title: "🏍 Bike/Scooter Add-On",
//       description:
//         "Smart Combo — can be added with any car wash. High-margin, low-time add-on ideal for multi-vehicle households.",
//       features: [
//         "Foam wash + rinse",
//         "Seat & alloy wipe",
//         "Glass & headlight cleaning",
//         "✅ Perfect for two-wheeler owners wanting quick, spotless results",
//       ],
//       price: "₹250 (Add-on)",
//       gradient: "bg-gradient-eco",
//     },
//   ];

//   const whatsappLink =
//     "https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20service";

//   const ServiceCard = ({ service }: { service: any }) => (
//     <div className="group relative bg-white rounded-2xl shadow-card hover:shadow-floating transition-all duration-500 overflow-hidden hover:-translate-y-2 min-w-[80%] md:min-w-0 snap-start min-h-[550px]">
//       {/* Increased card height */}
//       <div className={`${service.gradient} h-28 relative`}>
//         {/* Increased top banner height */}
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
//         <div className="relative z-10 p-6 flex items-center justify-between">
//           <div>{service.icon}</div>
//           <div>
//             <h1 className="text-2xl font-extrabold text-gray-800 mb-1 group-hover:text-white transition-colors">
//               {service.title}
//             </h1>
//             <p className="text-base font-semibold text-gray-700 group-hover:text-white/80 transition-colors">
//               {service.price}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 relative z-10">
//         <p className="text-black mb-6 text-[1rem] leading-relaxed">
//           {service.description}
//         </p>
//         <ul className="space-y-3 mb-6">
//           {service.features.map((feature: string, idx: number) => (
//             <li key={idx} className="flex items-center gap-3">
//               <FaCheckCircle className="text-green-500 w-5 h-5" />
//               <span className="text-gray-950 text-[0.95rem]">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//           <Button className="w-full bg-white text-black hover:bg-green-600 hover:text-white transition-all duration-300 whitespace-nowrap">
//             WhatsApp Booking
//             <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </a>
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
//         {service.hoverIcon}
//       </div>
//     </div>
//   );

//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
//             <FaShower className="w-4 h-4 animate-bounce" />
//             <span className="font-semibold">Our Packages</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Premium Car Wash Packages in Lucknow
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Choose from quick cleans to luxury-grade detailing — designed for
//             every car type and lifestyle. Quality, convenience, and shine
//             guaranteed.
//           </p>
//         </div>

//         <div className="mb-16">
//           <div className="flex items-center gap-3 mb-8">
//             <div className="p-3 bg-gradient-primary rounded-lg">
//               <FaCarAlt className="w-6 h-6 text-white animate-bounce" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800">
//               Car Washing Packages
//             </h3>
//           </div>
//           <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 scroll-snap-x snap-x scroll-smooth">
//             {carServices.map((service, index) => (
//               <ServiceCard key={index} service={service} />
//             ))}
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
//             <h3 className="text-3xl font-bold mb-4">Mobile App Coming Soon!</h3>
//             <p className="text-xl mb-8 opacity-90">
//               Currently book through WhatsApp. Our mobile app will soon make
//               booking and tracking even easier.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                 <Button className="bg-white text-black hover:bg-green-600 hover:text-white transition-colors" size="xl">
//                   WhatsApp Booking
//                 </Button>
//               </a>
//               <a href="tel:+916394008997">
//                 <Button
//                   variant="outline"
//                   size="xl"
//                   className="bg-white text-secondary flex items-center gap-2">
//                   Call: +91 63940 08997
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { Button } from "@/components/ui/button";
import {
  FaCarAlt,
  FaShower,
  FaShieldAlt,
  FaMotorcycle,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Services = () => {
  const carServices = [
    {
      icon: <FaCarAlt className="text-white w-10 h-10 animate-bounce" />,
      hoverIcon: <FaCarAlt className="text-gray-300 w-24 h-24 opacity-40" />,
      title: "💧 Marvel Wash",
      description:
        "A quick and refreshing clean — perfect for busy city rides. It gives your car a spotless look in no time, without burning a hole in your pocket.",
      features: [
        "Basic interior vacuuming",
        "Exterior foam pressure wash",
        "Gentle dry wipe for a shiny finish",
        "🧼 Windshield Cleaning Tablet",
        "💨 Fresh Car Perfume",
      ],
      price: "₹500 / ₹600 / ₹700",
      gradient: "bg-gradient-primary",
    },
    {
      icon: <FaShower className="text-white w-10 h-10 animate-bounce" />,
      hoverIcon: <FaShower className="text-gray-300 w-24 h-24 opacity-40" />,
      title: "✨ Magic Wash",
      description:
        "Our most-loved package — a complete interior and exterior cleaning that leaves your car feeling brand new. Great for when you want that weekend shine.",
      features: [
        "Deep vacuum for seats, doors, and boot",
        "Footmat and dashboard cleaning",
        "Foam-based exterior wash with tyre polish",
        "Glass cleaning and shining finish",
        "🎁 Complimentary Car Perfume",
        "🧻 Tissue Box",
        "🩰 Cotton Foot Mats",
      ],
      price: "₹1,100 / ₹1,200 / ₹1,300",
      gradient: "bg-gradient-eco",
    },
    {
      icon: <FaShieldAlt className="text-white w-10 h-10 animate-bounce" />,
      hoverIcon: <FaShieldAlt className="text-gray-300 w-24 h-24 opacity-40" />,
      title: "🌟 Aura Wash",
      description:
        "A luxury-grade deep cleaning experience that brings back your car’s original shine. Ideal before long trips or if you want that new-car feel again.",
      features: [
        "Complete interior and roof vacuuming",
        "Dashboard and trims cleaning + polish",
        "Tyre & wheel wash with gloss finish",
        "Exterior foam pressure wash",
        "Glass cleaning and silicon body polish",
        "🧴 Premium Car Perfume",
        "🧻 Tissue Box",
        "🩰 Cotton Foot Mats",
      ],
      price: "₹1,700 / ₹1,800 / ₹1,900",
      gradient: "bg-gradient-primary",
    },
    {
      icon: <FaMotorcycle className="text-white w-10 h-10 animate-bounce" />,
      hoverIcon: (
        <FaMotorcycle className="text-gray-300 w-24 h-24 opacity-40" />
      ),
      title: "🏍 Bike/Scooter Add-On",
      description:
        "A smart add-on for bike and scooter owners! Quick, affordable, and gives your two-wheeler that perfect clean while your car’s getting washed.",
      features: [
        "Complete foam wash & rinse",
        "Seat and alloy cleaning",
        "Glass & headlight wipe-down",
        "✅ Perfect for a quick, spotless finish",
      ],
      price: "₹250 (Add-on)",
      gradient: "bg-gradient-eco",
    },
  ];

  const whatsappLink =
    "https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20service";

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="group relative bg-white rounded-2xl shadow-card hover:shadow-floating transition-all duration-500 overflow-hidden hover:-translate-y-2 min-w-[80%] md:min-w-0 snap-start min-h-[550px]">
      <div className={`${service.gradient} h-28 relative`}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="relative z-10 p-6 flex items-center justify-between">
          <div>{service.icon}</div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800 mb-1 group-hover:text-white transition-colors">
              {service.title}
            </h1>
            <p className="text-base font-semibold text-gray-700 group-hover:text-white/80 transition-colors">
              {service.price}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 relative z-10">
        <p className="text-black mb-6 text-[1rem] leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 w-5 h-5" />
              <span className="text-gray-950 text-[0.95rem]">{feature}</span>
            </li>
          ))}
        </ul>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-white text-black hover:bg-green-600 hover:text-white transition-all duration-300 whitespace-nowrap">
            WhatsApp Booking
            <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
        {service.hoverIcon}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <FaShower className="w-4 h-4 animate-bounce" />
            <span className="font-semibold">Our Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional Car Wash Packages in Lucknow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quick touch-ups to luxury detailing — we’ve got the perfect
            wash for every car and lifestyle. Experience convenience, quality,
            and that showroom shine — right at your doorstep.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-primary rounded-lg">
              <FaCarAlt className="w-6 h-6 text-white animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Car Washing Packages
            </h3>
          </div>
          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 scroll-snap-x snap-x scroll-smooth">
            {carServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Our Mobile App Is On The Way!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              You can book instantly via WhatsApp for now.
              Our mobile app is coming soon — making it even easier to schedule,
              track, and manage your car wash in just one tap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-green-600 hover:text-white transition-colors" size="xl">
                  WhatsApp Booking
                </Button>
              </a>
              <a href="tel:+916394008997">
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white text-secondary flex items-center gap-2">
                  Call: +91 63940 08997
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
