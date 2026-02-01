import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogs } from '@/data/blogs';
import { Button } from '@/components/ui/button';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically generate routes at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: `${blog.title} | AirOra Insights`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20 pt-24 lg:pt-28">
      {/* Article Header */}
      <div className="container mx-auto max-w-4xl px-6 lg:px-8 mb-12">
        <Link href="/blogs" className="inline-block mb-8">
          <Button variant="ghost" className="text-gray-500 hover:text-[#1CB9F6] pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
        </Link>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#1CB9F6] mb-6 font-medium">
          <span className="bg-[#1CB9F6]/10 px-3 py-1 rounded-full flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {blog.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <Calendar className="w-4 h-4" />
            {blog.date}
          </span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-[#0B1C3F] mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-3 border-b border-gray-100 pb-8">
          <div className="w-10 h-10 bg-[#0B1C3F] rounded-full flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="text-gray-900 font-medium">Written by {blog.author}</div>
            <div className="text-gray-500 text-sm">Senior HVAC Engineer</div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto max-w-5xl px-6 lg:px-8 mb-12">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto max-w-3xl px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-[#0B1C3F] prose-a:text-[#1CB9F6] prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      </div>
    </article>
  );
}
