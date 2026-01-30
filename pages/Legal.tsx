
import React from 'react';
import { SITE_NAME, CONTACT_EMAIL } from '../constants';

interface Props {
  type: 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact';
}

const Legal: React.FC<Props> = ({ type }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      body: `
        <p>Your privacy is of critical importance to us. At ${SITE_NAME}, we have a few fundamental principles:</p>
        <ul>
          <li>We are thoughtful about the personal information we ask you to provide.</li>
          <li>We don’t share your personal information with anyone except to comply with the law or protect our rights.</li>
          <li>We don’t store personal information on our servers unless required for the on-going operation of one of our services.</li>
        </ul>
        <h3>Information We Collect</h3>
        <p>Like most website operators, ${SITE_NAME} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.</p>
        <h3>Cookies</h3>
        <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. ${SITE_NAME} uses cookies to help us identify and track visitors, their usage of the website, and their website access preferences.</p>
        <h3>AdSense and Third-Party Advertising</h3>
        <p>Google, as a third-party vendor, uses cookies to serve ads on your site. Google's use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet.</p>
      `
    },
    terms: {
      title: "Terms and Conditions",
      body: `
        <p>By accessing the website at <a href="#">${SITE_NAME}</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        <h3>Use License</h3>
        <p>Permission is granted to temporarily use the materials (information or software) on ${SITE_NAME}'s website for personal, non-commercial transitory viewing only.</p>
        <h3>Disclaimer of Accuracy</h3>
        <p>The materials on ${SITE_NAME}'s website are provided on an 'as is' basis. While we strive for 100% chronological accuracy, we make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
      `
    },
    disclaimer: {
      title: "Disclaimer",
      body: `
        <p>The information provided by ${SITE_NAME} on this website is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
        <h3>Professional Advice</h3>
        <p>This site cannot and does not contain legal, medical, or financial advice. The chronological information is provided for entertainment and general informative purposes only. Before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>
      `
    },
    about: {
      title: "About AgeMeter",
      body: `
        <p>AgeMeter was founded with a singular vision: to provide the most accurate and insightful chronological engine available on the web. We believe that understanding time is fundamental to understanding our lives.</p>
        <p>Our team consists of developers, data scientists, and history enthusiasts who have spent years perfecting the algorithms that power our calculator. We use advanced astronomical libraries to ensure that every leap year, every time zone, and every calendar reform is accounted for.</p>
        <h3>Our Mission</h3>
        <p>To empower people with data about their own timelines, fostering a deeper appreciation for the journey of life through precision science and educational storytelling.</p>
      `
    },
    contact: {
      title: "Contact Us",
      body: `
        <p>Have a question or feedback? We'd love to hear from you. Our support team is available Monday through Friday to assist with any inquiries regarding our tools or content.</p>
        <div class="my-8 p-6 bg-slate-100 rounded-xl border border-slate-200">
          <p class="font-bold text-slate-900 mb-2">Email Support:</p>
          <a href="mailto:${CONTACT_EMAIL}" class="text-indigo-600 text-lg font-medium">${CONTACT_EMAIL}</a>
        </div>
        <p>If you have found a discrepancy in a calculation or have a suggestion for a new feature, please include "Feature Request" or "Bug Report" in your subject line.</p>
      `
    }
  };

  const current = content[type];

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-bold font-serif text-slate-900 mb-12 border-b border-slate-100 pb-8">{current.title}</h1>
        <article className="prose prose-slate prose-lg lg:prose-xl max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600">
          <div dangerouslySetInnerHTML={{ __html: current.body }} />
          {type === 'contact' && (
            <form className="mt-12 space-y-6 max-w-xl bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none h-32" placeholder="How can we help?"></textarea>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Send Message</button>
            </form>
          )}
        </article>
      </div>
    </main>
  );
};

export default Legal;
