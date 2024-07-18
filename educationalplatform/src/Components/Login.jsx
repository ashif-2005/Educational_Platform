import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from './UseContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {setUserId} = useUser()
  const [userName,setuserName] = useState("")
  const [password,setPassword] = useState("")
  const [err,setErr] = useState("")
    const navigate = useNavigate()
    const handleSignup=()=>{
        navigate('/signup')
    }
    const handleLogin = async(e)=>{
      e.preventDefault()
      try{
        const response = await axios.post("http://localhost:8000/login",{userName,password},{
          headers: {
          'Content-type': 'application/json'
          }
      });
      if(response.status === 200){
        setUserId(userName)
        navigate('/Home')
      }
      }
      catch(err){
        setUserId("user")
        setErr("Invalid Credentials")
      }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        {err && <p className='error flex justify-center items-center' style={{ color: 'red' }}>{err}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="email"
              onChange={(e)=>setuserName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="userName"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" 
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <button className="text-blue-500 hover:underline" onClick={
            handleSignup
          }>Sign up</button>
        </p>
      </div>
    </div>
  )
}

export default Login