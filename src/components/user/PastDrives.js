import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function PastDrives() {
  const [Drives, setDrives] = useState([]);
  const [Loader, setLoader] = useState(false);

  const getAllDrives = () => {
    setLoader(true);

    const Query = query(collection(db, "Drives"), orderBy("createdAt", "desc"));
    onSnapshot(Query, (doc) => {
      const today = new Date().toISOString().split("T")[0]; 
      const filteredDrives = doc.docs
        .filter(
          (elem) => elem.data().status === true && elem.data().date < today
        )
        .map((elem) => ({ id: elem.id, data: elem.data() }));
      setDrives(filteredDrives)
      setTimeout(()=>{
        setLoader(false)
      },1000)
    }, (error) => {
      console.error("Error fetching drives:", error);
      setTimeout(()=>{
        setLoader(false)
      },1000)
    });
    setTimeout(()=>{
      setLoader(false)
    },1000)
      
  };

  useEffect(() => {
    getAllDrives();
  }, []);
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">
            Past Drives
          </h3>
          <p className="fs-5 text-white mb-4">
            Let's make the rivers pure and beautiful!
          </p>
        </div>
      </div>
      {/* Header End */}

      {Loader ? (
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
      ) : (
        <div className="container">
          <div className="row my-5 text-center">
            {Drives?.map((current, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
                key={index}
              >
                <div
                  className="card my-2"
                  style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" }}
                >
                  <img
                    src={current?.data?.image}
                    className="card-img-top"
                    style={{ borderRadius: "8px" }}
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary ">
                      {current?.data?.title}
                    </h5>
                    <p className="card-text ">Date : {current?.data?.date}</p>
                    <p className="card-text">
                      Members Required : {current?.data?.members}
                    </p>
                    <p className="card-text">
                      Area Occupied : {current?.data?.area}
                    </p>
                    <p className="card-text">
                      Available Slots : {current?.data?.availableSlots}
                    </p>
                    <p className="card-text">
                      Location : {current?.data?.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
