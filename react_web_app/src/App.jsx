import React from 'react';
import { Button } from '../components/ui/button';
import DocsPage from './DocsPage';
import DocPage from './DocPage';
import { prd, prdTasks, mcp, cursorConfig } from './docs';
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

   You can also run this command inside an SSE (Secure Shell Environment)
   session and point Cursor at the SSE URL (typically
   \\`http://localhost:8000\\`).
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
  const [page, setPage] = React.useState('home');

  if (page === 'docs') {
    return <DocsPage onBack={() => setPage('home')} onOpen={setPage} />;
  }
  if (page === 'prd') {
    return <DocPage title="Product Requirements" content={prd} onBack={() => setPage('docs')} />;
  }
  if (page === 'tasks') {
    return <DocPage title="Task Breakdown" content={prdTasks} onBack={() => setPage('docs')} />;
  }
  if (page === 'mcp') {
    return <DocPage title="MCP Integration" content={mcp} onBack={() => setPage('docs')} />;
  }
  if (page === 'cursor') {
    return <DocPage title="Configuring in Cursor" content={cursorConfig} onBack={() => setPage('docs')} />;
  }

  return (
    <main className="p-4 font-sans main-container">
      <h1 className="text-2xl font-bold mb-4">Gene Variant Service Docs</h1>
      <pre className="whitespace-pre-wrap">{docText}</pre>
      <div className="mt-4">
        <Button onClick={() => setPage('docs')}>View Documentation</Button>
      </div>
    </main>
  );
}
