import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { db,auth} from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { BeatLoader } from 'react-spinners';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loader, setLoader] = useState(false)
  const nav=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault()
    setLoader(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredentails)=>{
     let user_id=userCredentails.user.uid
    const docRef= doc(db,"user",user_id)
    let docData=await getDoc(docRef)
    if(docData.exists() && docData.data().status===true){
     const userData=docData.data()
     console.log(userData)
     sessionStorage.setItem("userId",userData.user_Id)
     sessionStorage.setItem("userType",userData.userType)
     sessionStorage.setItem("email",userData.email)
     if(userData.userType===1){
      toast.success("admin logged in successfully");
       nav("/admin")
     }else{
      sessionStorage.setItem("name",userData.Name)
     // localStorage.setItem("name",userData.name)
     sessionStorage.setItem("address",userData.address)
     sessionStorage.setItem("contact",userData.contact)
     sessionStorage.setItem("createdAt",userData.createdAt)
     sessionStorage.setItem("image",userData.image)
      toast.success("user logged in successfully");
       nav("/")
     }
    }else{
     toast.error("User not found")
    }
    }).catch((err)=>{
     console.log(err);
     toast.error(err.message)
    }) .finally(() => {
      setLoader(false); 
    });
    setEmail("");
    setPassword("");
  }
  if(Loader===true){
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
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">Login</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
       {/* Login Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-5">
        <div className="form p-5">
          <h1 className='text-center text-primary'>Login</h1>
          <form onSubmit={handleLogin}>
              <div className="row gx-4 gy-3">
                <div className="col-xl-12">
                  <input
                    type="email"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Email"
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                  />
                </div>
                <div className="col-xl-12">
                  <input
                    type="password"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Password"
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn-hover-bg btn btn-primary text-light w-100 py-3 px-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p className='pt-3'>Don't have an account?<span className='text-primary'><Link to="/registration">Register</Link></span></p>
      </div>
        </div>
      </div>
    </div>
      </div>

  {/* Login End */}
    </>
  )
}}
