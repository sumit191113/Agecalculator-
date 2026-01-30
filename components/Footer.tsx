
import React from 'react';
import { SITE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white font-bold">A</div>
              <span className="text-2xl font-bold text-white tracking-tight">{SITE_NAME}</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering users with precision chronological data and deep educational insights into the science of time and aging.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Tools</h4>
            <ul className="space-y-4">
              <li><a href="#/calculator" className="hover:text-indigo-400 transition-colors">Age Calculator</a></li>
              <li><a href="#/calculator" className="hover:text-indigo-400 transition-colors">Date Difference</a></li>
              <li><a href="#/calculator" className="hover:text-indigo-400 transition-colors">Time Tracker</a></li>
              <li><a href="#/calculator" className="hover:text-indigo-400 transition-colors">Birthday Countdown</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#/blog" className="hover:text-indigo-400 transition-colors">Educational Blog</a></li>
              <li><a href="#/about" className="hover:text-indigo-400 transition-colors">About Our Methods</a></li>
              <li><a href="#/contact" className="hover:text-indigo-400 transition-colors">Support Center</a></li>
              <li><a href="#/" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#/disclaimer" className="hover:text-indigo-400 transition-colors">Disclaimer</a></li>
              <li><a href="#/contact" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Precision guaranteed.
          </p>
          <div className="flex gap-6">
            <span className="text-sm px-3 py-1 bg-slate-800 rounded-full border border-slate-700">v1.2.4</span>
            <span className="text-sm px-3 py-1 bg-indigo-900/30 text-indigo-400 rounded-full border border-indigo-500/30">AdSense Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
