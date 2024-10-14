import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const scroll=()=>{
    window.scrollTo(0,0);
  }
  return (
    <>
   {/* Footer Start */}
   <div className="container-fluid footer bg-dark text-body py-5">
    <div className="container py-3">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item">
           <div className="d-flex">
           <img src="/assets/img/logo.png" width="50px" alt="njmmj" />
           <h4 className=" text-primary fw-bold" style={{fontFamily:"Gabriola",fontSize:"40px"}}>PureRivers</h4>
           </div>
            <p className="mb-4">
            Dedicated to cleaning and preserving our rivers for a sustainable future.
            </p>
            <Link
            className="btn-hover-bg btn btn-primary text-white py-2 px-4"
            to="enquiry"
            onClick={scroll}
          >
            Have enquiry?
          </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mt-5">Links</h4>
            <Link to="/"  onClick={scroll}>
              <i className="fas fa-angle-right me-2" /> Home
            </Link>
            <Link to="/about"  onClick={scroll}>
              <i className="fas fa-angle-right me-2" /> About
            </Link>
            <Link to="/causes"  onClick={scroll}>
              <i className="fas fa-angle-right me-2" /> Causes
            </Link>
            <Link to="/drives"  onClick={scroll}>
              <i className="fas fa-angle-right me-2" /> Drives
            </Link>
            <Link to="/posts"  onClick={scroll}>
              <i className="fas fa-angle-right me-2" /> Post
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item">
          <h4 className=" text-white mt-5">Contact Us</h4>
          <p>
            <i className="fas fa-map-marker-alt me-2"></i> 123 River Road, CleanCity, CC 12345
          </p>
          <p>
            <i className="fas fa-phone-alt me-2"></i> +1 234 567 890
          </p>
          <p>
            <i className="fas fa-envelope me-2"></i> info@purerivers.org
          </p>
        </div>
      </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item">
            <h4 className="mb-4 text-white mt-5">Our Gallery</h4>
            <div className="row g-2">
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="/assets/img/gallery-footer-1.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="/assets/img/gallery-footer-1.jpg"
                      data-lightbox="footerGallery-1"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="/assets/img/gallery-footer-2.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="/assets/img/gallery-footer-2.jpg"
                      data-lightbox="footerGallery-2"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="/assets/img/gallery-footer-3.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="/assets/img/gallery-footer-3.jpg"
                      data-lightbox="footerGallery-3"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="/assets/img/gallery-footer-4.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="/assets/img/gallery-footer-4.jpg"
                      data-lightbox="footerGallery-4"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="/assets/img/gallery-footer-5.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="/assets/img/gallery-footer-5.jpg"
                      data-lightbox="footerGallery-5"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="footer-gallery">
                  <img
                    src="/assets/img/gallery-footer-6.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="footer-search-icon">
                    <a
                      href="/assets/img/gallery-footer-6.jpg"
                      data-lightbox="footerGallery-6"
                      className="my-auto"
                    >
                      <i className="fas fa-search-plus text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center justify-content-between">
        <div className="col-md-4 text-center text-md-start mb-md-0">
          <span className="text-body">
            <a href="#">
              <i className="fas fa-copyright text-light me-2" />
              PureRivers
            </a>
            , All right reserved.
          </span>
        </div>
        <div className="col-md-4 text-center">
          <div className="d-flex align-items-center justify-content-center">
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-2">
              <i className="fab fa-pinterest" />
            </a>
            <a href="#" className="btn-hover-color btn-square text-white me-0">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  
</>
  )
}
