
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import ContactUS from './Pages/ContactUS'
import OurProjects from './Pages/OurProjects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/our-projects' element={<OurProjects />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUS />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
