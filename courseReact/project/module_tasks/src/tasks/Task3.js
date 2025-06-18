import React, { useState } from 'react';

const Task3 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Введенное значение:', inputValue);
    setInputValue('');
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '20px auto', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '5px' 
    }}>
      <h2>Task 3: Форма с выводом в консоль</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="inputField" style={{ display: 'block', marginBottom: '5px' }}>
            Введите текст:
          </label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Отправить
        </button>
      </form>
    
    </div>
  );
};

export default Task3;