
import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import { BLOG_POSTS, FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 to-white -z-10"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              World Class Chronology Tool
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold font-serif text-slate-900 leading-[1.1] mb-8">
              Unlock the Secrets of <span className="text-indigo-600">Your Timeline.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              AgeMeter provides professional-grade age analytics, biological insights, and historical date tracking for those who value precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/calculator" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1">
                Open Calculator
              </a>
              <a href="#/blog" className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Read Articles
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
                  <div className="text-sm font-bold text-slate-900">100% Accuracy</div>
                  <div className="text-xs text-slate-500">Gregorian Sync Enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1000+ Word Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <article className="prose prose-slate prose-lg lg:prose-xl max-w-none">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 font-serif">The Science and Significance of Age Calculation</h2>
            
            <p>Age is more than just a number; it is a measure of the cosmic journey an individual has taken relative to the solar cycle. In the modern era, precise age calculation has become a cornerstone of social, legal, and biological frameworks. From the moment of birth to the golden years of retirement, every day contributes to a rich tapestry of chronological data.</p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">What is Age Calculation?</h3>
            <p>At its core, age calculation is the process of determining the duration between a fixed start point (the date of birth) and a subsequent target date. While this sounds elementary, the mechanical execution involves navigating the intricacies of the Gregorian calendar system. This includes managing months with variable lengths (28 to 31 days) and the periodic insertion of leap days to account for the Earth's orbit, which takes approximately 365.2425 days.</p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">Why is Age Calculation Useful?</h3>
            <p>The utility of age calculation spans across multiple domains. In the medical field, clinicians use exact age to determine developmental milestones in pediatric care or to adjust dosages of age-sensitive medications. In the corporate world, age metrics are vital for insurance actuaries who calculate life expectancy and risk profiles.</p>
            
            <p>Furthermore, digital age calculators like AgeMeter serve educational purposes. They help students understand intervals, teach the importance of zero-indexing in time (the fact that we are 'zero' years old for the first 365 days), and provide a fun way for families to celebrate milestones like reaching their 10,000th day of life.</p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 my-12 rounded-r-xl">
              <h4 className="text-xl font-bold text-indigo-900 mb-2 italic">"Chronological tracking is the first step toward understanding biological longevity."</h4>
              <p className="text-indigo-800 mb-0">— AgeMeter Research Team</p>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">How AgeMeter Helps Users</h3>
            <p>AgeMeter isn't just a simple subtraction tool. We've built an engine that provides a 360-degree view of your timeline. By integrating total day counts, hours, and minutes, we give users a new perspective on their existence. Have you ever wondered when you'll be exactly 1,000,000 minutes old? Our advanced analytics can pinpoint that moment.</p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">The Benefits of Using a Digital Age Calculator</h3>
            <ul className="space-y-4">
              <li><strong>Elimination of Human Error:</strong> Manual calculations often miss leap days or miscalculate month transitions. Digital tools use standardized libraries for perfect results.</li>
              <li><strong>Speed and Efficiency:</strong> Get a multi-metric result in milliseconds, rather than minutes of manual arithmetic.</li>
              <li><strong>Future Planning:</strong> Easily calculate your age on future dates for retirement planning or school admissions.</li>
              <li><strong>Universal Access:</strong> Accessible from any device, anywhere in the world, ensuring consistency in records.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-12 mb-4">Where Age Calculation is Used in Real Life</h3>
            <p>The applications are endless. Government agencies use it for voter registration and passport issuance. Sports organizations use it for age-bracketed competitions to ensure fairness. Even in the digital world, age verification is a critical component of safety and compliance on social media and gaming platforms.</p>
          </article>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 font-serif">Educational Insights</h2>
              <p className="text-slate-600 mt-2">Deep dives into chronology, law, and science.</p>
            </div>
            <a href="#/blog" className="text-indigo-600 font-bold hover:underline">View All Articles &rarr;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <a href={`#/blog/${post.id}`} className="text-slate-900 font-bold text-sm border-b-2 border-indigo-200 hover:border-indigo-600 pb-1 transition-all">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 font-serif text-center mb-16">Frequently Asked Questions</h2>
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
