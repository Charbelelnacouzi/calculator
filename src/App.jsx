import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    const value = e.target.textContent.trim();
  
    // Check if the click was on a button
    if (!value) {
      return;
    }
  
    // Handle the click based on the value
    if (value === 'Ac') {
      setInput('');
      setResult('');
    } else if (value === 'Del') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else if (value === '=') {
      try {
        setResult(eval(result + input).toString());
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if ('+-*/'.includes(value)) {
      setResult(result + input + value);
      setInput('');
    } else {
      if (value === '.' && input.includes('.')) {
        // Do nothing if '.' is already in the input
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };
  
  // Handle click event on the buttons
  const handleButtonClick = (e) => {
    handleClick(e);
  };
  return (
    <>
      <div className="container" onClick={handleButtonClick}>
        <input
          className='input'
          type='text'
          value={input}
          readOnly
        />
        <input
          className='result'
          type='text'
          value={result}
          readOnly
        />
      </div>

      <div className='number'>
  <button onClick={handleButtonClick}>Ac</button>
  <button onClick={handleButtonClick}>Del</button>
  <button onClick={handleButtonClick}>/</button>
  <button onClick={handleButtonClick}>+</button>
  <button onClick={handleButtonClick}>1</button>
  <button onClick={handleButtonClick}>2</button>
  <button onClick={handleButtonClick}>3</button>
  <button onClick={handleButtonClick}>-</button>
  <button onClick={handleButtonClick}>4</button>
  <button onClick={handleButtonClick}>5</button>
  <button onClick={handleButtonClick}>6</button>
  <button onClick={handleButtonClick}>*</button>
  <button onClick={handleButtonClick}>7</button>
  <button onClick={handleButtonClick}>8</button>
  <button onClick={handleButtonClick}>9</button>
  <button onClick={handleButtonClick}>.</button>
  <button onClick={handleButtonClick}>0</button>
  <button className="equal" onClick={handleButtonClick}>=</button>
</div>

    </>
  );
}

export default App;
