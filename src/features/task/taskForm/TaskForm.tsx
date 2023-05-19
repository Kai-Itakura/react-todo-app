import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import styles from './TaskForm.module.scss'
import { createTask } from '../taskSlice'
import { useDispatch } from 'react-redux'

type Inputs = {
  taskTitle?: string
}

const TaskForm = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle))
    reset()
  }

  return (
    <div className={styles.root}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        className={styles.form}
        onSubmit={handleSubmit(handleCreate)}
      >
        <TextField
          id='outlined-basic'
          label='New Task'
          variant='outlined'
          {...register('taskTitle')}
          className={styles.text_field}
        />
      </Box>
    </div>
  )
}

export default TaskForm
