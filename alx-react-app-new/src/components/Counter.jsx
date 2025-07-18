import React, { useState } from 'react';

function Counter () {
  const [count, setCounter] = useState(0);

return (
  <div style={{ textAlign: 'center', marginTop: '40px' }}>
  <p style={{ fontSize: '24px' }}>Current Count: {count}
  </p>
    <botton onClick={() =>
    setCount(count + 1)}
      style={{margin: '5px' }}>Increment</botton>
    <botton onClick={() =>
    setCount(count - 1)}
      style={{margin: '5px' }}>Decrement</botton>
    <botton onClick={() =>
    setCount(0)}
      style={{margin: '5px' }}>Reset</botton>
  </div>
  );
}

export default Counter
