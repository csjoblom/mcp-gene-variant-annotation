import React from 'react';
import './button.css';

export function Button({ children }) {
  return (
    <button className="shadcn-btn">
      {children}
    </button>
  );
}
