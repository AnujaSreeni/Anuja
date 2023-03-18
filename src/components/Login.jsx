import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
       <h1>Welcome to react</h1>
      <input placeholder="Email"></input>
      <br></br>
      <input placeholder='password' type='password'></input>
      <Typography variant='h5'>Welcome to React</Typography>
      <TextField label='Email' variant='standard'/>
      <br></br>
      <TextField label='Password' type='password' variant='standard'/>
      <br></br>
      <br></br>
      <Button variant='contained' color='success'>Login</Button>
    </div>
  )
}

export default Login
