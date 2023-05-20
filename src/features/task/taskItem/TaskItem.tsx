import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import styles from './TaskItem.module.scss'
import EventNoteIcon from '@mui/icons-material/EventNote'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Modal from '@mui/material/Modal'
import TaskForm from '../taskForm/TaskForm'
import { useDispatch, useSelector } from 'react-redux'
import { completeTask, deleteTask, handleModalOpen, selectIsModalOpen } from '../taskSlice'
import { selectTask } from '../taskSlice'

interface PropTypes {
  task: { id: number; title: string; completed: boolean }
}

const TaskItem = ({ task }: PropTypes): JSX.Element => {
  const isModalOpen = useSelector(selectIsModalOpen)
  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(selectTask(task))
    dispatch(handleModalOpen(true))
  }
  const handleClose = () => {
    dispatch(handleModalOpen(false))
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox checked={task.completed} onClick={() => dispatch(completeTask(task))} className={styles.checkbox} />
        <button onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </button>
        <button onClick={() => dispatch(deleteTask(task))} className={styles.delete_button}>
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
      <Modal className={styles.modal} open={isModalOpen} onClose={handleClose}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  )
}

export default TaskItem
