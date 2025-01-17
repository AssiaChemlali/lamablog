
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes } from 'react-router'
import Home from './pages/Home'
function App() {


  return (
    <>
      <div className='px-4 md:px-8 xl:px-32 2xl:px-64'>
        <Navbar/>
      </div>
      <Routes>
          <Route path ="/" element={<Home/>}/>
      </Routes>

     </>
  )
}

export default App
