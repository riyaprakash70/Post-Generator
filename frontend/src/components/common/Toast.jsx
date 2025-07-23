import React from 'react';

const Toast = ({ message, show }) => {
  return (
    show && (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#D96BA0',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: '6px'
      }}>
        {message}
      </div>
    )
  );
};

export default Toast;