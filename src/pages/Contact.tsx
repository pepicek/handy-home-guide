import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-poster font-bold mb-6 text-anthracite">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Have questions? We're here to help. Reach out to our team and we'll 
                get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-poster font-bold text-anthracite mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-anthracite/70">
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-anthracite/70">
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-anthracite/70">
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-anthracite/70">
                        Subject
                      </label>
                      <Input placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-anthracite/70">
                        Message
                      </label>
                      <Textarea placeholder="Type your message here..." rows={5} />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-anthracite">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-poster font-bold text-anthracite mb-6">
                    Other Ways to Connect
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-yellow-600" />
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="text-sm text-anthracite/70">support@yellopago.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-yellow-600" />
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-anthracite/70">1-800-YELLO-PRO</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MessageSquare className="w-6 h-6 text-yellow-600" />
                      <div>
                        <h3 className="font-semibold mb-1">Live Chat</h3>
                        <p className="text-anthracite/70">
                          Available Monday to Friday, 9am - 5pm EST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Office Location</h3>
                    <p className="text-anthracite/70">
                      123 Tech Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
