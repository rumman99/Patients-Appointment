import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/HomePage/Home/Home'
import GetAppointmentPage from './components/GetAppointmentPage/GetAppointmentPage'
import Navbar from './components/Shared/Navbar/Navbar'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/appointment' element={<GetAppointmentPage/>} />
    </Routes>
    </>
  )
}

export default App
