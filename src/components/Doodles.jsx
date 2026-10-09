import React from 'react';

export const ArrowDoodle = ({ className, style }) => (
  <svg className={`doodle ${className}`} style={style} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 90 Q 30 10, 90 50" stroke="#FF3333" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 5" />
    <path d="M70 30 L 95 50 L 70 70" stroke="#FF3333" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarDoodle = ({ className, style }) => (
  <svg className={`doodle ${className}`} style={style} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 L 38 22 L 55 25 L 42 38 L 45 55 L 30 46 L 15 55 L 18 38 L 5 25 L 22 22 Z" fill="#FFD200" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

export const CircleDoodle = ({ className, style, preserveAspectRatio }) => (
  <svg className={`doodle ${className}`} style={style} width="120" height="60" viewBox="0 0 120 60" fill="none" preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"} xmlns="http://www.w3.org/2000/svg">
    <path d="M 5 30 Q 30 5 60 10 T 115 30 Q 110 55 60 50 T 5 30" stroke="#00E676" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

export const SmileyDoodle = ({ className, style }) => (
  <svg className={`doodle ${className}`} style={style} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="35" fill="#FF7B00" stroke="#111" strokeWidth="4" />
    <circle cx="28" cy="30" r="4" fill="#111" />
    <circle cx="52" cy="30" r="4" fill="#111" />
    <path d="M 25 50 Q 40 65 55 50" stroke="#111" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
