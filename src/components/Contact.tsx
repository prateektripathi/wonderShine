// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   MessageSquare,
//   Calendar,
//   CheckCircle,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const scriptURL = "https://script.google.com/macros/s/AKfycby4vAm48Rmi9xnlOMcDK6mUWg6r8lmsK0PzFikqsY6VePMB7zTS92gtaumjkUoenYjx/exec";

//     const newEntry = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       service: formData.service,
//       message: formData.message,
//     };

//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "text/plain;charset=utf-8",
//         },
//         body: JSON.stringify(newEntry),
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           service: "",
//           message: "",
//         });
//         setTimeout(() => setIsSubmitted(false), 3000);
//       } else {
//         alert("Submission failed. Try again later.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong!");
//     }
//   };


//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const whatsappLink =
//     "https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20or%20bike%20wash%20service";

//   const contactInfo = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "Call Us",
//       details: ["+91 63940 08997", ],
//       action: "Call Now",
//       href: "tel:+916394008997",
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email Us",
//       details: ["info@wondershine.com", "support@wondersine.com"],
//       action: "Send Email",
//       href: "mailto:info@wondershine.com",
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: "Serviceable Areas ",
//       details: ["Gomti Nagar, Hazratganj", "Indira Nagar, Alambagh & More"],
//       action: "Check Coverage",
//       href: "#coverage",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "Working Hours",
//       details: ["Mon-Sun: 7:00 AM - 8:00 PM", "WhatsApp: 24/7 Available"],
//       action: "WhatsApp Booking",
//       href: whatsappLink,
//     },
//   ];

//   const slideFromBottom = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
//   const slideFromLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } };
//   const slideFromRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } };

//   return (
//     <section id="contact" className="py-20 bg-gray-50 overflow-x-hidden">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="text-center mb-16"
//           variants={slideFromBottom}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
//             <MessageSquare className="w-4 h-4" />
//             <span className="font-semibold">Get In Touch</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Contact us today for a free quote or to schedule your service. We're here to answer all your questions.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Left Column */}
//           <motion.div
//             variants={slideFromLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <div className="bg-white rounded-3xl p-8 py-20 shadow-card">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//                 <Calendar className="w-7 h-7 text-primary" />
//                 For Enquiry
//               </h3>

//               {isSubmitted ? (
//                 <div className="text-center py-12">
//                   <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
//                     <CheckCircle className="w-8 h-8 text-white" />
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
//                   <p className="text-gray-600">We'll get back to you within 24 hours.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                         placeholder="Enter your full name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                         placeholder="Enter your email"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                         placeholder="Enter your phone number"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-medium mb-2">Service Type *</label>
//                       <select
//                         name="service"
//                         required
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                       >
//                         <option value="">Select a service</option>
//                         <option value="marvel-wash">💧 Marvel Wash – Quick Clean & Refresh</option>
//                         <option value="magic-wash">✨ Magic Wash – Interior–Exterior Revival</option>
//                         <option value="aura-wash">🌟 Aura Wash – Luxury Deep Detailing</option>
//                         <option value="bike-addon">🏍 Bike/Scooter Add-On – Quick Combo Wash Car + Bike</option>

//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2">Message</label>
//                     <textarea
//                       name="message"
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
//                       placeholder="Tell us about your specific needs..."
//                     ></textarea>
//                   </div>

//                   <Button type="submit" variant="hero" size="lg" className="w-full">
//                     Send Message
//                     <Send className="w-5 h-5" />
//                   </Button>
//                 </form>
//               )}
//             </div>

//             <div className="bg-gradient-eco rounded-3xl p-8 mt-8 text-white text-center">
//               <h4 className="text-2xl font-bold mb-4">Need Quick Service?</h4>
//               <p className="text-lg opacity-90 mb-6">
//                 WhatsApp us for instant booking or call for same-day service across Lucknow.
//               </p>

//               <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
//                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                   <Button variant="glass" size="lg" className="hover:bg-green-600 hover:text-white flex items-center gap-2">
//                     <FaWhatsapp className="w-5 h-5" />
//                     +91 63940 08997
//                   </Button>
//                 </a>

//                 <a href="tel:+916394008997">
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="bg-white text-secondary flex items-center gap-2"
//                   >
//                     Same Day Service
//                   </Button>
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             className="space-y-10"
//             variants={slideFromRight}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-6 shadow-card hover:shadow-floating transition-all duration-300 group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
//                     {info.icon}
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h4>
//                     <div className="space-y-1 mb-4">
//                       {info.details.map((detail, idx) => (
//                         <p key={idx} className="text-gray-600">{detail}</p>
//                       ))}
//                     </div>
//                     <a href={info.href} target="_blank" rel="noopener noreferrer">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="group-hover:bg-primary group-hover:text-white transition-colors"
//                       >
//                         {info.action}
//                       </Button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

// ✅ Your deployed Google Apps Script URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbynqMBtf4L8gkbJQgX1gckQt4_rtGOprnBT0A0HQws1Hkxts4E4RJ7WYP0KXCf5T8Yd/exec"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple form validation
    if (!formData.name || !formData.email || !formData.service) {
      setError("Please fill all required fields.");
      return;
    }

    const newEntry = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      setIsLoading(true);
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      const result = await response.json();

      if (response.ok && result.result === "success") {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong. Check your connection or Google Sheet setup.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappLink =
    "https://wa.me/916394008997?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20or%20bike%20wash%20service";

  const slideFromBottom = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const slideFromLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } };

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={slideFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a free quote or to schedule your service. We're here to answer all your questions.
          </p>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 py-20 shadow-card max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Calendar className="w-7 h-7 text-primary" />
            For Enquiry
          </h3>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-center text-sm text-red-600 bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Type *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="marvel-wash">💧 Marvel Wash – Quick Clean & Refresh</option>
                    <option value="magic-wash">✨ Magic Wash – Interior–Exterior Revival</option>
                    <option value="aura-wash">🌟 Aura Wash – Luxury Deep Detailing</option>
                    <option value="bike-addon">🏍 Bike/Scooter Add-On – Quick Combo Wash Car + Bike</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="Tell us about your specific needs..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
