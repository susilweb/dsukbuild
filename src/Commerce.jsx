import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
const Commerce = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Commerce | Retail ERP Solution</title>
        <meta
          name="description"
          content="Unify your back-office, in-store, and digital experience by empowering your system with our exclusive Microsoft Dynamics 365 Commerce packages."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-commerce/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Dynamics 365 Commerce | Retail ERP Solution"
        />
        <meta
          property="og:description"
          content="Unify your back-office, in-store, and digital experience by empowering your system with our exclusive Microsoft Dynamics 365 Commerce packages."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-commerce/"
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
        <meta property="og:image:width" content="1606" />
        <meta property="og:image:height" content="904" />
        <meta property="og:image:alt" content="dynamics 365 commerce" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dynamics 365 Commerce | Retail ERP Solution"
        />
        <meta
          name="twitter:description"
          content="Unify your back-office, in-store, and digital experience by empowering your system with our exclusive Microsoft Dynamics 365 Commerce packages."
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="2 minutes" />
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
              <h1>Microsoft Dynamics 365 Commerce</h1>
              <p>
                <b>(Formerly Dynamics 365 Retail)</b>
              </p>
              <p>
                Unify Your Back-Office, In-Store, And Digital Experience By
                Empowering Your System With Dynamics 365 Commerce
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/commerce-banner.png"
                alt="commerce-banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>What is Dynamics 365 Commerce?</h2>
                <p>
                  Drive consistent engagement across your online and offline
                  channels, offer an omnichannel experience to your customers
                  wherein they can make a purchase anytime, from anywhere using
                  any device whether mobile phones, tablets, or personal
                  systems. Implementing Microsoft Dynamics 365 Commerce helps
                  brands to develop customer loyalty and drive massive
                  relationships for the long run.
                </p>
                <p>
                  Personalize your customer engagement, maximize revenues, boost
                  your employee productivity, and optimize your operations, and
                  drive improved supply chain practices while reducing costs and
                  increasing efficiency.
                </p>
              </header>
            </div>
          </div>

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
                            src="/assets/img/icons-commerce_user-experience.svg"
                            alt="icons-commerce_user-experience"
                          />
                        </div>
                        <span>User Experience</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Enrich your user experience with modern POS, E-commerce
                        storefront, etc. to parallelly work with external
                        applications to centralize your sales, inventory, order
                        fulfillment, reporting, and more.
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
                            src="/assets/img/icons-commerce_back-office.svg"
                            alt="icons-commerce_back-office"
                          />
                        </div>
                        <span>Back Office</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Stimulate your back-office processes including supply
                        chain, finance, operations, and human resource all
                        through Microsoft Dynamics 365 Commerce- an integrated
                        solution for across your commerce needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="news">
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
                            src="/assets/img/icons-commerce_ecommerce-platform.svg"
                            alt="icons-commerce_ecommerce-platform"
                          />
                        </div>
                        <span>E-commerce Platform</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                        Easily manage your contents, digital assets, and web
                        storefront with a fully enriched e-commerce platform
                        designed as an integrated solution to drive uplifted
                        results in the commerce domain.
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-commerce_Commerce-Surround-Services.svg"
                            alt="icons-commerce_Commerce-Surround-Services"
                          />
                        </div>
                        <span>Commerce Surround Services</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                        Protect your data through Dynamics 365 fraud protection,
                        leverage Dynamics 365 Customer insights to have a
                        360-degree view into customer data, and drive
                        centralization with Microsoft Bing for Commerce.
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
            <div className="col-lg-5 m--t align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Dynamics 365 Commerce Features</h2>
                <h3>
                  Elevate Your Commerce Practices and Drive Profitability with
                  Dynamics 365 Commerce
                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Omnichannel
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Allow your customers to make purchases anytime using
                          any device whether mobile, tablet, or desktop while
                          concluding the modern payment methods, facilitating
                          the delivery model, and more.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Interconnected
                        <br />
                        Processes
                      </h3>
                      <div className="overlay">
                        <p>
                          Connect people in your enterprise by automating your
                          organizational data and streamlining your processes to
                          manage and accelerate the entire operational flow
                          while improving the productivity ratio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Unified Data
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Embedded with AI intelligence and Machine Learning
                          algorithms, Microsoft Dynamics 365 commerce enables to
                          optimize your operations and enables everyone to make
                          productive decisions in real-time.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Equipped With
                        <br />
                        AI & Analytics
                      </h3>
                      <div className="overlay">
                        <p>
                          AI-based reporting and key analytics help people in
                          your organization to maintain the right process flow,
                          optimize operations, and ensure a smoother
                          distribution & satisfactory delivery model.
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
            <div className="col-lg-6">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/Ecommerce side.png"
                    className="fix-im"
                    alt="Ecommerce side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/video-Ecommerce.png"
                          alt="video-banner-commerce"
                        />
                        {/* <span className="cente-icns">
                          <img
                            src="/assets/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side-heading">
                <h2>Dynamics 365 Commerce Services</h2>
                <p>
                  Strategically Work Towards Fulfilling Your Commerce Services.
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
                    Drive unified, effective, and efficient commerce strategies
                    once you implement Dynamics 365 Commerce.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </Link>
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
                    Align your business processes as per your specific business
                    practices with Dynamics 365 Commerce upgrade.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </Link>
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
                    Eliminate process interruption and drive continuity with our
                    optimal Dynamics 365 upgrade services.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </Link>
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
                <h3>Connect & Share with Experts</h3>
                <p>
                  Let’s connect to share and discuss your business requirements
                  to reveal revenue-generating solutions.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
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
          <header className="section-header">
            <h2>Dynamics 365 Commerce pricing</h2>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Commerce</h3>
                <div className="price">
                  <sup>£</sup>135.70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes core capabilities to manage omnichannel retail
                    operations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>E-Commerce Add-In for Dynamics 365 Commerce</h3>
                <div className="price">
                  <sup>£</sup>3,016.40<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Includes e-commerce management for Dynamics 365 Commerce.
                  </li>
                  <li className="text-center">
                    <i className="bi bi-check-lg"></i> Requires Dynamics 365
                    Commerce
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
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Dynamics 365 Commerce?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is D365 Commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Commerce is a proven retail
                        solution that integrates or unifies your back-office,
                        in-store, and digital experiences. D365 Commerce enables
                        you to optimize your operations, improve your employee
                        productivity, boost customer engagement, and drive
                        efficient results while reducing costs, time, and
                        energy. With built-in AI capabilities, streamline your
                        core operations from efficiently managing customers to
                        resources to supply chain to marketing practices, and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      What is D365 Commerce scale?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The Commerce Scale Unit allows stores to sell products
                        even if their internet connection is not consistent! It
                        means that your store can still process credit card
                        transactions, issue gift cards, and sync data with HQ
                        despite poor internet service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Is Dynamics 365 Retail the same as Dynamics 365 commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Retail is now Dynamics 365 Commerce. It has
                        recently had an important upgrade. Because of the way it
                        was named before, people had difficulty connecting the
                        name to what this system is capable of doing. Dynamics
                        365 commerce contains features such as e-commerce and
                        back office control, among others.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commerce;