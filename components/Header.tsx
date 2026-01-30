
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors">
            A
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">AgeMeter</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#/" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
          <a href="#/calculator" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Calculator</a>
          <a href="#/blog" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Blog</a>
          <a href="#/about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About</a>
          <a href="#/calculator" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
            Start Calculating
          </a>
        </nav>
        <button className="md:hidden text-slate-800">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
