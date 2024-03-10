
import { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'Ac') {
      setInput('');
    } else if (value === 'Del') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      if (value === '.' && input.includes('.')) {
        // Do nothing if '.' is already in the input
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };
 
  return (
    <>
      <input
        className='container'
        type='text'
        value={input}
        readOnly
      />

      <div className='number' onClick={(e) => handleClick(e.target.textContent)}>
            <button>Ac</button>
            <button>Del</button>
            <button>/</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>.</button>
            <button>0</button>
            <button className="equal" onClick={() => handleClick('=')}>=</button>
        
      </div>

  </>
  )}
export default App
