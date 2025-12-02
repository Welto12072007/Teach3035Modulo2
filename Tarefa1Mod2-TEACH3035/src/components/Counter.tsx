import { useState } from 'react';
import './Counter.css';

export function Counter() {
  const [count, setCount] = useState<number>(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">Contador de cliques</h1>
      <div className="counter-display">
        <p className="counter-label">Número de cliques:</p>
        <p className="counter-value">{count}</p>
      </div>
      <button className="counter-button" onClick={incrementCounter}>
        Clique aqui!
      </button>
    </div>
  );
}
