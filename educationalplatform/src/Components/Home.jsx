import React from 'react'
import Sidenavbar from './Sidenavbar'
import { useEffect, useState } from 'react'
import axios from 'axios';
import MyCard from '../MyCard';

const Home = () => {
  const [data,setData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try{
            const response = await axios.get("http://localhost:8000/getMyCourse", {
                headers: {
                'Content-type': 'application/json'
                }
            });
            console.log(response.data)
            setData(response.data)
                }catch(err){
                    console.log(err)
        }
    }

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidenavbar/>
        <div className="flex-1 p-10 overflow-y-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full p-3 border rounded-lg"
            />
          </div>
          {data.map(item => (
            <MyCard key={item._id} id={item._id} img={item.img} video={item.videoUrl} title={item.title} desc={item.desc} trainer={item.trainer} price={item.price} duration={item.duration} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home