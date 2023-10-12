import React from 'react'
import { FiMapPin } from "react-icons/fi";
export default function AddressLink({children,className=null}) {

    if(!className){
        className= 'my-3 block'
    }
    className +=' flex gap-1 items-center font-semibold underline'

    

  return (
    <a
        className={className}
        target="_blank"
        href={"http://maps.google.com/?q="+children}
      >
        <FiMapPin />
        {children}
      </a>
  )
}
