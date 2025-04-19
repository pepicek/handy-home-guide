
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-yellow max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device
              when you visit our website. They are widely used to make websites work more
              efficiently and provide information to website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul>
              <li>Essential cookies: Required for basic website functionality</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Analytics cookies: Help us understand how visitors use our site</li>
              <li>Marketing cookies: Track visitors across websites for marketing purposes</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly and cannot be
              switched off in our systems.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure
              and improve the performance of our site.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences.
              However, limiting cookies may impact your experience of the site.
            </p>

            <h2>5. Third-Party Cookies</h2>
            <p>
              Some of our pages display content from external providers, such as YouTube,
              Facebook and Twitter. To view this content, you first have to accept their
              specific terms and conditions.
            </p>

            <h2>6. Updates to Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at
              privacy@yellopago.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
