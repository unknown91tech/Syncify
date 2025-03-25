"use client";

import React from 'react';

// Custom scrollbar styles
export const scrollbarStyles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export const CustomScrollbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <style jsx global>{scrollbarStyles}</style>
      {children}
    </>
  );
};

export default CustomScrollbar;