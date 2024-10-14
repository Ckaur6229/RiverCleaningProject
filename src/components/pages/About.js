import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

export default function About() {
  const [Loader, setLoader] = useState(true)
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },2000)
  })


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
        <h3 className="text-white display-3 mb-4">About Us</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
    {/* About Start */}
    <div className="container-fluid about  py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-5">
            <div className="h-100">
              <img
                src="/assets/img/about-1.jpg"
                className="img-fluid w-100 h-100"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <h5 className="text-uppercase text-primary mt-4">About Us</h5>
            <h1 className="mb-4">Our main goal is to clean rivers</h1>
            <p className="fs-5 mb-4">
            We Purify Rivers: Engaging Communities, Restoring Ecosystems for Sustainable Waterways. Together, we lead proactive initiatives to ensure clean, vibrant rivers, fostering biodiversity and a healthier environment for future generations.
            </p>
            <div className="tab-class bg-secondary p-4 mt-5">
              <ul className="nav d-flex mb-2">
                <li className="nav-item mb-3">
                  <a
                    className="d-flex py-2 text-center bg-white active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      About
                    </span>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    className="d-flex py-2 mx-3 text-center bg-white"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      Mission
                    </span>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    className="d-flex py-2 text-center bg-white"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    <span className="text-dark" style={{ width: 150 }}>
                      Vision
                    </span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <p className="mb-4">
                          PureRivers is passionately dedicated to the purification and preservation of our rivers. Our mission is to engage communities through proactive initiatives that restore water quality and biodiversity. By fostering environmental stewardship and advocating for sustainable river management practices, we aim to create lasting impacts on the health and vitality of our waterways. Through collaborative efforts and community involvement, PureRivers strives to ensure that our rivers remain vibrant ecosystems, providing clean water and thriving habitats for present and future generations to enjoy and benefit from.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <p className="mb-4">
                          Our mission at PureRivers is to engage communities in proactive initiatives aimed at restoring and maintaining the health of our rivers. Through collaborative efforts, education, and advocacy, we empower volunteers to participate in river cleaning drives, employing techniques such as manual cleaning, skimmer boats, chemical methods, sediment traps, and catch basins. By promoting sustainable practices and fostering environmental stewardship, we strive to purify waterways, enhance biodiversity, and ensure the long-term health of our river ecosystems. Together, we envision clean, thriving rivers that serve as vital resources for both wildlife and communities, contributing to a sustainable and resilient environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <p className="mb-4">
                          Our Organization envisions a future where our rivers are pristine, thriving ecosystems that provide clean water and support diverse wildlife. We strive for widespread community engagement and sustainable practices that ensure the long-term health and vitality of our waterways. Through innovation, education, and collaboration, we aim to inspire a global movement towards river conservation and stewardship, where every individual takes pride and responsibility in protecting these essential natural resources for generations to come.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Volunteers Start */}
    <div className="container-fluid volunteer py-5 mt-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="/assets/img/volunteers-1.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="/assets/img/volunteers-3.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="/assets/img/volunteers-2.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="volunteer-img">
                <img
                  src="/assets/img/volunteers-4.jpg"
                  className="img-fluid w-100"
                  alt="Image"
                />
                <div className="volunteer-title">
                  <h5 className="mb-2 text-white">Michel Brown</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <h5 className="text-uppercase text-primary">Become a Volunteer?</h5>
          <h1 className="mb-4 mt-3">
            Join your hand with us for a better life and beautiful future.
          </h1>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> We are friendly to
            each other.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> If you join with
            us,We will give you free training.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> Its an opportunity
            to help poor Environments.
          </p>
          <p className="text-dark">
            <i className=" fa fa-check text-primary me-2" /> No goal
            requirements.
          </p>
          <p className="text-dark mb-5">
            <i className=" fa fa-check text-primary me-2" /> Joining is tottaly
            free. We dont need any money from you.
          </p>
          <Link
            className="btn-hover-bg btn btn-primary text-white py-2 px-4"
            to="/registration"
          >
            Regiater
          </Link>
        </div>
      </div>
    </div>
  </div>
    {/* Volunteers End */}
  </>
  
  )
}}
