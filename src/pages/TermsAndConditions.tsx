import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header links={[
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ]} />

      <main className="flex-grow py-16 px-6 md:px-20">
        <div className="max-w-4xl mt-[80px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Last updated: <span className="font-medium">July 19, 2025</span>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Welcome to{" "}
            <span className="font-bold text-primary text-xl tracking-wide">
              WønderShïnë
            </span>
            . By accessing or using our website and services, you agree to be
            bound by the following terms and conditions. Please read them
            carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            1. Use of Services
          </h2>
          <p className="text-gray-700 mb-4">
            Our services are available only to individuals who are at least 18
            years old. By using our services, you confirm that you meet this
            requirement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            2. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Provide accurate and complete information during booking or
              registration.
            </li>
            <li>
              Refrain from using our platform for unlawful or abusive
              activities.
            </li>
            <li>
              Respect our staff and service guidelines during visits or
              appointments.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            3. Payment & Refunds
          </h2>
          <p className="text-gray-700 mb-4">
            All services must be paid in full before or at the time of service.
            Refunds may be issued in case of service failures or cancellations
            in accordance with our refund policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-4">
            All content, logos, branding, and media on this website are the
            intellectual property of{" "}
            <span className="font-semibold text-primary">WønderShinë</span> and
            may not be reused without written permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            5. Service Modifications
          </h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify or discontinue services at any time
            without notice. Any changes will be reflected on the website or app.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            WønderShinë will not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services or
            website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            7. Changes to These Terms
          </h2>
          <p className="text-gray-700 mb-4">
            We may update these terms from time to time. Continued use of our
            services constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-700">
            For any questions regarding these terms, contact us at{" "}
            <a
              href="mailto:support@wondershine.in"
              className="text-primary hover:underline"
            >
              support@wondershine.in
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
