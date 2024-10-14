import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
  {/* Carousel Start */}
  <div className="container-fluid carousel-header vh-100 px-0">
    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to={0}
          className="active"
        />
        <li data-bs-target="#carouselId" data-bs-slide-to={1} />
        <li data-bs-target="#carouselId" data-bs-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img src="/assets/img/carousel-1.jpg" className="img-fluid" alt="Image" />
          <div className="carousel-caption">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4
                className="text-white fw-bold mb-4"
                style={{ letterSpacing: 3 }}
              >
                Welcome to PureRivers
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
              Join Us in Purifying Our Rivers
              </h1>
              <p className="mb-5 fs-5">
              Be a part of our mission to clean, protect, and preserve our rivers for a healthier environment
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Link
                  className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                  to="/registration"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/img/carousel-2.jpg" className="img-fluid" alt="Image" />
          <div className="carousel-caption">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4
                className="text-white fw-bold mb-4"
                style={{ letterSpacing: 3 }}
              >
                Make a real Impact
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
              Become a Volunteer
              </h1>
              <p className="mb-5 fs-5">
              Join our passionate team of volunteers dedicated to making our rivers cleaner and safer
              </p>
              <div className="d-flex align-items-center justify-content-center">
              <Link
                  className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                  to="/registration"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/img/carousel-3.jpg" className="img-fluid" alt="Image" />
          <div className="carousel-caption">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <h4
                className="text-white fw-bold mb-4"
                style={{ letterSpacing: 3 }}
              >
                Community Clean-Up Drives
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
              Get Involved
              </h1>
              <p className="mb-5 fs-5">
              Learn about our cleaning drives and stay updated with our latest efforts and activities
              </p>
              <div className="d-flex align-items-center justify-content-center">
              <Link
                  className="btn-hover-bg btn btn-primary text-white py-3 px-5"
                  to="/registration"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
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
}
