import React from 'react';
import './button.css';

export function Button({ children, ...props }) {
  return (
    <button className="shadcn-btn" {...props}>
      {children}
    </button>
  );
}
