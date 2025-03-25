"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import CustomScrollbar from '@/components/CustomScrollbar';
import { sectionTitles, examples } from '@/data';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("eth_getBlockByNumber");

  return (
    <CustomScrollbar>
      <div className="min-h-screen bg-background">
        {/* Navigation Bar */}
        <Navigation 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[240px,1fr] gap-8">
            {/* Sidebar */}
            <Sidebar 
              isMenuOpen={isMenuOpen}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              sections={sectionTitles}
            />

            {/* Main Content */}
            <MainContent 
              activeSection={activeSection}
              sections={sectionTitles}
              examples={examples}
            />
          </div>
        </div>
      </div>
    </CustomScrollbar>
  );
}