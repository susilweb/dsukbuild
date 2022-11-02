import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const ThankYou = () => {
  const reloadCount = sessionStorage.getItem("reloadCount");
  if (reloadCount < 2) {
    sessionStorage.setItem("reloadCount", String(reloadCount + 1));
    console.log(reloadCount);
    window.location.reload();
  } else {
    sessionStorage.removeItem("reloadCount");
    console.log(reloadCount);
  }

  return (
    <>
      <Helmet>
        <title>Thank You | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/thank-you/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>Thank You !</h1>
              <h2>
                Thanks for getting in touch - someone will contact you soon!
              </h2>
              <div className="text-center">
                <div className="">
                  <NavLink to="/" className="btn-get-started scrollto">
                    <span>Back to Home</span>
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

export default ThankYou;
