import { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  useEffect(function(){
    console.log('useEffect is running')              
  }, [num]) // [] is dependency array, it means that useEffect will run only once when the component is mounted
  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num + 1)
      }
      }
      onMouseLeave={()=>{
        setNum2(num2 + 10)
      }}>Hover</button>
    </div>
  )
}

export default App
