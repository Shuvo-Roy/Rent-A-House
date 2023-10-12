import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import MyPlaces from './MyPlaces'
import AccountNavigation from '../components/AccountNavigation'
import UserInfo from '../components/UserInfo'


export default function ProfilePage() {
  const {ready,user, setUser} = useContext(UserContext)
  const [redirect, setRedirect] = useState(null)
  


  //logout
  async function logout(){
    await axios.post('user/logout')
    setUser(null)
    setRedirect('/')
  }
  let {subpage} = useParams()
  if(!ready){
    return 'Loading'
  }
  if(ready && !user && !redirect){
    return <Navigate to={'/login'}/>
  }
  if(subpage === undefined){
    subpage= 'profile'
  }

  if(redirect){
    return <Navigate to={redirect}/>
  }
  
  
  return (
    <div>
    <AccountNavigation/>
      {subpage === 'profile' &&(
        <div className='flex flex-col items-center justify-center'>
        <UserInfo user={user}/>
          {/* Logged in  as {user.name} ({user.email}) <br/> */}
          <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
        </div>
      )
      }
      {subpage ==='places' &&(
        <MyPlaces/>
      )}



    </div>
  )
}
