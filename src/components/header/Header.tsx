import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styles from './Header.module.scss'

const Header = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' className={styles.app_bar}>
          <Toolbar className={styles.tool_bars}>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Redux Toolkid Todo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
