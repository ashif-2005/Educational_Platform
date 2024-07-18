import React, { useEffect, useState } from 'react'
import Sidenavbar from './Sidenavbar'
import { useUser } from './UseContext'
import axios from 'axios'
import ClassRoomCard from './ClassRoomCard'
import { useNavigate } from 'react-router-dom';
// import { useUser } from './UseContext';

const MyClassRoom = () => {
    const [data,setData] = useState([])
    const [status,setStatus] = useState(false)
    const [createModel,setCreateModel] = useState(false)
    const [uploadModel,setUploadModel] = useState(false)
    const [trainer,setTrainer] = useState("Trainer Name")
    const [desc,setDesc] = useState("Your Description")
    const [img,setImg] = useState("Your Image Url")
    const [videoUrl,setVideoUrl] = useState("Your video url")
    const [title,setTitle] = useState("Your Title")
    const [d,setD] = useState("Your Description")
    const [price,setPrice] = useState(0)
    const [duration,setDuration] = useState(0)
    const [image,setImage] = useState("Image Url")
    const [isSub,setIsSub] = useState(false)

    const {userId} = useUser()
    const navigate = useNavigate()

    const getData = async()=>{
        let course = []
        const response = await axios.get("http://localhost:8000/getClassRoom", {
                headers: {
                'Content-type': 'application/json'
                }
            });
            response.data.forEach((item)=>{
                if(item.trainerName === userId){
                    setStatus(true)
                }
            })
            const res = await axios.get("http://localhost:8000/getCourse", {
                headers: {
                'Content-type': 'application/json'
                }
            });
            res.data.forEach((item)=>{
                // console.log(item, trainer)
                if(item.trainer === userId){
                    console.log(item)
                    course.push(item)
                }
            })
            setData(course)
    }

    const handelOnClick = ()=>{
        console.log("create function")
        setCreateModel(true)
    }

    const closeCreateModal = ()=>{
        setCreateModel(false)
    }

    const handelSave = async(e) =>{
        e.preventDefault()
        const response = await axios.post("http://localhost:8000/create", {trainerName:trainer,desc:desc,imgUrl:img},{
            headers: {
            'Content-type': 'application/json'
            }
        });
        setCreateModel(false)
        navigate('/Home')
    }

    const handelUpload = async () =>{
        setUploadModel(true)
    }

    const closeUploadModal = ()=>{
        setUploadModel(false)
    }

    const Upload =async () => {
        const response = await axios.post("http://localhost:8000/upload", {
            videoUrl:videoUrl,
            title:title,
            desc:d,
            trainer:userId,
            price:price,
            duration:duration,
            img:image
        },{
            headers: {
            'Content-type': 'application/json'
            }
        });
        setUploadModel(false)
    }

    const checkIsSub = async()=>{
        const response = await axios.post("http://localhost:8000/isSub", {name:userId},{
            headers: {
            'Content-type': 'application/json'
            }
        });
        // console.log(response.data)
        setIsSub(response.data.isSub)
    }
    
    useEffect(()=>{
        getData()
        checkIsSub()
    },[])
    
  return (
    <div className="flex relative h-screen bg-gray-100">
    <Sidenavbar />
    <div className='w-full flex flex-col justify-center items-center'>
        {
            status?data.map(item => (
                <div>
                <ClassRoomCard key={item._id} id={item._id} img={item.img} video={item.videoUrl} title={item.title} desc={item.desc} trainer={item.trainer} price={item.price} duration={item.duration} />
                </div>
              ))
              :<button className='w-[200px] h-[50px] bg-blue-900 rounded-lg text-white' onClick={handelOnClick}>Create ClassRooom</button>
        }
    </div>
    
    {createModel ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white rounded-lg p-5 h-[350px] w-[300px]">
            <h2 className="text-lg font-semibold mb-4">Create Classroom</h2>
            <form >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        name="Trainer Name"
                        value={trainer}
                        onChange={(e)=>setTrainer(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
    
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="text"
                        name="desc"
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                    <input
                        type="text"
                        name="ing url"
                        value={img}
                        onChange={(e)=>setImg(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="button" className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200" onClick={closeCreateModal}>Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" onClick={handelSave}>Save</button>
                </div>
            </form>
        </div>
        </div>
    ):<></>}
    {uploadModel ?
     isSub?(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white rounded-lg p-5 h-[550px] w-[300px]">
            <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
            <form >
            <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        name="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
    
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="text"
                        name="desc"
                        value={d}
                        onChange={(e)=>setD(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                    <input
                        type="text"
                        name="ing url"
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="number"
                        name="0"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                    <input
                        type="number"
                        name="0"
                        value={duration}
                        onChange={(e)=>setDuration(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Video Url</label>
                    <input
                        type="text"
                        name="Your Video Url"
                        value={videoUrl}
                        onChange={(e)=>setVideoUrl(e.target.value)}
                        className="form-input mt-1 block w-full border-black"
                    />
                </div>
                <div className="flex justify-end">
                    <button type="button" className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200" onClick={closeUploadModal}>Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" onClick={Upload}>Save</button>
                </div>
            </form>
        </div>
        </div>
    ):<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div className="bg-white rounded-lg p-5 h-[550px] w-[300px]">
        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
        <form >
        <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                    type="text"
                    name="Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className="form-input mt-1 block w-full border-black"

                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <input
                    type="text"
                    name="desc"
                    value={d}
                    onChange={(e)=>setD(e.target.value)}
                    className="form-input mt-1 block w-full border-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                <input
                    type="text"
                    name="ing url"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    className="form-input mt-1 block w-full border-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                <input
                    type="number"
                    name="0"
                    value={duration}
                    onChange={(e)=>setDuration(e.target.value)}
                    className="form-input mt-1 block w-full border-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Video Url</label>
                <input
                    type="text"
                    name="Your Video Url"
                    value={videoUrl}
                    onChange={(e)=>setVideoUrl(e.target.value)}
                    className="form-input mt-1 block w-full border-black"
                />
            </div>
            <div className="flex justify-end">
                <button type="button" className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200" onClick={closeUploadModal}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" onClick={Upload}>Save</button>
            </div>
        </form>
    </div>
    </div>:<></>}
    <button className='absolute bottom-14 right-20 bg-blue-500 p-2 rounded-md' onClick={handelUpload}>Upload</button>
    </div>
  )
}

export default MyClassRoom