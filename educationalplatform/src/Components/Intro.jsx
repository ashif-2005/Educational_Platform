import React from 'react'
import { useNavigate} from 'react-router-dom'
import image from './BEST.png'

const Intro = () => {
    const navigate = useNavigate()
    const handleLogin= () =>{
        console.log("hello")
        navigate('/login')
    }
  return (
    <div className="font-sans">
      <nav className="bg-blue-500 text-white p-3 flex">
        <div className="container mx-auto flex  items-center">
          <img src={image} alt="sample" className='mr-5 h-12 w-12 rounded-md' />
          <div className="text-2xl font-bold">EduPlatform</div>
        </div>
        <div className='flex items-center'>
          <p className='mr-5 hover:border-b-2'>Login</p>
          <p className='mr-5 hover:border-b-2'>Signup</p>
          <p className='mr-5 hover:border-b-2'>About</p>
          <p className='mr-5 hover:border-b-2'>Services</p>
        </div>
      </nav>
      <section className="text-center py-20 h-[340px]">
        <div className="container mx-auto self-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to EduPlatform</h1>
          <p className="text-lg mb-8">Your path to a brighter future starts here. Explore our courses and join our community of learners.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleLogin}>Get Started</button>
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="bg-white p-6 rounded shadow-md w-64 mb-4 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Expert Instructors</h3>
              <p className="text-gray-700">Learn from industry leaders with real-world experience.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md w-64 mb-4 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Flexible Learning</h3>
              <p className="text-gray-700">Access courses anytime, anywhere, and learn at your own pace.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md w-64 mb-4 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-700">Join a community of learners and get support from peers and mentors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro