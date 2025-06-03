import React, { useState } from 'react';

const Notes = ({ title = 'Student Notes', children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={toggleExpand}
        style={{
          background: '#f9f9f9',
          border: 'none',
          borderBottom: isExpanded ? '1px solid #e0e0e0' : 'none',
          color: '#333',
          cursor: 'pointer',
          padding: '12px 16px',
          textAlign: 'left',
          width: '100%',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {title}
        <span>{isExpanded ? '▲' : '▼'}</span>
      </button>
      {isExpanded && <div className="notes-content">{children}</div>}
    </div>
  );
};

export default Notes;
