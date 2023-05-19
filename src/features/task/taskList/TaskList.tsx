import React from 'react'
import styles from './TaskList.module.scss'
import TaskItem from '../taskItem/TaskItem'
import { useSelector } from 'react-redux'
import { selectTask } from '../taskSlice'

const TaskList = (): JSX.Element => {
  const tasks = useSelector(selectTask)

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
