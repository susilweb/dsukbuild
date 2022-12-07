import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const IndustriesList = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Industries | Dynamics Square</title>
        <meta
          name="description"
          content="Power the growth of your industry by implementing Dynamics 365 Business applications. Our Dynamics 365 experts have the expertise to assist you in any"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Industries | Dynamics Square" />
        <meta
          property="og:description"
          content="Power the growth of your industry by implementing Dynamics 365 Business applications. Our Dynamics 365 experts have the expertise to assist you in any"
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/industries/"
        />
        <meta property="og:site_name" content="Dynamics Square" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/dynamicssquareuk"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/vickygururani"
        />
        <meta property="fb:app_id" content="2007906422699147" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="DS Favicon" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries | Dynamics Square" />
        <meta
          name="twitter:description"
          content="Power the growth of your industry by implementing Dynamics 365 Business applications. Our Dynamics 365 experts have the expertise to assist you in any"
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="Less than a minute" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Industries</h1>
              <p>
                Power the growth of your industry by implementing Dynamics 365
                Business applications. Our Dynamics 365 experts have the
                expertise to assist you in any capacity you require.
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Dynamics-365-for-professional-services.png"
                alt="Dynamics-365-for-professional-services"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>Choose your Industry</h2>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Startup</h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/industries/startup/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Not for Profit</h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/industries/microsoft-cloud-for-nonprofit/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>E-Commerce</h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/industries/ecommerce/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Manufacturing & Distribution</h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/industries/microsoft-cloud-for-manufacturing/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Professional Services</h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/industries/professional-services/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Food & Beverages</h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/industries/food-and-beverages/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
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

export default IndustriesList;
