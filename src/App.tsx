import React from 'react'
import styles from './App.module.scss'
import Header from './components/header/Header'
import TaskForm from './features/counter/task/taskForm/TaskForm'
import TaskList from './features/counter/task/taskList/TaskList'

const App = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App
