import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row align-items-center h-vh-30 py-5">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center">
                <div className="mb-5 mb-lg-0">
                  <p className="mp-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, sed.
                  </p>
                </div>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      content
                    </Link>
                  </li>
                  <li className="d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block"
                      to="#"
                    >
                      conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
