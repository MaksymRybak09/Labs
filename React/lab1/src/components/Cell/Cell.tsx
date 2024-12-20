import React, { useState } from 'react';
import classes from './cell.module.sass';

function Cell() {
  const [inputValue, setInputValue] = useState('');

  const cellInputHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
      setInputValue(key);
    }
    if (key === 'Backspace') {
      setInputValue('');
    }
  };

  return (
    <input 
      type="text" 
      className={classes.cell}
      onChange={() => null}
      onKeyDown={cellInputHandler}
      value={inputValue}
    />
  );
}

export default Cell;
