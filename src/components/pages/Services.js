import React from 'react'

export default function Services() {
  return (
    <>
    {/* Header Start */}
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">Our Services</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
    {/* Services Start */}
    <div className="container-fluid service py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
        <h5 className="text-uppercase text-primary">What we do</h5>
        <h1 className="mb-0">What we do to clean rivers</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="service-item">
              <img
                src="/assets/img/service-1.png"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="service-link">
                <a  className="h4 mb-0">
                  Manual Cleaning
                </a>
              </div>
            </div>
            <p className="my-4" style={{textAlign:"justify"}}>
            Volunteers diligently remove litter and debris from riverbanks and water using nets and tools, ensuring a comprehensive cleanup that enhances the river's aesthetic appeal and ecological health, benefiting both wildlife and nearby communities.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="service-item">
              <img
                src="/assets/img/service-2.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="service-link">
                <a className="h4 mb-0">
                  {" "}
                  Cleaning with skimmer boats
                </a>
              </div>
            </div>
            <p className="my-4" style={{textAlign:"justify"}}>
            These specialized vessels employ mechanical systems to efficiently skim the water surface, collecting floating debris, oil, and pollutants. They play a critical role in preventing contamination and maintaining water quality, safeguarding aquatic ecosystems and supporting biodiversity.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="service-item">
              <img
                src="/assets/img/service-3.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="service-link">
                <a className="h4 mb-0">
                  Chemical Treatments
                </a>
              </div>
            </div>
            <p className="my-4" style={{textAlign:"justify"}}>
            Carefully applied chemicals are used to neutralize and break down pollutants in water, reducing their ecological impact while ensuring environmental safety. Proper management is crucial to mitigate unintended consequences and maintain the balance of aquatic ecosystems.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="service-item">
              <img
                src="/assets/img/service-4.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
              <div className="service-link">
                <a className="h4 mb-0">
                Sediment Traps and Catch Basins
                </a>
              </div>
            </div>
            <p className="my-4" style={{textAlign:"justify"}}>
            Strategically positioned structures intercept and contain sediments and pollutants, preventing their entry into rivers. By reducing sedimentation and contamination, they help protect aquatic habitats, preserve water quality, and sustain the health of river ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Services End */}
  </>
  
  )
}
