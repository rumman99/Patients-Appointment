import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/HomePage/Home/Home'
import GetAppointmentPage from './components/AppointmentPage/GetAppointment/GetAppointment'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import AllAppointments from './components/Dashboard/AllAppointments/AllAppointments'
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/appointment' element={<GetAppointmentPage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/allAppointments' element={<AllAppointments/>} />
      <Route path='/addDoctor' element={<AddDoctor/>} />
      <Route path='*' element={<h1 style={{color: 'red', textAlign: 'center', marginTop:'15%'}}>ERROR 404</h1>} />
    </Routes>
    </>
  )
}

export default App
