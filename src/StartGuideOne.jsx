import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useHistory, useLocation } from "react-router-dom";

const StartGuideOne = () => {
  const history = useHistory();

  const [display, setDisplay] = useState("dspn");

  function sendEmail(e) {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4voumj7",
        "template_68k24ku",
        e.target,
        "mJ38M6WTmU7KRrtuZ"
      )
      .then((res) => {
        history.push("/guides/download/Pdf-guide-finance/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Helmet>
        <title>
         The Extensive Guide to Dynamics 365 Finance
        </title>
        <meta
          name="description"
          content="Download our free eBook - Dynamics 365 Finance to simplify your complex accounting and financial data with enterprise-grade ERP system."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/ebook/dynamics-365-finance/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                A Quick Start Guide To Dynamics 365 Finance
              </h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal1"
                    className="btn-get-started scrollto"
                  >
                    <span>Download Now</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <img src="/assets/img/three-book-mockup.png" alt="finance-banner-book" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>This Ultimate eBook Will Walk You Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>History of Microsoft Dynamics 365 Finance </h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Need of D365 Finance for Growing Industries</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>
                  Capabilities of Dynamic 365 Finance
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <img src="/assets/img/tablet-ebook-finance.png" alt="tablet-ebook-finance" />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>
                  Top Benefits of Dynamic 365 Finance
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>
                  Microsoft Dynamics 365 Finance Pricing
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>What's new in Dynamics 365 Finance?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboot-erp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="pic-ll">
                <img
                  src="/assets/img/erp-left-about.png"
                  alt="erp-left-about"
                />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>What's more about this eBook?</h3>
                <p>
                D365 Finance is an intelligent ERP (Enterprise Resource Planning) 
                solution to manage finance and its various aspects smoothly. But, 
                before the modernization of industries, people used to work on 
                everything manually.
                </p>
                <p>
                Our eBook is a perfect guide for organisations who are looking for a better, more agile and highly productive ERP solution to manage complex financial management and analysis.
                </p>
                <p>
                  This eBook will clear all your concerns and it will also show
                  you how you can improve productivity, automate processes, and
                  enhance security and mobility, across every step of the
                  digital transformation journey.
                </p>
                <p>
                The moment you decide to get, there will be several factors you will find yourself stuck with. But with our quick start guide to Dynamics 365 Finance, you can have an understanding of why it is a cornerstone for your growing business. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/assets/img/MaskGroup8.png" alt="images" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left call_to_action-lefts">
                <h3>
                  Get started with your Ultimate Guide to Dynamics 365 Finance
                </h3>
                <div className="m-o-t m-o-t-inde">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal1"
                    className="btn-get-started scrollto"
                  >
                    <span>Download Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="header-title-left">
            <h3>FAQ</h3>
          </div>
          <div className="row pd-121">
            <div className="col-lg-6 align-self-center">
              <div className="fax-accd">
                <div className="accordion" id="faqaccer">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Why should I choose Dynamics 365 for Finance?
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                      When businesses start climbing the success ladder, it's obvious that their existing systems will no longer handle complexities, increased financial data, and costs. As a result, it becomes crucial to have an advanced ERP system like D365 Finance that comes with new capabilities to add more value to your organisation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       Can I customize my Microsoft Dynamics 365 Finance?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                        D365 Finance is a highly configurable and customizable platform that enables businesses to tailor it to their specific needs or integrate it with other systems or apps to manage their entire financial practises while making instantaneous efficient decisions to drive profitability and scalability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How will this guide help me?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        At Dynamics Square, we adhere to Microsoft's Mission -
                        “to empower every person and every organisation on the
                        planet to achieve more." And helping people helps us
                        provide authentic, fruitful solutions to people in the
                        best way possible. This guide contains crisp and
                        necessary content that you exactly need. Get in touch
                        with us in case you have queries.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        What is included in dynamics 365 finance?
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                      Dynamics 365 Finance contains project management, accounting, financials, and budgeting for large, complex businesses.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Why do I need to fill out the information requested?
                      </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        We keep your information confidential. The information
                        from your end helps us serve an improved and
                        personalised experience every time you visit our website
                        and provide you with the best solution so that your
                        business can make waves.
                        <br />
                        <br />
                        You can read more about our{" "}
                        <NavLink to="/privacy-policy/">
                          privacy policy
                        </NavLink>{" "}
                        here.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="pic-l2">
                <img
                  src="/assets/img/Cover_Book_Moc.png"
                  alt="Cover_Book_Moc"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade form-main-model"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Register For Free EBook
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <p></p>
            </div>
            <p>
              Fill the form and receive it straight to your inbox.
            </p>
            <div className="modal-body">
              <div className="main-form-wrper">
                <form onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="* Full Name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="* Work Email"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="company_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      pattern="^\d{10,13}$"
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I agree to the
                      <NavLink
                        to="/privacy-policy/"
                        title="/privacy-policy/"
                        target="_blank"
                      >
                        {" "}
                        Privacy Policy{" "}
                      </NavLink>
                      and
                      <NavLink
                        to="/terms-of-use/"
                        title="/terms-of-use/"
                        target="_blank"
                      >
                        {" "}
                        Terms of Service{" "}
                      </NavLink>
                      .
                    </label>
                  </div>

                  <div className="spiner-wrper">
                    <button
                      type="submit"
                      className="btn btn-primary fomr-submit"
                    >
                      Download Now
                    </button>
                    <div className={display} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartGuideOne;
