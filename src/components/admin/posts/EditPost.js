import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../../Firebase";
import { BeatLoader } from "react-spinners";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState("")
  const [Loader, setLoader] = useState(false)
  const { id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const [previousImage, setPreviousImage] = useState("");
  const getData = async () => {
    const postRef = doc(db, "post", id);
    const postDoc = await getDoc(postRef);
    if (postDoc.exists()) {
      let postData = postDoc.data();
      setTitle(postData.driveTitle);
      setDetails(postData.details);
      setPreviousImage(postData.image);
    } else {
      toast.error("Data doesn't exists");
    }
  };

  const changeImage = (e) => {
    setFileName(e.target.value);
    setFile(e.target.files[0]);
  };
  const submitPost = (e) => {
    e.preventDefault();
    setLoader(true)
    if (!fileName) {
      saveData();
    } else {
      const storageRef = ref(storage, "postImages/" + fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
        },
        (error) => {
          console.log(error);
          setLoader(false)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUrl(downloadURL);
          });
        }
      );
    }
  };
  useEffect(() => {
    if (!!url) {
      saveData();
    }
  }, [url]);
  const saveData = async () => {
    try {
      let data = {
        driveTitle: title,
        details: details,
        status: true,
        createdAt: Timestamp.now(),
      };
      if (!!url) {
        data.image = url;
      }
      // console.log(data);
      console.log(data);
      let postRef = doc(db, "post", id);
      await updateDoc(postRef, data);
      toast.success("Data updated");
      nav("/admin/managepost");
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
          <h3 className="text-white display-3 mb-4">Edit Posts</h3>
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
                <h1 className="text-center text-primary">Edit Post</h1>
                <form onSubmit={submitPost}>
                  <div className="row gx-4 gy-3">
                    <label>Drive Title</label>
                    <div className="col-xl-12">
                      <input
                        type="text"
                        className="form-control bg-white border-0 py-3 px-4"
                        placeholder="title"
                        value={title}
                        onChange={(event) => {
                          setTitle(event.target.value);
                        }}
                        required
                      />
                    </div>
                    <label>Image</label>
                    <div className="col-xl-12">
                      <input
                        type="file"
                        className="form-control bg-white border-0 py-3 px-4"
                        value={fileName}
                        onChange={changeImage}
                      />
                    </div>
                    <img
                      src={previousImage}
                      style={{ height: "100px", width: "100px" }}
                    />
                    <label>Details</label>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-white border-0 py-3 px-4"
                        rows={7}
                        cols={10}
                        placeholder="details"
                        defaultValue={""}
                        value={details}
                        onChange={(event) => {
                          setDetails(event.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn-hover-bg btn btn-primary w-100 text-light py-3 px-5"
                        type="submit"
                      >
                        Edit
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
