import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import FormGuide from "./FormGuide";
const EbookList = () => {
  return (
    <>
      <Helmet>
        <title>Ebook | Dynamics Square</title>
        <meta
          name="description"
          content="Ebook Ultimate Guide to Choose the Right ERP For Your Business Learn More +"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/ebook/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ebook | Dynamics Square" />
        <meta
          property="og:description"
          content="Ebook Ultimate Guide to Choose the Right ERP For Your Business Learn More +"
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/ebook/"
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
        <meta property="og:image" content=" " />
        <meta
          property="og:image:secure_url"
          content="https://www.dynamicssquare.co.uk/assets/img/ebooh-img.png"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="DS Favicon" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ebook | Dynamics Square" />
        <meta
          name="twitter:description"
          content="Ebook Ultimate Guide to Choose the Right ERP For Your Business Learn More +"
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content=" " />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="Less than a minute" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics 365 eBooks</h1>
              <p>Get Your Business To New Heights With Our <br />Microsoft Dynamics 365 E-Books and Guides.</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/assets/img/Cover_Book_Moc.png" alt="Cover_Book_Moc" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Latest Ebooks
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/d365-supply-chain-management/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/dynamics-SCM-Ebook-featured-image.png"
                            alt="dynamics-SCM-Ebook-featured-ima"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/d365-supply-chain-management/">
                            A Complete Guide to Dynamics SCM
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/d365-supply-chain-management/"
                            >
                              View Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/dynamics-crm/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/dynamics-CRM-Ebook-featured-image.jpg"
                            alt="dynamics-CRM-Ebook-featured-images"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/dynamics-crm/">
                            A Complete Guide to Dynamics CRM
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/dynamics-crm/"
                            >
                              View Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/dynamics-365-finance/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/nav-guide-pic.png"
                            alt="ebook-img"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/dynamics-365-finance/">
                            The Extensive Guide to Dynamics 365 Finance
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/dynamics-365-finance/"
                            >
                              View Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/upgrade-nav-to-business-central/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/Ebook-Nav-to-BC.png"
                            alt="ebooh-img"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/upgrade-nav-to-business-central/">
                              Upgrade From Dynamics NAV to Business Central
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/upgrade-nav-to-business-central/"
                            >
                              View Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/how-to-choose-right-erp/"
                          className="over-ff"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/ebooh-img.png"
                            alt="ebooh-img"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/how-to-choose-right-erp/">
                              Ultimate Guide to Choose the Right ERP For Your
                              Business
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/how-to-choose-right-erp/"
                            >
                              View Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          data-bs-toggle="modal"
                          to="#powerBIModal"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/powerbi-guid-pic.png"
                            alt="powerbi-guid-pic"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink data-bs-toggle="modal"
                        to="#powerBIModal">
                            Power BI: The Definitive Guide For SMBs
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              data-bs-toggle="modal"
                        to="#powerBIModal"
                            >
                              Download Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormGuide />
    </>
  );
};

export default EbookList;
