import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data=useLoaderData()
    //Use this first
//     const [data,setData]=useState([])
//     useEffect(()=>{
//    fetch("https://api.github.com/users/hiteshchoudhary")
//        .then(response=>response.json())
//        .then(data=>{
//         setData(data)
//        })
// },[])
  return (
    <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}
//is using above dont use below
export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}
