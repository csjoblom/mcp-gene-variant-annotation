import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import './index.css';

export default function DocsPage({ onBack }) {
  return (
    <main className="p-4 font-sans">
      <Button onClick={onBack}>Back</Button>
      <Card>
        <h1 className="text-xl font-bold mb-2">Gene Variant Annotation Service</h1>
        <p>This site provides documentation for the microservice that exposes curated oncology variant information from CIViC. The service is designed for use in Model Context Protocol (MCP) workflows and can also be called directly.</p>
        <h2 className="text-lg font-semibold mt-4">Getting Started</h2>
        <p>Run the tool with a gene symbol or variant ID:</p>
        <pre className="bg-gray-100 p-2 rounded">python variant_annotator.py --gene TP53</pre>
        <h2 className="text-lg font-semibold mt-4">Updating Data</h2>
        <p>The tool queries the CIViC API each time it runs so information is always up to date with the latest curated variants and studies.</p>
        <h2 className="text-lg font-semibold mt-4">Web Documentation</h2>
        <p>The content of this site is also compiled into a React web app using Shadcn UI under <code>react_web_app</code> and published to the <code>gh-pages</code> branch.</p>
        <h2 className="text-lg font-semibold mt-4">Related Documents</h2>
        <ul className="list-disc ml-6">
          <li><a href="../docs/prd.txt">Product Requirements</a></li>
          <li><a href="../docs/prd_tasks.md">Task Breakdown</a></li>
          <li><a href="../docs/mcp.md">Model Context Protocol Integration</a></li>
          <li><a href="../docs/cursor.md">Configuring in Cursor</a></li>
        </ul>
      </Card>
    </main>
  );
}
