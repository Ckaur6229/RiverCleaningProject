import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Master() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
