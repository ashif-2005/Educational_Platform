// import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Intro from './Components/Intro';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import Profile from './Components/Profile';
import Course from './Components/Course';
import Contact from './Components/Contact';
import CourseviewPage from './Components/CourseviewPage';
import TrainerCourse from './TrainerCourse';
import MyClassRoom from './Components/MyClassRoom'

function App() {

  const route = createBrowserRouter([
   
    {
      path:'/',
      element:<Intro/>
    },
    {
      path:'/Home',
      element:<Course/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/Course',
      element:<Home/>
    },
    {
      path:'/Profile',
      element:<Profile/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/ClassRoom',
      element:<MyClassRoom/>
    },{
      path:'/courses',
      element:<CourseviewPage/>
    },
    {
      path:'/Course/:id',
      element:<TrainerCourse />
    },
    {
      path:'/courses/:url',
      element:<CourseviewPage />
    }
  ]
  )
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
     
  );
}

export default App;