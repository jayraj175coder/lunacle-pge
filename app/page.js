"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Experiences from '../components/Experiences';
import Recommended from '../components/Recommended';
import Gallery from '../components/Gallery';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="flex min-h-screen">
      {/* Left Half: Visible on large screens */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-900"></div>

      {/* Right Half: Contains content */}
      <div className="w-full lg:w-1/2 bg-gray-800 text-white flex flex-col">
        <Navbar setActiveSection={setActiveSection} />

        {/* Conditionally render sections */}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'experiences' && <Experiences />}
        {activeSection === 'recommended' && <Recommended />}
        <Gallery />
      </div>
    </div>
  );
}
