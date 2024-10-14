import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminFooter() {
  const scroll=()=>{
    window.scrollTo(0,0);
  }
  return (
    <>

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
