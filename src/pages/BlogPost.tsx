
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

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
