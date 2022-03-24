import React, { useState, useEffect } from 'react'
import { generateInitialBoard, generateDeadOrAliveCell } from './helpers/initialBoard'
import Board from './Board';
import './App.css'
import { generateNewBoard } from './helpers/generateNewBoard';

const initialBoard = generateInitialBoard(generateDeadOrAliveCell);

function App() {
 
  const [board, setBoard] = useState(initialBoard);
  const [speed, setSpeed] = useState(150);
  const [inputValue, setInputValue] = useState('150');
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(!pause) {
        setBoard(prev => generateNewBoard(prev));
      }
    }, speed);
  
    return () => {
      clearInterval(intervalId)
    }
  }, [setBoard, speed])
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    setSpeed(+inputValue);
  }

  const handlePause = () => {
    if (!pause){
      setPause(true);
      setSpeed(0);
    } else {
      setSpeed(150);
      setPause(false);
    }
  }

  return (
    <main>
      <div>
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleClick} >Set Speed</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <Board board={board}/>
    </main>
  )
}

export default App
