import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Last updated: <span className="font-medium">July 19, 2025</span>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            At{" "}
            <span className="font-bold text-primary text-xl tracking-wide">
              WønderShinë
            </span>
            , we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you interact with our website, services, or mobile platforms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Personal identification information (Name, phone number, email
              address, etc.)
            </li>
            <li>Device and usage information (IP address, browser type, etc.)</li>
            <li>
              Location data (only if you provide access for services like
              geolocation-based booking)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and maintain our services</li>
            <li>
              To improve your experience with{" "}
              <span className="font-semibold text-primary">WønderShinë</span>
            </li>
            <li>To communicate offers, updates, and support messages</li>
            <li>To ensure legal compliance and prevent misuse</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            3. Data Protection & Security
          </h2>
          <p className="text-gray-700 mb-4">
            We use industry-standard encryption, authentication, and security
            measures to protect your personal data. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 mb-4">
            We may use third-party tools such as payment gateways and analytics
            providers. These services may collect information as governed by
            their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            5. Your Rights
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access, update, or delete your personal data</li>
            <li>Opt out of promotional emails or messages</li>
            <li>Request data portability or restrictions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We may occasionally update this policy. Any changes will be
            reflected here, with updated revision dates.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            7. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have questions or concerns about this privacy policy, please
            contact us at{" "}
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

export default PrivacyPolicy;
