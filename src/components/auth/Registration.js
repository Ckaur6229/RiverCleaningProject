import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app, db } from '../../Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const nav=useNavigate();
  const addData= async(userId)=>{
    try{
      let data={
        Name:Name,
        email:email,
        contact:contact,
        address:address,
        userType:2,
        user_Id:userId,
        status:true,
        createdAt:Timestamp.now()
      }
      await setDoc(doc(db,"user",userId),data);
      toast.success("User Registered Successfully")
      nav("/")
    }
    catch(err){
       toast.error(err.message);
    }
  }
    const addGoogleData= async(userId,name,email)=>{
    try{
      let data={
        Name:name,
        email:email,
        userType:2,
        user_Id:userId,
        status:true,
        createdAt:Timestamp.now()
      }
      await setDoc(doc(db,"user",userId),data);
      toast.success("User Registered Successfully")
      nav("/user/userhome")
    }
    catch(err){
       toast.error(err.message);
    }
  }
  const getData=async(userId)=>{
    const docRef= doc(db,"user",userId)
    let docData=await getDoc(docRef)
    if(docData.exists()){
     const userData=docData.data()
     sessionStorage.setItem("name",userData.Name)
     sessionStorage.setItem("email",userData.email)
     sessionStorage.setItem("address",userData.address)
     sessionStorage.setItem("contact",userData.contact)
     sessionStorage.setItem("userId",userData.user_Id)
     sessionStorage.setItem("userType",userData.userType)
    }else{
     alert("No data found")
    }
  }
  const submitForm=(e)=>{
    e.preventDefault();
    const auth=getAuth(app);
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
      let userId=userCredentials.user.uid;
      addData(userId);
      getData(userId);
    })
    .catch((err)=>{
      toast.error(err.message);
    })
    setEmail("");
    setPassword("");
  }
  const registerGoogle=()=>{
    const googleProvider= new GoogleAuthProvider();
    const auth=getAuth(app);
    signInWithPopup(auth,googleProvider)
    .then((userCredentials)=>{
      let userId=userCredentials.user.uid;
      let name=userCredentials.user.displayName;
      let email=userCredentials.user.email;
      addGoogleData(userId,name,email);
    })
    .catch((err)=>{
      toast.error(err.message);
    })
  }
  return (
    <>
     {/* Header Start */}
     <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">Registration</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
       <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-6">
        <div className="form p-5">
          <h1 className='text-center text-primary pb-3'>Registration</h1>
          <form onSubmit={submitForm} method='post'>
           <div className="row gx-4 gy-3 pt-3">
                   <label>Name</label>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Name"
                    value={Name}
                    onChange={(e)=>{setName(e.target.value)}}
                    required
                  />
                </div>
                <label>Email</label>
                <div className="col-xl-12">
                  <input
                    type="email"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                  />
                </div>
                <label>Password</label>
                <div className="col-xl-12">
                  <input
                    type="password"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                  />
                </div>
                <label>Contact Number</label>
                <div className="col-xl-12">
                  <input
                    type="number"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e)=>{
                      if(e.target.value.length<=10){
                      setContact(e.target.value)
                      }
                    }}
                    minLength={10}
                    maxLength={10}
                    required
                  />
                </div>
                <label>Address</label>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0 py-3 px-4"
                    rows={7}
                    cols={10}
                    placeholder="Address"
                    defaultValue={""}
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                    required
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
                <p className='text-center'>or</p>
                <div className="col-12">
                  <button
                    className="btn-hover-bg btn w-100 py-3 px-5 border border-dark"
                    type="button"
                    onClick={registerGoogle}
                  >
                     <img src="/assets/img/googleIcon.png" className='pe-3' width="50px"/>
                    Register with Google
                  </button>
                </div>
                </div>
            </form>
            <p className='pt-3'>Already have an account?<span className='text-primary'><Link to="/login">Login</Link></span></p>
      </div>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}
