import React from 'react';
import { Button } from '../components/ui/button';
import './index.css';

const docText = `Gene Variant Annotation Service

This microservice exposes endpoints to query oncology variant data for use in Model Context Protocol (MCP) workflows.

Available endpoints:
- GET /health
- GET /gene/{gene}
- GET /variant/{variant_id}

### Configuring in Cursor

1. Start the service:
   \`\`\`bash
   python variant_service.py
   \`\`\`
2. Add an entry to your \`cursor.json\` configuration:
   \`\`\`json
   {
     "tools": [
       { "name": "variant_service", "base_url": "http://localhost:8000" }
     ]
   }
   \`\`\`
Restart Cursor after saving the configuration.`;

export default function App() {
  return (
    <main className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Gene Variant Service Docs</h1>
      <pre className="whitespace-pre-wrap">{docText}</pre>
      <div className="mt-4">
        <Button>Shadcn Button</Button>
      </div>
    </main>
  );
}
