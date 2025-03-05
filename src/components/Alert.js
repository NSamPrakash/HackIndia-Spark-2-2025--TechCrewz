import React from 'react';

const Alert = ({ type, message }) => {
  const alertStyle = {
    backgroundColor: type === 'error' ? '#ffcccc' : '#d4edda',
    color: type === 'error' ? '#d8000c' : '#155724',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0',
    textAlign: 'center'
  };

  return <div style={alertStyle}>{message}</div>;
};

export default Alert;