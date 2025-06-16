import React, { useState } from 'react';

const Task2 = () => {
  
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const buttonColor = count > 10 ? 'red' : 'green';

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Task 2: Counter</h2>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '20px'
      }}>
        
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Count: {count}
        </div>
     
        <button 
          onClick={incrementCount}
          style={{
            backgroundColor: buttonColor,
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Increment
        </button>

        {count > 10 && (
          <p style={{ color: 'red', fontStyle: 'italic' }}>
            Count is greater than 10
          </p>
        )}
      </div>
    </div>
  );
};

export default Task2;