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


const ParameterDisplayEthAccounts: React.FC= () => {
 
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
              <TableCell className="text-sm text-muted-foreground">Request identifier</TableCell>
            </TableRow>
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
              <TableCell className="font-medium">method</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                  string
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">Method name</TableCell>
            </TableRow>
            <TableRow className="hover:bg-muted/50">
              <TableCell className="font-medium">Parameters</TableCell>
              <TableCell>
                <Badge variant="outline" className="font-mono text-xs bg-purple-50 text-purple-700 border-purple-200">
                  array
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">This method does not accept any parameters.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ParameterDisplayEthAccounts;