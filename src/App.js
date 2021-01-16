import React, {useState} from 'react'
import './App.css';
import Fetch from './Fetch';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        React Testing Library Test Playground
      <button onClick={()=> setCount(count + 1)}>+</button>
      <span data-testid="count">{count}</span>
      <button disabled={count === 0} onClick={()=> setCount(count - 1)}>-</button>
      <Fetch url="https://reqres.in/api/users/2" />
      </header>
    </div>
  );
}

export default App;
