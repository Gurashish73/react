import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({ user: "Gurashish", age: 20 });
  const btnClicked = () => {
    const newnum={...num}
    newnum.user="Aman"
    newnum.age=19
    setNum(newnum)
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      
    </div>
  )
}

export default App
