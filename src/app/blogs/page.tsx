import type { Metadata } from "next";
import { HeroVideoSection } from "@/components/layout/HeroVideoSection";
import { SectionHeader } from "@/components/shared";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { blogs } from "@/data/blogs";
import { Card } from "@/components/shared";

export const metadata: Metadata = {
  title: "HVAC Insights & Engineering Articles | AirOra",
  description:
    "Read expert HVAC guides, industry trends, and technical insights for facility managers and engineers optimizing building climate systems.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <HeroVideoSection
        badge="Technical Insights"
        title="HVAC Engineering Journal"
        subtitle="Expert analysis, industry trends, and technical guides for optimizing building climate systems."
        backgroundImage="/images/5.webp"
      />

      <main className="container mx-auto max-w-7xl py-20 px-6">
        <SectionHeader
          badge="Knowledge Hub"
          heading="Latest Engineering Articles"
          description="In-depth resources for facility managers and engineers focused on thermal comfort and energy efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blogs/${blog.slug}`}
              className="block h-full"
            >
              <Card
                variant="hover-lift"
                className="flex flex-col h-full hover:border-[#1CB9F6]/30 p-0 overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-[#1CB9F6]/10 text-[#1CB9F6] px-2 py-1 rounded">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1C3F] mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 mt-auto w-full">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
