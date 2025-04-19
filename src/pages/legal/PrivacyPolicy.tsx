
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-yellow max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name, email address, and contact information</li>
              <li>Profile information and preferences</li>
              <li>Payment information</li>
              <li>Communication with other users</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process transactions</li>
              <li>Send notifications and updates</li>
              <li>Improve our services</li>
              <li>Respond to your requests</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We share information only:
            </p>
            <ul>
              <li>With service providers as necessary</li>
              <li>To comply with legal obligations</li>
              <li>With your consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to improve user experience and collect usage data.
              You can control cookie settings through your browser.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13.
              We do not knowingly collect information from children under 13.
            </p>

            <h2>8. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy periodically.
              We will notify you of any material changes via email or through the platform.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
