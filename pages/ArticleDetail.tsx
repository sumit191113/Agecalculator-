
import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import NativeAd from '../components/NativeAd';

interface Props {
  id: string;
}

const ArticleDetail: React.FC<Props> = ({ id }) => {
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Article Not Found</h1>
        <a href="#/blog" className="text-indigo-600 mt-4 inline-block font-bold">Back to Blog</a>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-24">
      <div className="w-full h-[60vh] relative mb-16">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full p-12 container mx-auto px-6">
          <div className="max-w-4xl">
             <div className="inline-block px-4 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/80 font-medium">
              <span>{post.author}</span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <article className="prose prose-slate prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Content Padding for AdSense (Simulated) */}
            <div className="mt-20 p-12 bg-indigo-50 rounded-3xl border border-indigo-100 text-center">
              <h4 className="text-2xl font-bold text-indigo-900 mb-4">Precision Age Calculations at Your Fingertips</h4>
              <p className="text-indigo-800 mb-8 max-w-xl mx-auto leading-relaxed">
                Need to know exactly how many days have passed since a specific event? Use our world-class engine for instant results.
              </p>
              <a href="#/calculator" className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
                Launch Age Tracker Tool
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Latest Insights</h3>
                <div className="space-y-8">
                  {BLOG_POSTS.filter(p => p.id !== id).slice(0, 3).map(other => (
                    <a key={other.id} href={`#/blog/${other.id}`} className="group block">
                      <div className="text-xs font-bold text-indigo-600 uppercase mb-2">{other.category}</div>
                      <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">{other.title}</h4>
                    </a>
                  ))}
                </div>
              </div>

              {/* Sidebar Native Ad */}
              <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <NativeAd />
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-200">
                <h3 className="text-2xl font-bold font-serif mb-4">Stay Accurate</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  Join our newsletter for weekly insights into longevity, chronological science, and productivity hacks.
                </p>
                <div className="space-y-4">
                  <input type="email" placeholder="email@example.com" className="w-full bg-slate-800 border-none px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-white text-sm" />
                  <button className="w-full bg-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-all">Subscribe</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;
