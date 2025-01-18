
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes } from 'react-router'
import Home from './pages/Home'
import Trending from './pages/Trending'
import MostPopular from './pages/MostPopular'
import About from './pages/About'
import Login from './pages/Login'

function App() {
  return (
    <>
      <div className='px-4 md:px-8 xl:px-32 2xl:px-64'>
        <Navbar/>
      </div>
      <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/trending" element={<Trending/>}/>
          <Route path ="/mostPopular" element={<MostPopular/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/login" element={<Login/>}/>
      </Routes>

     </>
  )
}

export default App
