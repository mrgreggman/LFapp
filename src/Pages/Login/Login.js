import React from 'react'
import PasswordForm from './PasswordForm'
import EmailForm from './EmailForm'
import './Login.css'

const Login = () => {
  return (
    <div className='loginform'>
        <EmailForm />
        <PasswordForm />
        <button className='loginbutton'>Login</button>

        <div>
          <p className='loginlink'>Forgot Password?</p>
          <p className='loginlink'>Create Account</p>
          </div>
    </div>
  )
}

export default Login
