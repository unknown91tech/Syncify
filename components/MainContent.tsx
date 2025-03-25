"use client";

import React from 'react';
import { Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ApiExample from './ApiExample';
import { ExamplesData } from '@/data';

interface MainContentProps {
  activeSection: string;
  sections: Record<string, string>;
  examples: ExamplesData;
}

const MainContent: React.FC<MainContentProps> = ({ 
  activeSection, 
  sections, 
  examples 
}) => {
  // Check if examples and the active section exist before trying to render
  const sectionExamples = examples && examples[activeSection] ? examples[activeSection] : [];

  return (
    <main className="min-w-0">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{sections[activeSection] || ''}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore the available endpoints and learn how to integrate with our services.
          </p>
          {activeSection === "users" && (
            <Alert className="mb-6 border-blue-200 bg-blue-50">
              <Info className="h-4 w-4 text-blue-700" />
              <AlertDescription className="text-blue-800">
                You can now select between Ethereum Mainnet, Sepolia, and Holesky test networks when making API requests.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-6">
          {sectionExamples.map((example, index) => (
            <ApiExample key={index} {...example} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;