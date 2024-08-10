import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import { type Task } from './types'

const Component = () => {
  const  [tasks,setTask] = useState<Task[]>([])
  const addTask = (task:Task) => {
    setTask([...tasks,task])
  }

  const toggleTask = ({id}: {id:string}) => {
    setTask(
      tasks.map((task) => {
        if(task.id === id){
          return {...task, isCompleted: !task.isCompleted}
        }
        return task
      })
    )
  }
  return (
    <section>
      <Form addTask={addTask}/>
      <List tasks={tasks} toggleTask={toggleTask}/>
    </section>
  )
}

export default Component
