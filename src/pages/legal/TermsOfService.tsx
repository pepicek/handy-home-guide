
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-yellow max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using YelloPago's services, you agree to be bound by these Terms of Service.
              If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              YelloPago provides a platform connecting homeowners with service professionals. We do not 
              provide the services directly but facilitate connections between users and service providers.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information.
              You are responsible for maintaining the security of your account and password.
            </p>

            <h2>4. Service Provider Terms</h2>
            <p>
              Service providers must maintain required licenses, insurance, and certifications.
              They are responsible for the quality of their work and maintaining professional standards.
            </p>

            <h2>5. Payments and Fees</h2>
            <p>
              We charge service fees for facilitating connections and transactions.
              All fees are clearly displayed before any transaction is completed.
            </p>

            <h2>6. Liability Limitations</h2>
            <p>
              YelloPago is not responsible for the quality of work performed by service providers.
              We provide the platform but do not guarantee specific results.
            </p>

            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately, without prior notice,
              for conduct that we believe violates these Terms or is harmful to other users.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time.
              We will notify users of any material changes via email or through the platform.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of the State of California,
              without regard to its conflict of law provisions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
