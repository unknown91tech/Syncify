"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SimpleParameterDisplay: React.FC = () => {
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
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-green-50 text-green-700 border-green-200">
          integer
        </Badge>
      </TableCell>
      <TableCell>Request identifier</TableCell>
    </TableRow>
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">jsonrpc</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell>JSON-RPC version</TableCell>
    </TableRow>
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">method</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell>Method name</TableCell>
    </TableRow>
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">Parameters</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-purple-50 text-purple-700 border-purple-200">
          array
        </Badge>
      </TableCell>
      <TableCell>
        <div className="pl-4 py-2">
          <div className="flex items-center">
            <span className="font-medium w-32">blockNumber</span>
            <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
              string
            </Badge>
          </div>
          <p className="text-sm mt-1 text-muted-foreground">
            The block number or tag ("latest", "earliest", "pending") at which to get the balance.
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm text-muted-foreground space-y-1">
            <li><span className="font-medium">Latest [default]</span> - The most recent block.</li>
            <li><span className="font-medium">Safe</span> - A validated block.</li>
            <li><span className="font-medium">Finalized</span> - A confirmed block.</li>
          </ul>
          
          <Separator className="my-4" />
          
          <div className="flex items-center mt-2">
            <span className="font-medium w-36">transaction_detail_flag</span>
            <Badge variant="outline" className="font-mono text-xs bg-amber-50 text-amber-700 border-amber-200">
              boolean
            </Badge>
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

export default SimpleParameterDisplay;