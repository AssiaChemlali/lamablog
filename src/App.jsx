
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes } from 'react-router'
import Home from './pages/Home'
import Trending from './pages/Trending'
import MostPopular from './pages/MostPopular'
import About from './pages/About'
import Login from './pages/Login'
import Posts from './pages/Posts'
import Write from './pages/Write'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'
import MainLayout from './components/MainLayout'
function App() {
  return (
    <>
      {/* <div className='px-4 md:px-8 xl:px-32 2xl:px-64'>
        <Navbar/>
      </div> */}
      <Routes>
          <Route  element={<MainLayout/>}>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/posts" element={<Posts/>}/>
            <Route path ="/:slug" element={<SinglePost/>}/>
            <Route path ="/write" element={<Write/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element={<Register/>}/>
            <Route path ="/trending" element={<Trending/>}/>
            <Route path ="/mostPopular" element={<MostPopular/>}/>
            <Route path ="/about" element={<About/>}/>
          </Route>
      </Routes>

     </>
  )
}

export default App
