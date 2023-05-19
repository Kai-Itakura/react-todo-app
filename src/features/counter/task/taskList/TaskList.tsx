import React from 'react'
import sampleData from './sampleData.json'
import styles from './TaskList.module.scss'
import TaskItem from '../taskItem/TaskItem'

const TaskList = (): JSX.Element => {
  return (
    <div className={styles.root}>
      {sampleData.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
