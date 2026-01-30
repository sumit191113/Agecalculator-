
import React from 'react';
import AgeCalculator from '../components/AgeCalculator';

const ToolPage: React.FC = () => {
  return (
    <main className="pt-24 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Pro Edition</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-900 mb-6 tracking-tight">Advanced Chrono Metrics</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Experience the most fluid and accurate age reporting system. Optimized for precision, speed, and cross-device usage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-24">
          <section>
            <AgeCalculator />
          </section>

          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 prose prose-slate prose-lg lg:prose-xl max-w-none">
            <h2 className="font-serif text-indigo-900 border-l-4 border-indigo-600 pl-6 mb-8">Mastering the Age Calculation Tool</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose mb-12">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-lg font-bold text-slate-800">Select Date of Birth</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Our split-selector ensures 100% accuracy and is far easier to use on mobile than standard calendar pickers which often hide year selection.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-lg font-bold text-slate-800">Define Target Date</h4>
                <p className="text-slate-600 text-sm leading-relaxed">By default set to today, but you can look back into history or project your age into the far future for retirement planning.</p>
              </div>
            </div>

            <p>At <strong>AgeMeter</strong>, we've optimized the interface to be "Thumb-Friendly." Whether you are calculating the age of a newborn or checking eligibility for a historical record, our three-pillar selection process avoids the accidental taps and glitches common with native browser inputs.</p>
            
            <h3 className="mt-12 font-serif text-slate-900">Why Manual Methods Fail</h3>
            <p>Manual age calculation is fraught with human error. The most common mistake involves the <strong>Month Carry-Over</strong>. When a birth day is greater than the target day, one must "borrow" days from the preceding month. However, since months vary from 28 to 31 days, the borrowing logic is dynamic. Our engine handles these algorithmic complexities in milliseconds.</p>

            <div className="my-16 p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="text-5xl">💡</div>
              <div>
                <h4 className="text-xl font-bold text-indigo-900 mb-2">Pro Tip: Birthday Accuracy</h4>
                <p className="text-indigo-800 text-sm leading-relaxed m-0">In certain legal jurisdictions, you technically turn a year older at the *first minute* of your birthday, while in others (like Common Law), it's the day before. Our calculator follows the most widely accepted International Standards (ISO 8601).</p>
              </div>
            </div>

            <h3 className="mt-12 font-serif text-slate-900">Historical & Scientific Utility</h3>
            <p>Beyond personal curiosity, this tool serves professional needs in genealogy and scientific data normalization. Researchers often need to calculate "Age at Event" for thousands of data points. By providing a clean, reliable, and mobile-ready interface, we allow professionals to perform these checks in the field without access to specialized desktop software.</p>
            
            <p>We invite you to explore the other sections of our site to learn about the <strong>Mathematics of Time</strong> or the <strong>Legal Importance of Age</strong> in government documentation. AgeMeter is not just a tool; it is a repository of chronological knowledge.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ToolPage;
