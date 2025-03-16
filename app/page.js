"use client"
import React, { useState } from 'react'

const page = () => {
  // 🔹 State for managing title input
  const [title, settitle] = useState("")
  // 🔹 State for managing description input
  const [desc, setdesc] = useState("")
  // 🔹 State for storing the list of tasks
  const [mainTask, setMainTask] = useState([])

  // 🔹 Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    // 🔹 Add new task to mainTask array
    setMainTask([...mainTask, { title, desc }])

    // 🔹 Clear input fields after submission
    settitle("");
    setdesc("");
    
    console.log(mainTask) // 🔹 Log tasks to console
  }

  // 🔹 Function to delete a task
  const deleteHandler = (i) => {
    let copytask = [...mainTask] // 🔹 Create a copy of mainTask array
    copytask.splice(i, 1) // 🔹 Remove the selected task
    setMainTask(copytask); // 🔹 Update state with the new array
  }

  // 🔹 Default message if no tasks exist
  let renderTask = <h2> No task available </h2>

  // 🔹 Render tasks if available
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex item-center justify-between mb-5 w-2/3'>
            {/* 🔹 Display task title and description */}
            <h5 className='text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          {/* 🔹 Delete button for each task */}
          <button 
            onClick={() => { deleteHandler(i); }}
            className='bg-red-400 text-white px-4 py-2 rounded text-bold'>
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      {/* 🔹 Header section */}
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> My Todo List</h1>
      
      {/* 🔹 Form to add new tasks */}
      <form onSubmit={submitHandler}>
        <input 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => { settitle(e.target.value) }}
        />
        <input 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => { setdesc(e.target.value) }}
        />
        {/* 🔹 Add Task Button */}
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>

      <hr />

      {/* 🔹 Task List Section */}
      <div className='p-8 bg-slate-200 '>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
