import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <TextField label='First name'/>
      <br></br>
      <TextField label='Last name'/>
      <br></br>
      <TextField label='Email'/>
      <br></br>
      <TextField label='Password' type='password'/>
      <br></br>
      <br></br>
      <Button variant='contained' color='success'>Sign up</Button>
      
    </div>
  )
}

export default Signup
