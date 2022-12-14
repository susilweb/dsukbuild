import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import FormSubsriber from "./FormSubsriber";
const SubscribeUpdates = () => {
  return (
    <>
      <Helmet>
      <title>Subscribe for Dynamics 365 Updates | Dynamics Square</title>
<meta name="description" content="Looking for Microsoft Dynamics 365 updates? Subscribe to Dynamics Square Newsletters, Offers, Trending News, Blogs and more."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/subscribe-updates/" />
<meta property="og:locale" content="en_GB" />
      </Helmet>
     
      <section className="Solution-banner hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>
              Subscribe Now For Latest Updates
              </h1>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

         
      <section className="custom-sed-demp-wraper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
           
              <div className="sedule-form">
              <h3>Stay Updated With upcoming insights, Offers and More</h3>
                <FormSubsriber />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default SubscribeUpdates;
