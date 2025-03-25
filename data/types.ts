/**
 * Type definitions for API examples data
 */

export interface ApiExampleData {
    method: string;
    endpoint: string;
    description: string;
    requestBody?: string;
    response: string;
  }
  
  export interface ExamplesData {
    [key: string]: ApiExampleData[];
  }