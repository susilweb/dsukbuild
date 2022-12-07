import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error404 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found | Dynamics Square</title>
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mobile-1 align-self-center">
              <h1 className="text-center">
                404
              </h1>
              <h2 className="text-center">
              The Page You Were Looking For
Couldn't Be Found
              </h2>
              <div className="text-center">
                <div className="text-center">
                  <NavLink
                    to="/"
                    className="btn-get-started scrollto"
                  >
                    <span>Back To Home</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
