"use client";

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface ParameterDisplayProps {
  endpoint: string;
}

const ParameterDisplay: React.FC<ParameterDisplayProps> = ({ endpoint }) => {
  // Only show the parameters for the eth_getBlockByNumber endpoint
  if (endpoint !== "/api/v1/ethereum/eth_getBlockByNumber") {
    return null;
  }

  return (
    <Card className="mt-6 border-border bg-card/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">REQUEST PARAMS</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-1/3">Parameter</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">id</TableCell>
              <TableCell><Badge variant="outline" className="font-mono text-xs bg-muted/50">integer</Badge></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">jsonrpc</TableCell>
              <TableCell><Badge variant="outline" className="font-mono text-xs bg-muted/50">string</Badge></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">method</TableCell>
              <TableCell><Badge variant="outline" className="font-mono text-xs bg-muted/50">string</Badge></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">Parameters</TableCell>
              <TableCell><Badge variant="outline" className="font-mono text-xs bg-muted/50">array</Badge></TableCell>
              <TableCell>
                <div className="pl-4 py-2">
                  <div className="flex items-center">
                    <span className="font-medium w-32">blockNumber</span>
                    <Badge variant="outline" className="font-mono text-xs bg-muted/50">string</Badge>
                  </div>
                  <p className="text-sm mt-1 text-muted-foreground">
                    The block number or tag ("latest", "earliest", "pending") at which to get the balance.
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-sm text-muted-foreground space-y-1">
                    <li><span className="font-medium">Latest [default]</span> - The most recent block in the blockchain (default).</li>
                    <li><span className="font-medium">Safe</span> - A block that has been validated by the beacon chain.</li>
                    <li><span className="font-medium">Finalized</span> - A block confirmed by over two-thirds of validators.</li>
                    <li><span className="font-medium">Earliest</span> - A block approved by more than two-thirds of the validators.</li>
                    <li><span className="font-medium">Pending</span> - Transactions that have been broadcast but not yet included in a block.</li>
                  </ul>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex items-center mt-2">
                    <span className="font-medium w-36">transaction_detail_flag</span>
                    <Badge variant="outline" className="font-mono text-xs bg-muted/50">boolean</Badge>
                  </div>
                  <p className="text-sm mt-1 text-muted-foreground">
                    Must be true to retrieve full transaction details.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ParameterDisplay;