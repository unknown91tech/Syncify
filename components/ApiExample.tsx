"use client";

import React, { useState } from 'react';
import axios from "axios";
import { Copy, PlayCircle, CheckCircle, XCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
// Import our simplified direct documentation display
import DirectDocumentationDisplay from './DirectDocumentationDisplay';

// Define network options
const networks = [
  { id: "Mainnet", name: "Mainnet" },
  { id: "Sepolia", name: "Sepolia" },
  { id: "Holesky", name: "Holesky" }
];

const methodColors = {
  GET: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  POST: "bg-green-100 text-green-800 hover:bg-green-200",
  PUT: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  DELETE: "bg-red-100 text-red-800 hover:bg-red-200"
};

interface ApiExampleProps {
  method: string;
  endpoint: string;
  description: string;
  requestBody?: string;
  response: string;
}

const ApiExample: React.FC<ApiExampleProps> = ({ 
  method, 
  endpoint, 
  description, 
  requestBody, 
  response 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [testResponse, setTestResponse] = useState<null | {
    success: boolean;
    data: any;
  }>(null);
  
  // Create a dedicated network state variable
  const [network, setNetwork] = useState("Mainnet"); // Default to Ethereum Mainnet
  const [activeTab, setActiveTab] = useState("request");
  const [showDocumentation, setShowDocumentation] = useState(true);

  // Parse the request body to modify it when the network changes
  const parseRequestBody = () => {
    if (!requestBody) return {};
    try {
      return JSON.parse(requestBody);
    } catch (e) {
      return {};
    }
  };

  const handleTryIt = async () => {
    setIsLoading(true);
    try {
      // Get the parsed request body
      const parsedBody = parseRequestBody();
      
      // Update the chain based on the selected network
      const requestData = {
        ...parsedBody,
        network: network
      };

      // Make the API call with the selected network
      const response = await axios.post(endpoint, requestData);
      console.log("Response from network:", network, response.data);
      
      // Set the response
      setTestResponse({
        success: true,
        data: response.data.response?.data || response.data
      });
      
      // Switch to response tab after successful request
      setActiveTab("response");
    } catch (error) {
      setTestResponse({
        success: false,
        data: { error: "Failed to execute request", details: error.message }
      });
      setActiveTab("response");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const getFormattedRequestBody = () => {
    const parsedBody = parseRequestBody();
    parsedBody.network = network;
    return JSON.stringify(parsedBody, null, 2);
  };

  // Log the endpoint for debugging
  console.log("Current endpoint in ApiExample:", endpoint);

  return (
    <Card className="mb-8 overflow-hidden border border-border shadow-sm">
      <CardHeader className="p-4 bg-card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Badge 
              className={methodColors[method] || "bg-gray-100 text-gray-800"}
              variant="outline"
            >
              {method}
            </Badge>
            <code className="text-sm font-mono bg-muted p-1 rounded">{endpoint}</code>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => copyToClipboard(endpoint)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy endpoint</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="h-9"
              onClick={() => setShowDocumentation(!showDocumentation)}
            >
              {showDocumentation ? 'Hide Documentation' : 'Show Documentation'}
            </Button>
            <Select value={network} onValueChange={setNetwork}>
              <SelectTrigger className="w-32 h-9">
                <SelectValue placeholder="Select Network" />
              </SelectTrigger>
              <SelectContent>
                {networks.map(network => (
                  <SelectItem key={network.id} value={network.id}>
                    {network.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              onClick={handleTryIt} 
              disabled={isLoading}
              size="sm"
              className="h-9"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"></div>
                  Testing...
                </>
              ) : (
                <>
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Try It
                </>
              )}
            </Button>
          </div>
        </div>
        <div>
          <CardDescription className="mt-2">{description}</CardDescription>
          
          {/* Use our direct documentation display */}
          <DirectDocumentationDisplay 
            endpoint={endpoint} 
            showDocumentation={showDocumentation} 
          />
        </div>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-4 border-t border-border">
          <TabsList className="grid w-full grid-cols-2 mt-2">
            <TabsTrigger value="request">Request</TabsTrigger>
            <TabsTrigger value="response">Response</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="request" className="mt-0">
          {requestBody && (
            <CardContent className="p-0">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">Request Body</h4>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6"
                            onClick={() => copyToClipboard(getFormattedRequestBody())}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy request body</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Network: {networks.find(n => n.id === network)?.name || network}
                  </Badge>
                </div>
                <ScrollArea className="h-64 overflow-y-auto overflow-x-auto custom-scrollbar">
                  <pre className="bg-muted p-4 rounded-md text-sm">
                    <code>{getFormattedRequestBody()}</code>
                  </pre>
                </ScrollArea>
              </div>
            </CardContent>
          )}
        </TabsContent>
        
        <TabsContent value="response" className="mt-0">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium">Example Response</h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(response)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy response</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <ScrollArea className="h-64 overflow-y-auto overflow-x-auto custom-scrollbar">
                <pre className="bg-muted p-4 rounded-md text-sm">
                <code>{response}</code>
                </pre>
              </ScrollArea>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
      
      {testResponse && (
        <CardFooter className="block p-0 border-t border-border bg-muted/50">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-sm font-medium">
                Live Test Result
              </h4>
              {testResponse.success ? (
                <Badge variant="outline" className="bg-green-100 text-green-800 ml-2">
                  <CheckCircle className="h-3 w-3 mr-1" /> Success
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-red-100 text-red-800 ml-2">
                  <XCircle className="h-3 w-3 mr-1" /> Error
                </Badge>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => copyToClipboard(JSON.stringify(testResponse.data, null, 2))}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy test result</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Badge variant="outline" className="text-xs ml-auto">
                Network: {networks.find(n => n.id === network)?.name || network}
              </Badge>
            </div>
            <div className="h-64 overflow-y-auto overflow-x-auto custom-scrollbar">
              <pre className="bg-muted p-4 rounded-md text-sm">
                <code>{JSON.stringify(testResponse.data, null, 2)}</code>
              </pre>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ApiExample;