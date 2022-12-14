import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
const ThankYouEmailSubscriber = () => {
  const reloadCount = sessionStorage.getItem("reloadCount");
  if (reloadCount < 2) {
    sessionStorage.setItem("reloadCount", String(reloadCount + 1));
    window.location.reload();
  } else {
    sessionStorage.removeItem("reloadCount");
  }
  return (
    <>
      <Helmet>
      <title>Email Subscriber | Dynamics Square</title>
<meta name="description" content="Stay connected for newest insights and updates."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/thank-you/email-subscriber/" />
<meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>Thank You !</h1>
              <h2>Stay connected for newest insights and updates.</h2>
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

      <FooterHide />
    </>
  );
};

export default ThankYouEmailSubscriber;
