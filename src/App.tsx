
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
