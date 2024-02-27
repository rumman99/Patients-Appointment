import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/HomePage/Home/Home'
import GetAppointmentPage from './components/AppointmentPage/GetAppointment/GetAppointment'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/appointment' element={<GetAppointmentPage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App
