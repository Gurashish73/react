import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users=[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"royalblue",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"lightseagreen",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"orange",
      intro:"",
      tag:"Underbanked"
    },
    {
      img:"https://media.istockphoto.com/id/1357902237/photo/laptop-working-night.jpg?s=1024x1024&w=is&k=20&c=8n5jRU2kTWkfhHV52mmO_zy3aLlkSIckEW6PrUjUo64=",
      color:"pink",
      intro:"",
      tag:"Unbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"black",
      intro:"",
      tag:"Average"
    }
  ]
  return (
    <div >
      <Section1 users= {users}/>
      <Section2 />
    </div>
  )
}

export default App
