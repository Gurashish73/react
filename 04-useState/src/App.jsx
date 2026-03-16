import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function jumpBy5() {
    setNum(num + 5);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{num}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jumpBy5}>Increase By 5</button>
    </div>
  )
}

export default App
