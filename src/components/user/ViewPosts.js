import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase";
import { BeatLoader } from "react-spinners";

export default function ViewPosts() {
  const [Posts, setPosts] = useState([]);
  const [Loader, setLoader] = useState(false)
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    setLoader(true)
    const Query = query(collection(db, "post"),orderBy("createdAt","desc"));
    onSnapshot(Query,doc=>{
      const filteredPosts=doc.docs.filter((elem)=>(elem.data().status==true))
      .map((elem) => ({ id: elem.id, data: elem.data() }));
      setPosts(filteredPosts)
      setTimeout(()=>{
        setLoader(false)
      },1000)
    })
  };
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">Posts</h3>
          <p className="fs-5 text-white mb-4">
            Let's make the rivers pure and beautiful!
          </p>
        </div>
      </div>
      {/* Header End */}
      {Loader?(<div
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
        </div>):
      <div className="container">
        <div className="row my-5 text-center">
          {Posts.map((post, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto"
              key={index}
            >
              <div
                className="card my-2"
                style={{ boxShadow: "5px 5px 5px", borderRadius: "8px" }}
              >
                <img
                  src={post?.data?.image}
                  className="card-img-top"
                  style={{ borderRadius: "8px" }}
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">{post?.data?.driveTitle}</h5>
                  <p className="card-text">{post?.data?.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
}
    </>
  );
}
