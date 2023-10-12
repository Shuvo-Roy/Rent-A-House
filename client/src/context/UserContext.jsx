import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const UserContext = createContext({})

export function UserContextProvider({children}) {

  const [ready,setReady] = useState(false)
    const [user, setUser] = useState(null)
    useEffect(()=>{
      if(!user){
        axios.get('user/profile').then(({data})=>{
          setUser(data)
          setReady(true)
        })
        
      }
    },[])

  return (
    <UserContext.Provider value={{user,setUser, ready}}>
        {children}
    </UserContext.Provider>
    
  )
}
