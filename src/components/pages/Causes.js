import React, { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

export default function Causes() {
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
      <h3 className="text-white display-3 mb-4">Causes</h3>
      <p className="fs-5 text-white mb-4">
      Let's make the rivers pure and beautiful!
      </p>
    </div>
  </div>
  {/* Header End */}
  {/* Causes Start */}
  <div className="container-fluid causes py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">Causes</h5>
        <h1 className="mb-4">Key Causes of River Pollution</h1>
        <p className="mb-0">
        Here are some causes of river pollution and their effects on ecosystems. These factors degrade water quality, harm aquatic life, and disrupt natural habitats.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="/assets/img/cause-1.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">Sewage and Wastewater</h4>
              <p className="mb-4">
              Introduce chemicals, and excessive nutrients into rivers, causing pollution, eutrophication, algal blooms, and significant harm to aquatic life and ecosystems, degrading water quality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="/assets/img/cause-2.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">Deforestation</h4>
              <p className="mb-4">
              Causes soil erosion and increased sedimentation in rivers, leading to degraded water quality, disrupted habitats, and adverse impacts on aquatic organisms and overall health of ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="/assets/img/cause-3.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">
              Plastic and Solid Waste.
              </h4>
              <p className="mb-4">
              Pollute rivers with plastic and solid waste endangering wildlife, obstructing waterways, and increasing microplastic contamination, posing environmental and health risks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3">
          <div className="causes-item">
            <div className="causes-img">
              <img
                src="/assets/img/cause-4.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="causes-content p-4">
              <h4 className="mb-3">
                Mining
              </h4>
              <p className="mb-4">
              Releases heavy metals and sediments into rivers, contaminating water supplies, disrupting aquatic ecosystems, and posing significant health risks to wildlife and human communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Causes End */}
</>

  )
}}
