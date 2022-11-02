import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
const HumanResource = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Human Resources | Optimize HR Programs</title>
        <meta
          name="description"
          content="Manage workforce, maximize resource utilization, leverage valuable AI insights to craft a better workspace with Dynamics 365 Human Resources. Schedule a demo today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Human Resources
              </h1>
              <p>Optimize your Resource Utilization and Drive Profitability with Dynamics 365 Human Resource.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/assets/img/Human-Resource-banner.png" alt="Human-Resource-banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              What is dynamics 365
              <br />
              Human Resources?
            </h2>
            <p>
              Microsoft Dynamics 365 Human Resources (formerly known as
              Microsoft Dynamics 365 Talent) is designed to boost your 
              resourcing capabilitiesand manage your entire workforce to produce
              better results. It helps to hire the right talent, onboard 
              the right resources,and retain the dedicated people in your
              organization to impact your organizational growth and scalability.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Highly Flexible Solution</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Explore your business capabilities with Dynamics 365
                        Human Resource solution. Extend your resource
                        optimization by connecting it with partner solutions or
                        integrating with other Microsoft solutions.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-_Connected-HR-Practices.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Connected HR Practices</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Manage end-to-end tasks from onboarding, compensation &
                        benefits management, leave, absence, & compliance
                        management, payroll & performance management to training
                        & certification.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
              <hr className="mob-disp" />
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-_Actionable-Insights.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Actionable Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Attain built-in AI insights of your workforce, ensure
                        regulatory compliance, and empower your HR people with
                        depth insights to make timely decisions and drive
                        smoother human resourcing practices.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
            <div className="wy-sultion-left-head">
              
            <h2>Microsoft Dynamics 365 Human Resources Features</h2>
              <h3>
                How does Microsoft Dynamics 365 Human Resources help to Elevate
                Your Financial Capabilities?
              </h3>
            </div>
              
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Boost Employee <br /> Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Empower your HR managers with the right tools,
                          centralize your employees’ data, enable your employees
                          with self-service capability, drive improved employee
                          engagement and development with HR solutions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize HR
                        <br />
                        Practices
                      </h3>
                      <div className="overlay">
                        <p>
                          Enterprises can optimize their human resource
                          practices, improve employee engagement, and manage
                          end-to-end HR tasks embedded with AI insights that
                          drive growth and sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Maximize
                        <br />
                        Agility
                      </h3>
                      <div className="overlay">
                        <p>
                          Automate HR administration, streamline HR process
                          flow, and easily integrate with third-party HR
                          solutions to improve your business performance while
                          ensuring security, privacy, and compliance part.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Gain Workforce
                        <br />
                        Insights
                      </h3>
                      <div className="overlay">
                        <p>
                          Centralize your human resource data, stay updated with
                          real-time employees’ insights, and make instant
                          decisions leveraging embedded analytics with Microsoft
                          Dynamics 365 Human Resource solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/human-resource side.png"
                    className="fix-im"
                    alt="Dynamics 365 Human Resources Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/assets/img/Video-Human Resource.png" alt="Video-Human-Resource" />
                        <span className="cente-icns">
                          <img
                            src="/assets/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 Human Resources Service</h2>
                <p>
                Uplift Your Resourcing Capabilities with Dynamics Square
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/assets/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Improve and accelerate your human resource processes by
                    implementing Dynamics 365 Human Resources.
                  </p>
                  <div className="action-content">
                    <NavLink data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/assets/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Configure your system with advanced human resource
                    capabilities to upgrade your resource optimization.
                  </p>
                  <div className="action-content">
                    <NavLink data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/assets/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Keep optimizing your resources and drive a smoother flow in
                    your organization with our <NavLink to="/our-services/dynamics-365-support-services/">Dynamics 365 support services</NavLink>.
                  </p>
                  <div className="action-content">
                    <NavLink data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Maximize your business potentials</h3>
                <p>
                  Drive new business challenges by implementing Dynamics 365
                  Human Resources
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink to="#about" className="btn-get-started scrollto">
                    <span>Get Started Now</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-8">
          <header className="section-header">
            <h2>Dynamics 365 Human Resources pricing</h2>
          </header>
          </div>
         </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Human Resources
                </h3>
                <div className="price">
                  <sup>£</sup>90.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes full application capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Human Resources Self-Service
                </h3>
                <div className="price">
                  <sup>£</sup>3<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Employee and manager self-service capabilities
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <NavLink
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HumanResource;
