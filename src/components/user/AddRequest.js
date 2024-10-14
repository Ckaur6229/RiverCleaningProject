import { addDoc, collection, doc, getDoc, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import moment from "moment";
import { BeatLoader } from "react-spinners";
export default function AddRequest() {
  const [name, setName] = useState("");
  const [requestDate, setRequestdate] = useState("");
  const [driveTitle, setDriveTitle] = useState("");
  const [Loader, setLoader] = useState(false)
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const reqRef = doc(db, "Drives", id);
    const reqDoc = await getDoc(reqRef);
    console.log(reqDoc.data());
    if (reqDoc.exists()) {
      const reqData = reqDoc.data();
      setDriveTitle(reqData.title);
      setName(sessionStorage.getItem("name"));
    } else {
      console.log("not found");
      toast.error("Data not found!!");
    }
  };
  const handleEnquiry = async (e) => {
    e.preventDefault();
    setLoader(true)
    try {
      let data = {
        name: name,
        requestDate: requestDate,
        driveTitle: driveTitle,
        status: true,
        createdAt: Timestamp.now(),
      };
      await addDoc(collection(db, "Requests"), data);
      toast.success("Request submitted successfully");
      setName("");
      setRequestdate("");
      setDriveTitle("");
    } catch (err) {
      toast.error(err.message);
    }
      setLoader(false)
  };
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
          <h3 className="text-white display-3 mb-4">
            Request for Participation
          </h3>
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
                <h1 className="text-center text-primary">Add Request</h1>
                <form onSubmit={handleEnquiry}>
                  <div className="row gx-4 gy-3">
                    <label>Name</label>
                    <div className="col-xl-12">
                      <input
                        type="text"
                        className="form-control bg-white border-0 py-3 px-4"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        required
                      />
                    </div>
                    <label>Date</label>
                    <div className="col-xl-12">
                      <input
                        type="date"
                        className="form-control bg-white border-0 py-3 px-4"
                        placeholder="enter date"
                        value={requestDate}
                        onChange={(event) => {
                          setRequestdate(event.target.value);
                        }}
                        required
                      />
                    </div>
                    <label>Drive Title</label>
                    <div className="col-xl-12">
                      <input
                        type="text"
                        className="form-control bg-white border-0 py-3 px-4"
                        placeholder="Enter drive title"
                        value={driveTitle}
                        onChange={(event) => {
                          setDriveTitle(event.target.value);
                        }}
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
  );
}}
