import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <button onClick={() => setDarkMode(!darkMode)} style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '8px 12px',
    background: darkMode ? '#F9FAFB' : '#1F2937',
    color: darkMode ? '#111827' : '#F3F4F6',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    zIndex: 1000
  }}>
    {darkMode ? '☀ Light' : '🌙 Dark'}
  </button>
);

export default DarkModeToggle;