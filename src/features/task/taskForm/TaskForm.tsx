import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import styles from './TaskForm.module.scss'
import { createTask, selectSelectedTask, handleModalOpen, editTask } from '../taskSlice'
import { useDispatch, useSelector } from 'react-redux'

type Inputs = {
  taskTitle?: string
}

type PropsType = {
  edit?: boolean
}

const TaskForm = ({ edit }: PropsType): JSX.Element => {
  const dispatch = useDispatch()
  const selectedTask = useSelector(selectSelectedTask)
  const { register, handleSubmit, reset } = useForm()
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle))
    reset()
  }

  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle }
    dispatch(editTask(sendData))
    dispatch(handleModalOpen(false))
  }

  return (
    <div className={styles.root}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        className={styles.form}
        onSubmit={handleSubmit(edit ? handleEdit : handleCreate)}
      >
        <TextField
          id='outlined-basic'
          label={edit ? 'Edit Task' : 'New Task'}
          defaultValue={edit ? selectedTask.title : ''}
          variant='outlined'
          {...register('taskTitle')}
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type='submit' className={styles.submit_button}>
              Submit
            </button>
            <button type='button' onClick={() => dispatch(handleModalOpen(false))} className={styles.cancel_button}>
              Cancel
            </button>
          </div>
        ) : null}
      </Box>
    </div>
  )
}

export default TaskForm
