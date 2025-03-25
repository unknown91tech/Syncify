"use client";

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";


const ResponseDisplayEthBlockNumber: React.FC= () => {


  return (
    <Card className="mt-6 border-border bg-card/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">RESPONSE</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-800">200</Badge>
            <span className="text-sm text-muted-foreground">
              Returns the current block number as a hexadecimal string.
            </span>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-1/3">Field</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">jsonrpc</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                  string
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">JSON-RPC version</TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">id</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-mono text-xs bg-green-50 text-green-700 border-green-200">
                  integer
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">Request identifier matching the request</TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">result</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                  string
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                Current block number encoded as a hexadecimal string. This represents the latest block number in the blockchain.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ResponseDisplayEthBlockNumber;