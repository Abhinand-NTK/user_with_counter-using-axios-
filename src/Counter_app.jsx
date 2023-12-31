import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'





const Counter_app = () => {
  const  [count,setCount] = useState(0)
  const  [user,setUser] = useState(null)
  const  [loading,setLoading] = useState(false)
  const  [err,setErr] = useState(false)

  useEffect(()=>{
    // setLoading(true);
    setErr(null);

    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response=>{
      setUser(response.data)
      // setLoading(false)
    })
    .catch(err=>{
      setErr("Something Went Wrong while we are trying to fetch the data")
      setLoading(false)
    });
  },[count])

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    if(count>0){
      setCount(count- 1)

    }
    
  }


  return (
    <div className='content'>
      { loading && <p>Loding for the user information</p> }
      { user && 
      <div className='userinformation'>
        <h2>User Information</h2>
        <p>Name :-  {user.name}</p>
        <p>E-mail :-  {user.email}</p>
      </div>
      }
      { err && <p className='text-danger'>Error : {err}</p> }
      <div className='buttoncontroll'> 
      <h2>Counter App</h2>
        <button onClick={increment}>+</button>
        <h2>{count}</h2>
        <button onClick={decrement}>-</button>
      </div>
        
      
    </div>
  )
}
export default Counter_app
