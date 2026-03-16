import React from 'react'

const App = () => {
  const user={
    username:'Gurashish',
    age:20,
    city:'Delhi'
  }
  //localStorage.setItem('user',JSON.stringify(user))
  const user1= JSON.parse(localStorage.getItem('user'))
  console.log(user1)

  return (
    <div>
      App
    </div>
  )
}

export default App
