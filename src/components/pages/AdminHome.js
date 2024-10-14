import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminHome() {
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
                Welcome to
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
              Admin Panel
              </h1>
              <div className="d-flex align-items-center justify-content-center">
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
                Welcome to
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
              Admin Panel
              </h1>
              <div className="d-flex align-items-center justify-content-center">
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
                Welcome to
              </h4>
              <h1 className="display-1 text-capitalize text-white mb-4">
              Admin Panel
              </h1>
              <div className="d-flex align-items-center justify-content-center">
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
    </>
  )
}
