
import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import NativeAd from '../components/NativeAd';
import { BLOG_POSTS, FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 to-white -z-10"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              #1 Accurate Age Calculator
            </span>
            <h1 id="hero-heading" className="text-5xl lg:text-7xl font-bold font-serif text-slate-900 leading-[1.1] mb-8">
              Calculate Your Exact <span className="text-indigo-600">Age by DOB.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Age Track is a free, professional-grade online tool to calculate your precise age from date of birth in years, months, days, minutes, and seconds.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/calculator" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1">
                Calculate Age Now
              </a>
              <a href="#/blog" className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Read SEO Guide
              </a>
            </div>
          </div>
          <div className="relative">
            <AgeCalculator />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Verified Precision</div>
                  <div className="text-xs text-slate-500">Gregorian Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Section 1 */}
      <div className="container mx-auto px-6">
        <NativeAd />
      </div>

      {/* Structured SEO Content Section */}
      <section className="py-24 bg-white" aria-labelledby="main-content-heading">
        <div className="container mx-auto px-6 max-w-4xl">
          <article className="prose prose-slate prose-lg lg:prose-xl max-w-none">
            <h2 id="main-content-heading" className="text-4xl font-bold text-slate-900 mb-8 font-serif">Why Use an Online Age Calculator by Date of Birth?</h2>
            
            <p>Determining your <strong>exact age</strong> manually can be challenging due to varying month lengths and the impact of leap years. Whether you are a student filling out an application, a parent tracking developmental milestones, or a professional requiring precise chronological data for legal documents, our <strong>DOB age calculator</strong> provides an instant and error-free solution.</p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">Precision You Can Trust</h3>
            <p>At Age Track, we use high-fidelity algorithms to ensure your age calculation is 100% accurate. We account for the specific Gregorian calendar rules, ensuring that if you were born on a leap day or at a specific month-end transition, your result reflects reality.</p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">Who Is Age Track For?</h3>
            <p>Our <strong>online age calculator</strong> is designed for a diverse set of users:</p>
            <ul>
              <li><strong>Students:</strong> Quickly find your age for university admissions and scholarship forms.</li>
              <li><strong>Parents:</strong> Track your child's age in months and days to match pediatric growth charts.</li>
              <li><strong>Professionals:</strong> Calculate tenure, retirement eligibility, and project durations with high precision.</li>
              <li><strong>General Users:</strong> Celebrate milestones like reaching 1 billion seconds or 10,000 days of life.</li>
            </ul>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 my-12 rounded-r-xl">
              <h4 className="text-xl font-bold text-indigo-900 mb-2 italic">"Accurate time tracking is the foundation of modern longevity science."</h4>
              <p className="text-indigo-800 mb-0">— The Age Track Development Team</p>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">How to Calculate Age from Date of Birth</h3>
            <p>Using our tool is simple. Just select your birth day, month, and year, and click "Generate Report." Our system immediately outputs your age in several metrics, including total days, minutes, and a real-time ticking second counter.</p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">Key Benefits of Age Track</h3>
            <ul className="space-y-4">
              <li><strong>Total Privacy:</strong> Calculations happen in your browser. We never store or transmit your birth date.</li>
              <li><strong>Real-time Tracking:</strong> Watch your age increment every second in real-time.</li>
              <li><strong>Multi-Metric Results:</strong> See your age expressed in years, months, days, hours, and minutes simultaneously.</li>
              <li><strong>Mobile Optimized:</strong> A "thumb-friendly" UI designed specifically for fast calculations on the go.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200" aria-labelledby="insights-heading">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="insights-heading" className="text-4xl font-bold text-slate-900 font-serif">Educational Insights</h2>
              <p className="text-slate-600 mt-2">Learn about the mathematics of time and legal age requirements.</p>
            </div>
            <a href="#/blog" className="text-indigo-600 font-bold hover:underline">All Articles &rarr;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <a href={`#/blog/${post.id}`} className="text-slate-900 font-bold text-sm border-b-2 border-indigo-200 hover:border-indigo-600 pb-1 transition-all">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="faq-heading" className="text-4xl font-bold text-slate-900 font-serif text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
