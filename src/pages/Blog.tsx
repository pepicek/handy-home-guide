
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Home Maintenance Tips for Spring",
    excerpt: "Get your home ready for spring with these essential maintenance tips that every homeowner should know.",
    author: "Sarah Johnson",
    date: "April 18, 2025",
    category: "Home Maintenance",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    id: 2,
    title: "How to Choose the Right Service Professional",
    excerpt: "Learn the key factors to consider when hiring a service professional for your home improvement projects.",
    author: "Michael Chen",
    date: "April 15, 2025",
    category: "Hiring Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 3,
    title: "The Future of Home Services in 2025",
    excerpt: "Explore the latest trends and technologies shaping the future of home services.",
    author: "Emily Rodriguez",
    date: "April 12, 2025",
    category: "Industry Insights",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-poster font-bold mb-6 text-anthracite">
                YelloPago Blog
              </h1>
              <p className="text-lg md:text-xl text-anthracite/80 mb-8">
                Insights, tips, and trends in home services and maintenance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3" variant="secondary">
                        {post.category}
                      </Badge>
                      <h2 className="text-xl font-semibold text-anthracite mb-3 hover:text-yellow-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-anthracite/70 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-anthracite/60">
                        <span>{post.author}</span>
                        <div className="flex items-center gap-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
