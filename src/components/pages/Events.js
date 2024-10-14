import React from 'react'

export default function Events() {
  return (
    <>
    {/* Header Start */}
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">Upcoming Events</h3>
        <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
        </p>
      </div>
    </div>
    {/* Header End */}
    {/* Events Start */}
    <div className="container-fluid event py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
          <h5 className="text-uppercase text-primary">Upcoming Events</h5>
          <h1 className="mb-0">
            Help today because tomorrow you may be the one who needs more helping!
          </h1>
        </div>
        <div className="event-carousel owl-carousel">
          <div className="event-item">
            <img src="/assets/img/events-1.jpg" className="img-fluid w-100" alt="Image" />
            <div className="event-content p-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="text-body">
                  <i className="fas fa-map-marker-alt me-2" />
                  Grand Mahal, Dubai 2100.
                </span>
                <span className="text-body">
                  <i className="fas fa-calendar-alt me-2" />
                  10 Feb, 2023
                </span>
              </div>
              <h4 className="mb-4">How To Build A Cleaning Plan</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="event-item">
            <img src="/assets/img/events-2.jpg" className="img-fluid w-100" alt="Image" />
            <div className="event-content p-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="text-body">
                  <i className="fas fa-map-marker-alt me-2" />
                  Grand Mahal, Dubai 2100.
                </span>
                <span className="text-body">
                  <i className="fas fa-calendar-alt me-2" />
                  10 Feb, 2023
                </span>
              </div>
              <h4 className="mb-4">How To Build A Cleaning Plan</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="event-item">
            <img src="/assets/img/events-3.jpg" className="img-fluid w-100" alt="Image" />
            <div className="event-content p-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="text-body">
                  <i className="fas fa-map-marker-alt me-2" />
                  Grand Mahal, Dubai 2100.
                </span>
                <span className="text-body">
                  <i className="fas fa-calendar-alt me-2" />
                  10 Feb, 2023
                </span>
              </div>
              <h4 className="mb-4">How To Build A Cleaning Plan</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="event-item">
            <img src="/assets/img/events-4.jpg" className="img-fluid w-100" alt="Image" />
            <div className="event-content p-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="text-body">
                  <i className="fas fa-map-marker-alt me-2" />
                  Grand Mahal, Dubai 2100.
                </span>
                <span className="text-body">
                  <i className="fas fa-calendar-alt me-2" />
                  10 Feb, 2023
                </span>
              </div>
              <h4 className="mb-4">How To Build A Cleaning Plan</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectur adip sed eiusmod amet
                consectur adip sed eiusmod tempor.
              </p>
              <a
                className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Events End */}
  </>
  
  )
}
