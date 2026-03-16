import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  //By Axios Method
  /*const getData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
  }*/
  //By Fetch Method
  /*const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  }*/
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (item, index) {
          return <h3 key={item.id}>Hello, {item.author} {index}</h3> 
        })}
      </div>
    </div>
  )
}

export default App
