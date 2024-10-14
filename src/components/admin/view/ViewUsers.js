import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true)
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const Query = query(collection(db, "user"), orderBy("createdAt","desc"));
    onSnapshot(Query, (doc) => {
      setUsers(
        doc.docs.map((elem, index) => {
          return { id: elem.id, data: elem.data() };
        })
      );
      setTimeout(()=>{
        setLoader(false)
      },1000)
    });
  };
  const getDate = (date) => {
    let date1 = date?.toDate();
    return moment(date1).format("MMMM Do, YYYY");
  };
  const updateStatus=async (id,status)=>{
  if(status===true){
    if (window.confirm("Do you want to unblock user?")) {
      try{
        const docRef=doc(db,"user",id)
        let data={
          status:status
        }
       await updateDoc(docRef,data)
       toast.success("Status updated")
      }
    catch(err){
      console.log(err);
      toast.error("Internal server error")
    }
    }
  }
  else{
    if (window.confirm("Do you want to block user?")) {
      try{
        const docRef=doc(db,"user",id)
        let data={
          status:status
        }
       await updateDoc(docRef,data)
       toast.success("Status updated")
      }
    catch(err){
      console.log(err);
      toast.error("Internal server error")
    }
    }
  }
  }
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
          <h3 className="text-white display-3 mb-4">Users</h3>
          <p className="fs-5 text-white mb-4">
            Let's make the rivers pure and beautiful!
          </p>
        </div>
      </div>
      {/* Header End */}
      <div className="container my-5 table-responsive">
      {users.length===0?
      (<div className='text-center'>
        <h1>No Data Available</h1>
      </div>):
         (
        <table className="table table-custom">
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th scope="col">S no.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Status</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {users?.map((current, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{current?.data?.Name}</td>
                <td>{current?.data?.email}</td>
                <td>{current?.data?.address}</td>
                <td>{current?.data?.contact}</td>
                <td>{current?.data?.status == true ? "true" : "false"}</td>
                <td>{getDate(current?.data?.createdAt)}</td>
                <td>
                  {current?.data?.status == true ? (
                    <button
                      className="btn btn-primary btn-sm me-2 text-white rounded"
                      onClick={() => {
                        updateStatus(current.id, false);
                      }}
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger btn-sm me-2 text-white rounded"
                      onClick={() => {
                        updateStatus(current.id, true);
                      }}
                    >
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         )}
      </div>
    </>
  );
}}
