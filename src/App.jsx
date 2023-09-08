import './App.css'
import NavBar from './components/NavBar'
import Recipes from './components/Recipes'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipes' element={<Recipes/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
