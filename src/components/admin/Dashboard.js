import { collection, getCountFromServer, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { BeatLoader } from "react-spinners";

export default function Dashboard() {
    const [users, setUsers] = useState(0)
    const [drives, setDrives] = useState(0)
    const [posts, setPosts] = useState(0)
    const [requests, setRequests] = useState(0)
    const [enquiries, setEnquiries] = useState(0)
    const [Loader, setLoader] = useState(true)
    useEffect(() => {
       getUserCount();
       getDriveCount();
       getPostCount();
       getRequestCount();
       getEnquiryCount(); 
    }, [])

    const getUserCount=async ()=>{
        let ref=collection(db,"user")
        let que = query(ref, where("userType", "==", 2));
        let user=await getCountFromServer(que)
        setUsers(user.data().count)
    }
    const getDriveCount=async ()=>{
        let ref=collection(db,"Drives")
        let drive=await getCountFromServer(ref)
        setDrives(drive.data().count)
    }
    const getPostCount=async ()=>{
        let ref=collection(db,"post")
        let post=await getCountFromServer(ref)
        setPosts(post.data().count)
    }
    const getRequestCount=async ()=>{
        let ref=collection(db,"Requests")
        let req=await getCountFromServer(ref)
        setRequests(req.data().count)
    }
    const getEnquiryCount=async ()=>{
        let ref=collection(db,"Enquiry")
        let enq=await getCountFromServer(ref)
        setEnquiries(enq.data().count)
    }
    setTimeout(()=>{
      setLoader(false)
    },2000)
    if(Loader==true){
      return(
        <>
            <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999
            }}
          >
            <BeatLoader color="rgb(7, 137, 177)" loading={Loader} size={20} />
          </div>
        </>
      )
    }
    else{
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" >
          <h3 className="text-white display-3 mb-4">Dashboard</h3>
        </div>
      </div>
      {/* Header End */}
      <div className="container ">
        <div className="row my-5 text-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
            >
              <div
                className="card my-2"
                style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" ,width:"12rem"}}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">Users</h5>
                  <h1 className="card-text">{users}</h1>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
            >
              <div
                className="card my-2"
                style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" ,width:"12rem"}}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">Cleaning Drives</h5>
                  <h1 className="card-text">{drives}</h1>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
            >
              <div
                className="card my-2"
                style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" ,width:"12rem"}}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">Posts</h5>
                  <h1 className="card-text">{posts}</h1>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
            >
              <div
                className="card my-2"
                style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" ,width:"12rem"}}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">Requests</h5>
                  <h1 className="card-text">{requests}</h1>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
            >
              <div
                className="card my-2"
                style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" ,width:"12rem"}}
              >
                <div className="card-body">
                  <h5 className="card-title text-primary">Enquiries</h5>
                  <h1 className="card-text">{enquiries}</h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}}
