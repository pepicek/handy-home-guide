
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

// Import the blog posts data from a shared location
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Home Maintenance Tips for Spring",
    excerpt: "Get your home ready for spring with these essential maintenance tips that every homeowner should know.",
    author: "Sarah Johnson",
    date: "April 18, 2025",
    category: "Home Maintenance",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    content: (
      <>
        <p className="mb-4">
          Spring is the perfect time to assess your home's condition after winter and prepare for the warmer months ahead. Regular maintenance not only preserves your home's value but also prevents costly repairs down the line.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Clean or Replace HVAC Filters</h2>
        <p className="mb-4">
          After heavy use during winter, your HVAC filters need attention. Clean or replace them to ensure optimal air quality and system efficiency as temperatures rise.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Inspect Your Roof</h2>
        <p className="mb-4">
          Check for damaged, loose, or missing shingles that may have occurred during winter storms. Address any issues promptly to prevent leaks during spring rains.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Clean Gutters and Downspouts</h2>
        <p className="mb-4">
          Remove debris that accumulated during fall and winter to ensure proper drainage. Clogged gutters can cause water damage to your roof, siding, and foundation.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Check for Water Damage</h2>
        <p className="mb-4">
          Inspect ceilings, walls, and basements for water stains or mold that might indicate leaks. Early detection can prevent extensive damage and costly repairs.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Service Your Lawn Equipment</h2>
        <p className="mb-4">
          Before the growing season begins, clean, oil, and sharpen lawn mowers and garden tools. Check that outdoor power equipment starts properly and functions safely.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "How to Choose the Right Service Professional",
    excerpt: "Learn the key factors to consider when hiring a service professional for your home improvement projects.",
    author: "Michael Chen",
    date: "April 15, 2025",
    category: "Hiring Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    content: (
      <>
        <p className="mb-4">
          Hiring the right service professional can be the difference between a smooth, successful project and a stressful, expensive disaster. Here's how to make the best choice for your home improvement needs.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Verify Credentials and Insurance</h2>
        <p className="mb-4">
          Always check that professionals have the appropriate licenses for their trade in your area. Additionally, ensure they carry liability insurance and worker's compensation to protect you from potential liability.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Review Past Work and References</h2>
        <p className="mb-4">
          Ask for a portfolio of similar projects and contact references. An established professional should readily provide examples of their work and satisfied customers who can vouch for their quality.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Get Multiple Detailed Quotes</h2>
        <p className="mb-4">
          Don't settle for the first estimate. Obtain at least three detailed quotes that break down materials, labor, and other costs. This helps you understand the fair market rate and identify any outliers.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Evaluate Communication Style</h2>
        <p className="mb-4">
          Pay attention to how promptly and clearly they respond to your inquiries. Good communication is crucial for project success, especially when unexpected issues arise during the work.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "The Future of Home Services in 2025",
    excerpt: "Explore the latest trends and technologies shaping the future of home services.",
    author: "Emily Rodriguez",
    date: "April 12, 2025",
    category: "Industry Insights",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    content: (
      <>
        <p className="mb-4">
          The home services industry is undergoing rapid transformation, driven by technological innovation, changing consumer expectations, and new business models. Here's what to expect in 2025 and beyond.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">AI-Powered Diagnostics</h2>
        <p className="mb-4">
          Artificial intelligence is revolutionizing how service issues are diagnosed. Smart home systems can now detect problems before they become serious, automatically scheduling maintenance and providing technicians with detailed information before they arrive.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Subscription-Based Maintenance</h2>
        <p className="mb-4">
          The subscription economy has reached home services, with companies offering monthly plans that cover regular maintenance and priority service for repairs. This model provides predictable costs for homeowners and steady revenue for service providers.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Augmented Reality Assistance</h2>
        <p className="mb-4">
          AR technology now enables remote professionals to guide homeowners through simple repairs and diagnostics using smartphone cameras. This reduces service calls for minor issues and empowers homeowners with new skills.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Eco-Friendly Solutions</h2>
        <p className="mb-4">
          Sustainability has moved from a nice-to-have to a requirement, with service providers offering greener alternatives for everything from HVAC systems to cleaning products, appealing to environmentally conscious consumers.
        </p>
      </>
    )
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl font-bold text-anthracite">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>By {post.author}</span>
            </div>
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
