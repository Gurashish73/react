import { useState } from 'react'
import { X } from 'lucide-react'
const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])
  

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({ title, details })
    setTask(copyTask)
    setTitle("")
    setDetails("")
  }
  const deleteNote=(index)=>{
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form className='flex gap-4 flex-col lg:w-1/2 items-start p-10 ' onSubmit={e => submitHandler(e)}>
          <h1 className="text-4xl font-bold">Add Notes</h1>
          <input type="text" placeholder="Note title" className='px-5 py-2 font-medium border-2 rounded outline-none w-full' 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />
          <textarea type="text" placeholder="Note content" className='h-32 px-5 py-2 font-medium border-2 rounded outline-none w-full'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />
          <button className='bg-blue-500 text-white active:scale-95 px-5 py-2 font-medium rounded outline-none w-full'>Add Note</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto ">
          {task.map((item, index) => {
            return (<div key={index} className="relative h-52 w-40 rounded-xl bg-cover text-black py-9 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s')]">
              <button onClick={() =>{
                deleteNote(index)
              }} className='absolute top-5 right-5 cursor-pointer active:scale-95 bg-red-500 p-1 rounded-full text-xs'>
                <X size={16} color="#ffffff" strokeWidth={2.75} />
                </button>
              <h3 className="leading-tight text-xl font-bold">{item.title}</h3>
              <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">{item.details}</p>
            </div>)

          })}

        </div>
      </div>
    </div>
  )
}

export default App
