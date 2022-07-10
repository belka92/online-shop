import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Signin } from './component/signin'
import { Signup } from './component/signup'
import './LogIn.css'


export default function LogIn() {
  return (
    <div>
<Navbar/>
    <div className='log1'>
      
      <Signin />
      <h4>OR</h4>
      <Signup/>
    </div>
    </div>
  )
}