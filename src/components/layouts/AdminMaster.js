import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import { toast } from 'react-toastify'
import AdminFooter from './AdminFooter'
const email=sessionStorage.getItem("email")
export default function AdminMaster() {
  const email=sessionStorage.getItem("email")
  if(!email){
    toast.error("Please login")
    return <Navigate to={"/login"}/>
}
  return (
    <>
      <AdminHeader/>
      <Outlet/>
      <AdminFooter/>
    </>
  )
}
