import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const index = (props) => {
  let col = "col-lg-4";
  if (props.isLong) col = "col-lg-8";

  let height = "h-image-345px";
  if (props.isWide) height = "h-image-500px";

  let className =
    "position-absolute bottom-0 start-0 p-4 text-white z-999 fw-medium";
  if (props.isQuote)
    className =
      "position-absolute top-50 start-50 translate-middle p-4 text-white z-999 fw-medium d-flex flex-column justify-content-between w-100 h-100";

  return (
    <div className={`py-0 py-lg-3 px-3 ${col}`}>
      <Link to={props.href}>
        <div
          className={`wrapper position-relative mb-3 mb-lg-0  ${
            props.isQuote ? "image-overlay-full" : "image-overlay"
          }`}
        >
          <figure className="m-0">
            <img
              className={`img-fluid w-100 o-8 ${height}`}
              src={props.image}
              alt={props.title}
            />
          </figure>
          {props.isMostPicked && (
            <div className="position-absolute top-0 end-0 p-3">
              <p className="text-upercase px-5 py-2 bg-fade-black-1 text-white rounded-pill">
                lorem
              </p>
            </div>
          )}

          {props.isVideo && (
            <div className="position-absolute top-0 start-0 p-3 z-999">
              <i className="far fa-3x fa-play-circle text-white"></i>
            </div>
          )}

          <div className={className}>
            {props.isQuote ? (
              <>
                <div className="invisible"></div>
                <div className="text-center">
                  <p className="mp-0 text-uppercase">
                    <small>lorem</small>
                  </p>
                  <h2 className="fs-4 mb-3">
                    Man cannot discover new oceans unless he has the courage to
                    lose sight of the sore
                  </h2>
                </div>
              </>
            ) : (
              <>
                <p className="mp-0 text-uppercase">
                  <small>{props.subtitle}</small>
                </p>
                <h2 className="fs-4 mb-3">{props.title}</h2>
              </>
            )}

            <div className="image d-flex">
              {props.peoples.map((people, index) => {
                return (
                  <figure
                    className={`m-0 wh-image-50px ${index === 0 ? "" : "-ms-20px"}`}
                    key={`people-${index}`}
                  >
                    <img
                      className="img-fluid wh-image-50px rounded-circle border-white-3px"
                      src={people.image}
                      alt={people.name}
                    />
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

index.propTypes = {
  isLong: propTypes.bool,
  isWide: propTypes.bool,
  isMostPicked: propTypes.bool,
  isVideo: propTypes.bool,
  href: propTypes.string,
  image: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  people: propTypes.array,
};

export default index;
