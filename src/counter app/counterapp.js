import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
      }
    };
  
  const reset = () => setCount(0);

  return (
    <div className="container text-center mt-5">
      <h1>Counter App</h1>
      <div className="display-4 mb-4"><button className='btn btn-primary mx-2'>{count}</button></div>
      <div>
        <button className="btn btn-primary mx-2" onClick={increment}>+</button>
        <button className="btn btn-danger mx-2" onClick={decrement}>-</button>
        <button className="btn btn-secondary mx-2" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
