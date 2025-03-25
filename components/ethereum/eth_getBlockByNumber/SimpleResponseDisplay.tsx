"use client";

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileJson, CheckCircle, Info } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";


const SimpleResponseDisplay1: React.FC = () => {
    return (
        <Card className="mt-6 border-border bg-card/50 overflow-hidden shadow-sm">
          <CardHeader className="pb-2 bg-muted/30">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <FileJson className="h-4 w-4 text-primary" />
                RESPONSE
              </CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      200 OK
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Successful response status</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-4 py-3 border-b border-border bg-muted/20">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Detailed block object if found, or null if no block is found.
                  </span>
                </div>
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
      <TableCell className="font-medium">baseFeePerGas</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Base fee per gas in hexadecimal.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">difficulty</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-green-50 text-green-700 border-green-200">
          integer
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Block difficulty as an integer (hexadecimal).</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">extraData</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Extra data field of the block.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">gasLimit</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Maximum gas allowed in the block (hexadecimal string).</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">gasUsed</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Total gas used by all transactions (hexadecimal string).</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">hash</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Block hash (null if pending).</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">logsBloom</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Bloom filter for logs (null if pending).</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">miner</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Address of the mining reward recipient.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">mixHash</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">256-bit hash as a hexadecimal string.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">nonce</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Number of prior transactions from the sender.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">number</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">The block number of the requested block encoded as hexadecimal.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">parentHash</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Parent block hash.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">receiptsRoot</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Root of the receipts trie.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">sha3Uncles</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">SHA3 hash of uncles data.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">size</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Block size in bytes.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">stateRoot</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Root of the final state trie.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">timestamp</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">UNIX timestamp of the block's creation.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">totalDifficulty</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Total difficulty of the chain up to this block.</TableCell>
    </TableRow>
    
    {/* Transaction array with collapsible content */}
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">transactions</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-purple-50 text-purple-700 border-purple-200">
          array
        </Badge>
      </TableCell>
      <TableCell>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <div className="flex items-center gap-1">
              Array of transaction objects
              <ChevronDown className="h-4 w-4" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-2 pl-4 border-l-2 border-muted">
              <Table>
                <TableBody>
                  <TableRow className="hover:bg-muted/50 border-t border-border">
                    <TableCell className="font-medium">blockHash</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Hash of the block containing the transaction.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">blockNumber</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Block number containing the transaction.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">transactionIndex</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Position of the transaction in the block (null if pending).</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">from</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Address of the sender.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">to</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Receiver's address (null if contract creation).</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">gas</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Gas provided by the sender.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">gasPrice</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Gas price provided by the sender in wei.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">input</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Data sent with the transaction.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">nonce</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Number of prior transactions from the sender.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">r</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">ECDSA signature r.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">s</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">ECDSA signature s.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">v</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">ECDSA recovery id.</TableCell>
                  </TableRow>
                  
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">value</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
                        string
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">Value transferred in Wei.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">transactionsRoot</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-blue-50 text-blue-700 border-blue-200">
          string
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">The root of the transaction trie of the block.</TableCell>
    </TableRow>
    
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-medium">uncles</TableCell>
      <TableCell>
        <Badge variant="outline" className="font-mono text-xs bg-purple-50 text-purple-700 border-purple-200">
          array
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">Array of uncle block hashes.</TableCell>
    </TableRow>
  </TableBody>
</Table>
          </CardContent>
        </Card>
      );
};

export default SimpleResponseDisplay1;