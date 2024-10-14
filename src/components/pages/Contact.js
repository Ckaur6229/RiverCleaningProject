import React from 'react'

export default function Contact() {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Contact Us</h3>
      <p className="fs-5 text-white mb-4">
        Let's make the rivers pure and beautiful!
      </p>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div className="contact p-5">
        <div className="row g-4">
          <div className="col-xl-5">
            <h1 className="mb-4 text-primary">Get in touch</h1>
            <form>
              <div className="row gx-4 gy-3">
                <div className="col-xl-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Your First Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    type="email"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0 py-3 px-4"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0 py-3 px-4"
                    rows={7}
                    cols={10}
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn-hover-bg btn btn-primary text-light w-100 py-3 px-5"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-7">
            <div>
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="bg-white p-4">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2" />
                    <h4>Address</h4>
                    <p className="mb-0">123 street New York</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-white p-4">
                    <i className="fas fa-envelope fa-2x text-primary mb-2" />
                    <h4>Mail Us</h4>
                    <p className="mb-0">info@example.com</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bg-white p-4">
                    <i className="fa fa-phone-alt fa-2x text-primary mb-2" />
                    <h4>Telephone</h4>
                    <p className="mb-0">(+012) 3456 7890 123</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <iframe
                    className="w-100"
                    style={{ height: 412, marginBottom: "-6px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

  )
}
