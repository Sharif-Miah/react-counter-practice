import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  const IncreaseCounter = () => {
    setCount(count + 1)
  }
  const DecreaseCounter = () => {
    setCount(count - 1)
  }
  const ResetBtn = () => {
    setCount(0)
  }
  return (
    <div className='count'>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCounter}>Increment</button>
      <button onClick={DecreaseCounter}>Dicrement</button>
      <button onClick={ResetBtn}>Reset</button>
    </div>
  )
}



export default App;
