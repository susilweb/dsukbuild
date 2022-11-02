import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useHistory, useLocation } from "react-router-dom";

const StartGuideTwo = () => {
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
        history.push("/guides/download/Pdf-dynamics-crm/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Helmet>
        <title>
         The Extensive Guide to Dynamics CRM
        </title>
        <meta
          name="description"
          content="Download our free eBook - Dynamics CRM to simplify your customer relationship journey and enhance profitability along with rapid growth."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/ebook/dynamics-crm/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              A Complete Guide to Dynamics CRM 
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
              <img src="/assets/img/dynamics-CRM-Ebook-featured-banner.png" alt="dynamics-CRM-Ebook-featured-banner" />
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
                  <h3>History of Dynamics CRM</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Top Applications for Businesses</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>
                  Most Useful Features 
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <img src="/assets/img/tablet-ebook-dynamics-CRM.png" alt="tablet-ebook-dynamics-CRM" />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>
                  Top Benefits to Boost Business Growth
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>
                  Most Effective Pricing and Licensing
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>How to Avail Free Trial?</h3>
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
                <p>Microsoft Dynamics CRM is a simple yet powerful tool that can help businesses streamline the entire customer relationship journey. Dynamics 365 CRM is a flexible and customizable tool that offers numerous capabilities, including tracking sales leads, managing marketing campaigns, accelerating sales performance, nurturing sales-ready leads, and customer tracking.</p>
                <p>Our eBook is a perfect guide for organisations who are looking for a better, more agile and highly productive CRM solution to improve and drive a surpassing customer experience.</p>
                <p>If you want to enable sales and service automation, efficiently connect and engage customers, and improve your customer expectations, you should read this guide to get a complete overview of this powerful solution.</p>
                <p>With the help of Dynamics CRM, you can seamlessly align your sales and marketing, improve team collaboration, and ensure the success of your digital campaigns. With this guide, you will learn to automate data, streamline tasks, understand your customers' behaviours, elevate your sales level, and bring transparency in your entire sales process with real-time efficiency to maximise your growth potential.</p>
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
                Get started with the Ultimate Guide to Microsoft Dynamics CRM
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
                        Why should I choose Dynamics CRM? 
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                     <p>When businesses start climbing the success ladder, it's obvious that their existing systems will no longer handle complexities, manage customers, and enhance loyalty. As a result, it becomes crucial to have an advanced CRM solution like Dynamics CRM to help you get easy scalability and more growth.</p>
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
                       Can I customize my Microsoft Dynamics CRM?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>Dynamics CRM is a highly configurable and customizable platform that enables businesses to tailor it to their specific needs or integrate it with other systems or apps to manage their entire customer relationship journey while making actionable decisions in real-time.</p>
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
                        <p>At Dynamics Square, we adhere to Microsoft's mission: "to empower every person and every organisation on the planet to achieve more." And helping people helps us provide authentic, fruitful solutions to people in the best way possible. This guide contains crisp and necessary content that you exactly need.</p>
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
                        What are the main areas in Dynamics CRM?
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                     <p>Dynamics CRM covers various areas of marketing and helps with business sales and customer retention. The top three regions of D365 CRM include Sales, Marketing, and Service. This is a complete application for overall sales and service management.</p>
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
                       <p>We will keep your information confidential. The information from your end helps us provide you with an improved and personalised experience every time you visit our website and provides you with the best solution so that your business can make waves.</p>
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

export default StartGuideTwo;
