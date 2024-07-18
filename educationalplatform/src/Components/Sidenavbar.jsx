import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UseContext';
import image from './BEST.png'
import axios from 'axios';

const Sidenavbar = () => {
  const {userId} = useUser()
  const navigate = useNavigate()

  const handleHome = () =>{
    navigate('/Home')
  }

  const handleCourse = () =>{
    navigate('/Course')
  }

  // const handleAbout = () =>{
  //   navigate('/About')
  // }

  const handleClassRoom = () =>{
    navigate('/ClassRoom')
  }

  const handelOnClick = () =>{
    navigate('/login')
  }

  // const handelSubscribe = async()=>{
  //   const response = await axios.post("http://localhost:8000/sub", {name:userId,val:true},{
  //     headers: {
  //     'Content-type': 'application/json'
  //     }
  //   });
  // }

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-blue-500 p-5 flex flex-col justify-between">
        <div>
          {/* Logo and Name */}
          <div className="flex items-center mb-6">
            <img src={image} alt="Logo" className="h-12 w-12 mr-3 rounded-md" />
            <span className="text-white text-2xl font-bold">EduPlatform</span>
          </div>
          {/* Greeting */}
          <div className="text-white mb-6 flex justify-center items-center">
            <p>Hello, {userId}!</p>
          </div>
          {/* Navigation Links */}
          <ul>
            <li className="mb-4">
              <button  className="text-white text-lg w-full hover:bg-blue-600 p-2 rounded block" onClick={handleHome}>Home</button>
            </li>
            <li className="mb-4">
            <button  className="text-white text-lg w-full hover:bg-blue-600 p-2 rounded block" onClick={handleCourse}>My Courses</button>

            </li>
            {/* <li className="mb-4">
            <button  className="text-white text-lg w-full hover:bg-blue-600 p-2 rounded block" onClick={handleAbout}>Create</button>

            </li>
             */}
             <li className="mb-4">
            <button  className="text-white text-lg w-full hover:bg-blue-600 p-2 rounded block" onClick={handleClassRoom}>My ClassRoom</button>
              
            </li>
            {/*<li className="mb-4">
            <button  className="text-white text-lg w-full hover:bg-blue-600 p-2 rounded block" onClick={handleProfile}>Profile</button>
              
            </li> */}
          </ul>
        </div>
        {/* Logout Button */}
        {/* <div className="mb-4">
          <button className="w-full text-white text-lg hover:bg-red-600 p-2 rounded block bg-red-500" onClick={handelSubscribe}>Subscribe</button>
        </div> */}
        <div className="mb-4">
          <button className="w-full text-white text-lg hover:bg-red-600 p-2 rounded block bg-red-500" onClick={handelOnClick}>Logout</button>
        </div>
      </nav>
      
    </div>
  );
};

export default Sidenavbar;
