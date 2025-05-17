import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import './index.css';

export default function DocPage({ title, content, onBack }) {
  return (
    <main className="p-4 font-sans main-container">
      <Button onClick={onBack}>Back</Button>
      <Card>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <pre className="whitespace-pre-wrap">{content}</pre>
      </Card>
    </main>
  );
}
