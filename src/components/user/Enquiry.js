import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
export default function Enquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [Loader, setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },2000)
  })

  const handleEnquiry=async(e)=>{
    setLoader(true)
     e.preventDefault();
     try{
       let data ={
        name:name,
        email:email,
        subject:subject,
        message:message,
        status:true,
        createdAt:Timestamp.now()
       }
       await addDoc(collection(db,"Enquiry"),data);
       toast.success("Enquiry submitted successfully");
       setName("");
       setEmail("");
       setMessage("");
       setSubject("");
     }
     catch(err){
        toast.error(err.message);
     }
      setLoader(false)
  }
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
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">Enquiry</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
      <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-8">
        <div className="form p-5">
          <h1 className='text-center text-primary'>Add Enquiry</h1>
          <form onSubmit={handleEnquiry}>
              <div className="row gx-4 gy-3">
                <label>Name</label>
              <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Name"
                    value={name}
                    onChange={(event)=>{setName(event.target.value)}}
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
                    onChange={(event)=>{setEmail(event.target.value)}}
                    required
                  />
                </div>
                <label>Subject</label>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Subject"
                    value={subject}
                    onChange={(event)=>{setSubject(event.target.value)}}
                    required
                  />
                </div>
                <label>Message</label>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0 py-3 px-4"
                    rows={7}
                    cols={10}
                    placeholder="Message"
                    defaultValue={""}
                    value={message}
                    onChange={(event)=>{setMessage(event.target.value)}}
                    required
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn-hover-bg btn btn-primary w-100 text-light py-3 px-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
      </div>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}}
