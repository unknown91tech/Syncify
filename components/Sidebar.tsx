"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isMenuOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: Record<string, string>;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isMenuOpen, 
  activeSection, 
  setActiveSection, 
  sections 
}) => {
  return (
    <aside className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
      <div className="lg:sticky lg:top-20 space-y-6">
        <div className="space-y-1">
          <h2 className="text-sm font-medium px-3 mb-2">Getting Started</h2>
          <a href="#" className="block px-3 py-2 text-sm rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
            Introduction
          </a>
          <a href="#" className="block px-3 py-2 text-sm rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
            Authentication
          </a>
          <a href="#" className="block px-3 py-2 text-sm rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
            Quick Start
          </a>
        </div>
        
        <Separator />
        
        <div className="space-y-1">
          <h2 className="text-sm font-medium px-3 mb-2">API Reference</h2>
          <div className="space-y-1">
            {Object.entries(sections).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === key 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        
        <Separator />
        
        <div className="rounded-lg border border-border p-4 bg-muted/30">
          <h3 className="text-sm font-medium mb-2">Need Help?</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Can't find what you're looking for or have questions about the API?
          </p>
          <Button variant="outline" size="sm" className="w-full">
            Contact Support
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;