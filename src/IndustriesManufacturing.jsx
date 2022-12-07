import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
const IndustriesManufacturing = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Helmet>
      <title>Dynamics 365 for Manufacturing &amp; Distribution</title>
<meta name="description" content="Dynamics 365 For Manufacturing-Keep track of your production lines and bring transparency with Microsoft Dynamics 365 for Manufacturing and Distribution."/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/industries/manufacturing/" />
<meta property="og:locale" content="en_GB" />
<meta property="og:type" content="article" />
      </Helmet>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qLjfAsQRWaM"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Dynamics 365
                  <br />
                  Manufacturing
                </h1>
                <p>Drive Sustainability In Your Manufacturing Operations</p>
                <p>
                  Keep track of your production lines and bring transparency
                  with Microsoft Dynamics 365 for Manufacturing and
                  Distribution.
                </p>
                <br />
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
              <div className="col-lg-6 align-self-center">
                <img
                  src="/assets/img/Dynamics-manufacturing-Banner.png"
                  alt="Dynamics-manufacturing-Banner"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>
                Manage it all, with Dynamics 365 <br />
                for Manufacturing!
              </h2>
              <p>
                Connect your systems and enable seamless distribution across
                your manufacturing unit to simplify your end-to-end
                manufacturing practices—from the production line, customer
                management to real-time reporting insights with Manufacturing
                ERP+ CRM solutions.
              </p>
              <p>
                Microsoft Dynamics 365 Manufacturing helps elevate your
                operations, support your manufacturing continuity, ensure
                real-time access into the entire supply chain and distribution
                process, and scale your business leveraging cloud facilitation.
              </p>
              <p>
                With AI insights and 360-degree data view, bring transparency in
                your field service, and enable smarter maintenance to impact the
                overall manufacturing impact throughout your organization.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  Why Microsoft
                  <br />
                  Dynamics 365 <br />
                  for Manufacturing?
                </h2>
                <p>
                  Dynamics 365 Manufacturing ERP, CRM and BI solutions helps to
                  unify manufacturing operations, enables better visibility, and
                  boosts customer engagement while minimizing downtime and
                  maximizing resource utilization which in turn impacts the
                  productivity level as well as scalability.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Centralize your product information while improving
                        quality, safety, and quality training practices across
                        your manufacturing unit. Effectively plan and drive
                        seamless distribution. Even you can re-plan production
                        and distribution to fulfill the continuously changing
                        customer demands with timely effect.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Forecast demand leveraging AI algorithms, simplify your
                        procurement processes while eliminating redundant and
                        repetitive efforts. Drive simplified and integrated
                        warehousing to ensure high availability up to 99.9
                        percent uptime.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Connect your manufacturing units leveraging AI and IoT
                        efficiencies. Streamline sales data and enable
                        omnichannel experience throughout your manufacturing
                        flow. Seamlessly manage Bills of Materials, Capacity
                        Planning, optimize stock, and keep running your
                        production lines
                      </p>
                    </div>
                  </div>
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
                <div className="call_to_action-left">
                  <h3>Connect With Our Professionals</h3>
                  <p>
                    Let's connect and reveal your manufacturing needs to avail
                    the optimal industry solution.
                    <br />
                  </p>
                  <div className="m-o-t m-o-t-inde">
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
            </div>
          </div>
        </section>
        <section className="industry_service_bottomss">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Dynamics 365 For Manufacturing Features</h2>
                </header>
              </div>
            </div>
            <div className="row position-relative g-5">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/designing-icon.svg"
                      alt="Design-and-Training"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Design & Training </h3>
                    <p>
                      Introduce new product range and service rapidly.
                      Streamline change management while improving safety,
                      boosting quality, and maximizing productivity.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/planning-icon.svg"
                      alt="Planning-and-Sourcing"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Planning & Sourcing</h3>
                    <p>
                      Plan production cycles and enable a seamless distribution
                      process. Leveraging the AI-enriched insights; forecast
                      demand and simplify the procurement process.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/Production-Mnagement.svg"
                      alt="Production-Mnagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production Management</h3>
                    <p>
                      Bring agility and sustainability in your manufacturing
                      using IoT & AI. With intelligent manufacturing solutions,
                      satisfy the continuously changing customers' needs.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/Distribution-Delivery.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Distribution & Delivery </h3>
                    <p>
                      Track inventory levels, manage warehousing, and ful fill
                      orders effectively using real-time data. Enable seamless
                      distribution through Dynamics 365 for Distribution.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/Asset-Management.svg"
                      alt="Asset-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Asset Management</h3>
                    <p>
                      Connect and manage your assets by Increasing resilience.
                      Enable predictive maintenance and process automation with
                      intelligent manufacturing solutions.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/Sales-Management.svg"
                      alt="Sales-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Sales Management</h3>
                    <p>
                      Accelerate lead generation and identify opportunities.
                      Streamline & automate sales data and drive omnichannel
                      experience to attain maximized results.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/connect-collaborate.svg"
                      alt="connect-collaborate"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Management</h3>
                    <p>
                      Build and sustain your massive customer relationship with
                      real-time predictive insights. Personalize your customer
                      engagement to drive sales.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/assets/img/Service-Management.svg"
                      alt="Service-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Service Management</h3>
                    <p>
                      Implementing Dynamics 365 solutions for manufacturing
                      companies helps to provide an exceptional customer
                      experience while enabling proactive field service and
                      remote support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row movi-up ">
              <div className="col-lg-12">
                <div className="center-pic">
                  <img src="/assets/img/Group-948.png" alt="Group-948.png" />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/assets/img/manufacturing side.png"
                      className="fix-im"
                      alt="manufacturing side"
                    />
                    <div className="video-ytube">
                      <div className="popup-btn">
                        <NavLink
                          to="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/assets/img/video-Manufacturing.png"
                            alt="video-Manufacturing"
                          />
                          <span className="cente-icns">
                            <img
                              src="/assets/img/play_icons.svg"
                              alt="play_icons"
                            />
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>
                    How Dynamics 365 for Manufacturing Can Evolve Your Business
                    Values
                  </h2>
                  <p>
                    If you want to get in-depth insights on how implementing
                    Dynamics 365 for manufacturing can help to streamline their
                    process, request your demo today.
                  </p>
                  <div className="text-lg-start">
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
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>
                    How To Bring A Seamless Flow <br />
                    to your Non-profit organization?
                  </h3>
                  <p>
                    We can understand your specific business world and can build
                    a solution addressing your custom business needs and
                    considering your enterprise values. Just talk to our experts
                    and let's come up with a specific solution for your business
                    to impact your overall organizational practices and maximize
                    your outcomes.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
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
        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h3>EXPLORE Other Industries</h3>
            </header>
            <div className="row mobile-margin-01">
              <div className="col-lg-12">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <NavLink to="/food-and-beverages">
                              <div className="img-wrp">
                                <img
                                  src="/assets/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                  Efficiently manage your inventory and supply
                                  chain by implementing Dynamics 365 for Food
                                  and Beverages business.
                                </p>
                                <span>Explore Now</span>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <NavLink to="/microsoft-cloud-for-nonprofit">
                                <div className="img-wrp">
                                  <img
                                    src="/assets/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Not for Profit</h3>
                                  <p>
                                    Bring Transparency And Drive Efficiency In
                                    Your Non-Profit Organization With Microsoft
                                    Dynamics 365 For Charities.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <NavLink to="/ecommerce">
                                <div className="img-wrp">
                                  <img
                                    src="/assets/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>
                                    Optimize Your End-To-End Ecommerce Processes
                                    And Improve Your Customer Experience.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <NavLink to="/professional-services">
                                <div className="img-wrp">
                                  <img
                                    src="/assets/img/proffesional-service.svg"
                                    alt="proffesional-service"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Professional Services</h3>
                                  <p>
                                    Streamline And Efficiently Manage Your
                                    Professional Services with Microsoft
                                    Dynamics 365 Business Applications.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <NavLink to="/microsoft-cloud-for-manufacturing">
                                <div className="img-wrp">
                                  <img
                                    src="/assets/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>
                                    Keep track of your production lines and
                                    bring transparency with Microsoft Dynamics
                                    365 for Manufacturing and Distribution.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <NavLink to="/industries">
                                <div className="img-wrp">
                                  <img
                                    src="/assets/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>
                                    Leverage maximum possible resources to
                                    manage end-to-end business processes for
                                    your Startup with Microsoft Dynamics 365.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndustriesManufacturing;
