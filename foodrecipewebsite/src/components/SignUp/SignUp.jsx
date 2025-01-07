import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import axios from "axios"

function SignUp() {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("",{name,email,password})
      .then(result=>console.log(result))
      .catch(err=>console.log(err))

    }

  return (
<div className='flex justify-center items-center flex-col  mt-20'>
      <div className='w-[400px] h-[400px] border-2 rounded-lg  flex flex-col items-center shadow-lg'>
        <h2 className='text-3xl font-semibold mt-6' style={{ color: "#509E2F"}}>SignUp</h2>
        <form action="" className='flex flex-col gap-3 items-center mt-10' onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' className='border-2 border-zinc-300 px-6 py-2 rounded-lg ' onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder='Email' className='border-2 border-zinc-300 px-6 py-2 rounded-lg ' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' className='border-2 border-zinc-300 px-6 py-2 rounded-lg ' onChange={(e)=>setPassword(e.target.value)}/>
          <input type="submit" value="Login" className='w-1/3 px-4 py-2 text-white rounded-lg mt-4'  style={{backgroundColor: "#509E2F"}} />
        </form>
        <div className='flex flex-row gap-2 mt-4'>
        <p>Already have an account?</p>
        <NavLink to="/" style={{ color: "#509E2F"}}>Login</NavLink>
        </div>
      
      </div>
    </div>
  )
}

export default SignUp
