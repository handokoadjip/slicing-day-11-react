import React from "react";
import {Link} from "react-router-dom";

const index = () => {
  return (
    <section className="p-5 border-top">
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row w-100 pt-5">
        <div className="col-lg-3 mb-5 mb-lg-0">
          <div className="wrapper text-fade-1 text-center text-lg-start">
            <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">content</h3>
            <nav>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Lorem</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Ipsum</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Dolor</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Sit</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Amet</Link>
            </nav>
          </div>
        </div>
        <div className="col-lg-3 mb-5 mb-lg-0">
          <div className="wrapper text-fade-1 text-center text-lg-start">
            <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">conditions</h3>
            <nav>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Lorem</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Ipsum</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Dolor</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Sit</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Amet</Link>
            </nav>
          </div>
        </div>
        <div className="col-lg-3 mb-5 mb-lg-0">
          <div className="wrapper text-fade-1 text-center text-lg-start">
            <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">about Us</h3>
            <nav>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Lorem</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Ipsum</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Dolor</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Sit</Link>
              <Link className="text-fade-1 text-decoration-none mb-1 d-block" to="#">Amet</Link>
            </nav>
          </div>
        </div>
        <div className="col-lg-3 mb-5 mb-lg-0">
          <div className="wrapper text-fade-1 text-center text-lg-start position-relative">
            <h3 className="fs-6 mb-4 text-uppercase fw-bold text-border-bottom">subscribe</h3>
            <form action="">
              <div className="form-group mb-3">
                <div className="input-group mb-3">
                  <input type="email" className="form-control bg-light border-end-0 form-control-lg" id="email" />
                  <div className="input-group-text bg-light border-start-0" id="nimL">
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5"
                        d="M14.211 12.7526C13.8577 11.9157 13.345 11.1555 12.7014 10.5144C12.0598 9.87149 11.2998 9.35887 10.4633 9.00488C10.4558 9.00114 10.4483 8.99927 10.4408 8.99552C11.6076 8.15271 12.3662 6.77987 12.3662 5.23098C12.3662 2.6651 10.2872 0.586182 7.72136 0.586182C5.15549 0.586182 3.07656 2.6651 3.07656 5.23098C3.07656 6.77987 3.83509 8.15271 5.00191 8.99739C4.99442 9.00114 4.98693 9.00301 4.97943 9.00676C4.14037 9.36074 3.38747 9.86829 2.74131 10.5163C2.09836 11.1579 1.58574 11.9179 1.23175 12.7544C0.883996 13.5734 0.696443 14.4514 0.679246 15.3409C0.678746 15.3609 0.682252 15.3808 0.689558 15.3994C0.696864 15.418 0.707821 15.435 0.721784 15.4493C0.735748 15.4636 0.752434 15.475 0.770861 15.4827C0.789288 15.4905 0.809083 15.4945 0.829078 15.4945H1.95282C2.03523 15.4945 2.10078 15.4289 2.10265 15.3484C2.14011 13.9025 2.72071 12.5484 3.74706 11.5221C4.809 10.4601 6.2193 9.87578 7.72136 9.87578C9.22343 9.87578 10.6337 10.4601 11.6957 11.5221C12.722 12.5484 13.3026 13.9025 13.3401 15.3484C13.3419 15.4308 13.4075 15.4945 13.4899 15.4945H14.6137C14.6336 15.4945 14.6534 15.4905 14.6719 15.4827C14.6903 15.475 14.707 15.4636 14.7209 15.4493C14.7349 15.435 14.7459 15.418 14.7532 15.3994C14.7605 15.3808 14.764 15.3609 14.7635 15.3409C14.7448 14.4457 14.5593 13.5748 14.211 12.7526ZM7.72136 8.45238C6.8617 8.45238 6.05261 8.11713 5.44391 7.50843C4.83522 6.89974 4.49997 6.09065 4.49997 5.23098C4.49997 4.37132 4.83522 3.56223 5.44391 2.95353C6.05261 2.34484 6.8617 2.00959 7.72136 2.00959C8.58103 2.00959 9.39012 2.34484 9.99882 2.95353C10.6075 3.56223 10.9428 4.37132 10.9428 5.23098C10.9428 6.09065 10.6075 6.89974 9.99882 7.50843C9.39012 8.11713 8.58103 8.45238 7.72136 8.45238Z"
                        fill="#03014C" />
                    </svg>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-lg btn-custom text-uppercase w-100 fs-6">suscribe now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default index;
