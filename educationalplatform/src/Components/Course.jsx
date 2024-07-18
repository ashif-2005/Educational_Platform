import React, { useEffect, useState } from 'react'
import Sidenavbar from './Sidenavbar'
import CourseCard from './CourseCard'
import axios from 'axios';
const Course = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try{
            const response = await axios.get("http://localhost:8000/getClassRoom", {
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

    // console.log(data)

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <Sidenavbar />
                <div className="flex-1 p-10  overflow-y-auto">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full p-3 border mb-10 rounded-lg"
                        />
                        <div className='flex flex-row gap-5 w-full pl-3 flex-wrap'>
                        {data.map(item => (
                            <CourseCard key={item._id} img={item.imgUrl} trainer={item.trainerName} desc={item.desc}/>
                        ))}
                        </div>
                        
                    </div>


                </div>
            </div>
        </>
    )
}

export default Course