import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-50'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
