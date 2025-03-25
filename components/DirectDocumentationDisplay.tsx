"use client";

import React from 'react';
import SimpleParameterDisplay from './ethereum/eth_getBlockByNumber/SimpleParameterDisplay';
import SimpleResponseDisplay from './ethereum/eth_getBlockByNumber/SimpleResponseDisplay';
import ParameterDisplayEthBlockNumber from './ethereum/eth_blockNumber/ParameterDisplayEthBlockNumber';
import ResponseDisplayEthBlockNumber from './ethereum/eth_blockNumber/ResponseDisplayEthBlockNumber';
import ParameterDisplayEthAccounts from './ethereum/eth_accounts/ParameterDisplayEthAccounts';

interface DirectDocumentationDisplayProps {
  endpoint: string;
  showDocumentation: boolean;
}

const DirectDocumentationDisplay: React.FC<DirectDocumentationDisplayProps> = ({ 
  endpoint,
  showDocumentation
}) => {
  // If documentation isn't shown, return null
  if (!showDocumentation) {
    return null;
  }
  
  // Direct mapping without any complex logic - just static components based on endpoint
  if (endpoint === 'https://face-server-wine.vercel.app/api/v1/ethereum/eth_getBlockByNumber') {
    return (
      <>
        <SimpleParameterDisplay />
        <SimpleResponseDisplay />
      </>
    );
  } else if (endpoint === 'https://face-server-wine.vercel.app/api/v1/ethereum/eth_blockNumber') {
    return (
      <>
        <ParameterDisplayEthBlockNumber />
        <ResponseDisplayEthBlockNumber />
      </>
    );
  }else if (endpoint === 'https://face-server-wine.vercel.app/api/v1/ethereum/eth_accounts') {
    return (
      <>
        <ParameterDisplayEthAccounts />
        <ParameterDisplayEthAccounts />
      </>
    );
  }
  
  // For other endpoints, you can add additional conditions here
  
  // Default for no matching endpoint
  return null;
};

export default DirectDocumentationDisplay;