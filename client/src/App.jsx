import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import axios from 'axios'
import { UserContextProvider } from './context/UserContext'
import BookingsPage from './pages/BookingsPage'
import Booking from './pages/Booking'
import IndexPage from './pages/IndexPage'
import PlaceView from './pages/PlaceView'
import MyPlaces from './pages/MyPlaces'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import PlacesFormPage from './pages/PlacesFormPage'
import { createContext, useContext, useState } from 'react'




axios.defaults.baseURL='http://127.0.0.1:4000';
axios.defaults.withCredentials=true;

const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContextProvider value={{ user, setUser }}>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<IndexPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/account' element={<ProfilePage/>}/>
      <Route path='/account/places' element={<MyPlaces/>}/>
      <Route path='/account/places/new' element={<PlacesFormPage/>}/>
      <Route path='/account/places/:id' element={<PlacesFormPage/>}/>
      <Route path='/place/:id' element={<PlaceView/>}/>
      <Route path='/account/bookings' element={<BookingsPage/>}/>
      <Route path='/account/bookings/:id' element={<Booking/>}/>
      
    </Route>
      
    </Routes>
    </UserContextProvider>
  )
}
export function useUserContext() {
  return useContext(UserContext);
}

export default App
