
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ToolPage from './pages/ToolPage';
import ArticleDetail from './pages/ArticleDetail';
import Legal from './pages/Legal';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Article Wrapper to extract ID from URL
const ArticleWrapper = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop() || '';
  return <ArticleDetail id={id} />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<ToolPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleWrapper />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
            <Route path="/about" element={<Legal type="about" />} />
            <Route path="/contact" element={<Legal type="contact" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
