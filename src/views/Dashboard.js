import React from 'react'
import ReactDOM from "react-dom/client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Dashboard() {
  return (
    <Box>
      <AppBar color='white'>
        <Toolbar>
          <Typography variant="h6" component="div" color='blue' sx={{ flexGrow: 1 }}>
            Explore Lombok Island
          </Typography>
          <Button variant="contained" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      
    </Box>
  )
}

export default Dashboard