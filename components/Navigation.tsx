"use client";

import React from 'react';
import { Menu, Search, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="border-b border-border sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-muted rounded-md lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">API Docs</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-sm hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Reference</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Support</a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-64 h-9 pl-10 pr-4 py-2 text-sm bg-muted rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
            />
          </div>
          <Button>
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;