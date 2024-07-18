import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Sidenavbar from './Components/Sidenavbar';
import Card from './Components/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainerCourse = () => {
    const trainer = useParams();

    const [data,setData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        let course = [];
        try{
            const response = await axios.get("http://localhost:8000/getCourse", {
                headers: {
                'Content-type': 'application/json'
                }
            });
            response.data.forEach((item)=>{
                // console.log(item, trainer)
                if(item.trainer === trainer.id){
                    console.log("this is i",item) 
                    course.push(item)
                }
            })
            setData(course)
        }catch(err){
            console.log(err)
        }
    }

    console.log(data )

  return (
    <>
    <ToastContainer />
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
          {
          data?data.map(item => (
            <Card key={item._id} id={item._id} img={item.img} video={item.videoUrl} title={item.title} desc={item.desc} trainer={item.trainer} price={item.price} duration={item.duration} />
          )):<></>}
        </div>
      </div>
    </>
  )
}

export default TrainerCourse
