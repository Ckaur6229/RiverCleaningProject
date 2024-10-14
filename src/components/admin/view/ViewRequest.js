import { collection, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

export default function ViewRequest() {
  const [request, setRequest] = useState([]);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true)
    getAllRequests();
  }, []);

  const getAllRequests = async () => {
    const Query = query(collection(db, "Requests")
    ,orderBy("createdAt","desc")
    );
    onSnapshot(Query,doc=>{
      setRequest(
        doc.docs.map((elem,index)=>{
          return {id:elem.id, data:elem.data()} 
        })
      )
      setTimeout(()=>{
        setLoader(false)
      },1000)
    })
  }
  const getDate=(date)=>{
    let date1=date?.toDate()
    return moment(date1).format("MMMM Do, YYYY")
}
const updateStatus = async (id, status,Slots,driveId) => {
  if(status===2){
    if (window.confirm("Do you want to accept user's request?")) {
      try { 
        const docRef = doc(db, "Requests", id);
        let data = {
          status: status,
        };
        await updateDoc(docRef, data);
        await updateDoc(docRef, data);
        let driveRef=doc(db,"Drives",driveId);
        let driveData = {
          availableSlots: Slots > 0 ? Slots - 1 : 0,
        };
        await updateDoc(driveRef, driveData);
        toast.success("Data updated");
      } catch (err) {
        console.log(err);
        toast.error("Internal server error");
      }
    }
  }
  else{
    if (window.confirm("Do you want to decline user's request?")) {
      try { 
        const docRef = doc(db, "Requests", id);
        let data = {
          status: status,
        };
        await updateDoc(docRef, data);
        toast.success("Data updated");
      } catch (err) {
        console.log(err);
        toast.error("Internal server error");
      }
    }
  }
};
if (Loader) {
  return (
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
        zIndex: 9999,
      }}
    >
      <BeatLoader color="rgb(7, 137, 177)" loading={Loader} size={20} />
    </div>
  );
} else {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">Requests</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
    <div className="container my-5 table-responsive">
    {request.length===0?
      (<div className='text-center'>
        <h1>No Data Available</h1>
      </div>):
         (
        <table className="table table-custom">
          <thead style={{textAlign:"center"}}>
            <tr>
              <th scope="col">S no.</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Drive Title</th>
              <th scope="col">Status</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody style={{textAlign:"center"}}>
            {
              request?.map((current,index)=>(
                <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{current?.data?.userName}</td>
              <td>{current?.data?.userEmail}</td>
              <td>{current?.data?.driveTitle}</td>
              <td>{current?.data?.status == 2 ? "Approved" : current.data.status==3?"Decline":"Pending"}</td>
              <td>{getDate(current?.data?.createdAt)}</td>
              <td>
                  {current?.data?.status == 2 ? (
                    <i
                      className="fa fa-check"
                      style={{color:"green"}}
                    >
                    </i>
                  ) : current?.data?.status == 3 ?(
                    <i
                      className="fa fa-times"
                      style={{color:"red"}}
                    >
                    </i>
                  ):
                  <div className='d-flex '>
                  <button className="btn btn-primary btn-sm me-2 text-white rounded" 
                   onClick={() => {
                    updateStatus(current.id, 2,current?.data?.availableSlots,current?.data?.driveId);
                  }}
                >Accept</button>
                <button className="btn btn-outline-primary btn-sm"  onClick={() => {
                    updateStatus(current.id, 3,current?.data?.availableSlots,current?.data?.driveId);
                  }}>Decline</button>
                  </div>
                }
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
         )}
      </div>
    </>
  )
}}
