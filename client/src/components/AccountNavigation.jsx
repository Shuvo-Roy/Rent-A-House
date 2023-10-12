import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineUnorderedList, AiOutlineUser} from 'react-icons/ai'
import {HiOutlineBuildingLibrary} from 'react-icons/hi2'

export default function AccountNavigation() {
    const {pathname} = useLocation()
    let subpage=pathname.split('/')?.[2]
    if(subpage=== undefined){
      subpage = 'profile'
    }



    function linkClasses (type = null){
       
        let classes = 'inline-flex items-center gap-2 py-2 px-6 rounded-full';
        if(type === subpage){
          classes +=' bg-primary text-white';
        } else{
          classes +=' bg-gray-200 rounded-full';
        }
        return classes;
      }
  return (
    <nav className='w-full flex justify-center mt-8 mb-8 gap-2'>
        <Link className={linkClasses('profile')} to={'/account'}><AiOutlineUser/>My profile</Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}><AiOutlineUnorderedList/>My booking</Link>
        <Link className={linkClasses('places')} to={'/account/places'}><HiOutlineBuildingLibrary/>My accommodations</Link>
      </nav>
  )
}
