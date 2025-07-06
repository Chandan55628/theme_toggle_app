import React from 'react';

const ThemedBox = ({ theme }) => {
  const styles = {
    light: {
      backgroundColor: '#f0f0f0',
      color: '#333',
      border: '1px solid #ccc',
    },
    dark: {
      backgroundColor: '#333',
      color: '#f0f0f0',
      border: '1px solid #555',
    },
  };

  return (
    <div
      style={{
        ...styles[theme],
        padding: '20px',
        width: '150px',
        borderRadius: '10px',
        textAlign: 'center',
      }}
    >
      <p>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</p>
    </div>
  );
};

export default ThemedBox;
