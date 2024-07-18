import React, { useEffect, useState } from 'react'
// import course from './courselogo.jpg'
import Sidenavbar from './Sidenavbar'
// import v from './project_expo.mp4'
import ReactPlayer from 'react-player';
import { useParams } from "react-router-dom";
import axios from 'axios';
const CourseviewPage = () => {
    const data = useParams();

    console.log(data.url)

    const [url,setUrl] = useState({})

    const getData = async()=>{
        const response = await axios.get("http://localhost:8000/getMyCourse", {
                headers: {
                'Content-type': 'application/json'
                }
            });
            console.log(response.data)
            response.data.forEach((item)=>{
                if(item._id === data.url){
                    console.log(item.videoUrl)
                    setUrl(item.videoUrl)
                }
            })
        // console.log(response.data)
        // setUrl(response.data)
    }

    useEffect(()=>{
        getData()
    },[data])
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidenavbar/>
        <div className="flex-1 p-10 overflow-y-auto">
        {/* Course Image */}
        {/* <video width="100%" controls>
            <source src = {v} type = "video/mp4" />
        </video> */}
        <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls={true} // Show player controls
        />
        {/* Course Details */}
        </div>
      </div>
  )
}

export default CourseviewPage