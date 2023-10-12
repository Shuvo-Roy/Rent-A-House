import React from 'react'
import { differenceInCalendarDays, format } from 'date-fns'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FcNightLandscape } from 'react-icons/fc'
export default function ({booking}) {
  return (
    <div>
        <div className='flex items-center gap-2 mt-2 py-2 border-t border-gray-300'>
          <AiOutlineCalendar/>{format(new Date (booking.checkIn),'dd-MM-yyyy')} &rarr;  <AiOutlineCalendar/>{format(new Date (booking.checkOut),'dd-MM-yyyy')}
        </div>
        <div className='text-xl flex gap-2 '>
          <p className='flex items-center gap-2 pr-3 border-r border-gray-500'><FcNightLandscape/> {differenceInCalendarDays(new Date(booking.checkOut),new Date(booking.checkIn))} Nights</p>
          <p>Total price: $ {booking.price}</p>
          
        </div>

    </div>
  )
}
