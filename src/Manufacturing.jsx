import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import Blog from "./Blog";
const Manufacturing = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Microsoft Cloud for Manufacturing | Dynamics Square</title>
        <meta
          name="description"
          content="By implementing Microsoft Cloud for Manufacturing, you can uncover new manufacturing capabilities to effectively connect your employees, workflow, processes, drive transparency, profitability, and agility."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/microsoft-cloud-for-manufacturing/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Microsoft Cloud for Manufacturing | Dynamics Square"
        />
        <meta
          property="og:description"
          content="By implementing Microsoft Cloud for Manufacturing, you can uncover new manufacturing capabilities to effectively connect your employees, workflow, processes, drive transparency, profitability, and agility."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/industries/microsoft-cloud-for-manufacturing/"
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
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="586" />
        <meta
          property="og:image:alt"
          content="Cloud-For-Manufacturing-banner"
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Microsoft Cloud for Manufacturing | Dynamics Square"
        />
        <meta
          name="twitter:description"
          content="By implementing Microsoft Cloud for Manufacturing, you can uncover new manufacturing capabilities to effectively connect your employees, workflow, processes, drive transparency, profitability, and agility."
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="3 minutes" />
      </Helmet>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XHOmBV4js_E"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Cloud
                  <br />
                  For Manufacturing
                </h1>
                <p>
                  Connect your people, workflow, and operations to impact your
                  productivity level, improve your customer satisfaction, and
                  uplift your outcomes with Microsoft Cloud for Manufacturing
                  Solutions.
                </p>
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
                  src="/assets/img/manufacturing-banner.png"
                  alt="Microsoft Cloud For Manufacturing"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>
                Manage it all, with <br />
                Microsoft Cloud for Manufacturing!
              </h2>
              <p>
                With Microsoft cloud for Manufacturing, improve your
                capabilities to manage and drive your core processes and bring
                continuous flow in your operations. With the help of integrated
                manufacturing cloud solutions, uncover new manufacturing capabilities to effectively connect your employees, workflow,
                processes, and to drive transparency, profitability, and
                agility.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                Why Choose Microsoft <br />Cloud for Manufacturing? 
                </h2>
                <p>
                  By enabling IoT-connected experience integrated with AI, Mixed
                  Reality, and Predictive technologies, Cloud Manufacturing
                  solution is designed to maximize operational capability,
                  empower frontline workers, enable remote efficiency, unlock
                  cloud-based potentials, and maximize the overall productivity
                  wrapped with regulatory compliance, required privacy, and
                  transparency.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Improve your employees' skills, streamline your
                        production line, and maximize your customer satisfaction
                        with highly integrated cloud manufacturing solutions.
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
                        Connect across your digital channels including Dynamics
                        365, Microsoft 365, Microsoft Teams, Power Platforms,
                        HoloLens 2, and Microsoft Azure with Microsoft Cloud
                        Manufacturing to drive a highly innovative, productive,
                        and customer-driven experience.
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
                        Start delivering new products, improved services, and
                        maximized experiences to your customers by upskilling
                        your workforce capability, introducing smart factory
                        modernization, and enabling intelligent systems all
                        through with integrated and embedded cloud manufacturing
                        solutions.
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
                  <img src="/assets/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>
                    Talk to <br />
                    Our Expert Team
                  </h3>
                  <p>
                    Let's explore and extend modernized capabilities with
                    Microsoft Cloud solution for Manufacturing.
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
        <section className="industry_service_bottoms">
          <div className="container">
            <header className="section-header">
              <h2>
                Microsoft Cloud
                <br />
                For Manufacturing Features
              </h2>
            </header>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/custom-crm-solutions.svg"
                      alt="custom-crm-solutions"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Workforce Management</h3>
                    <p>
                      Strengthen your workforce capability by enabling them to
                      connect, operate, and collaborate from anywhere. Support
                      your remote work securely and effectively
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons_flexibility.svg"
                      alt="icons_flexibility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Drive Agility</h3>
                    <p>
                      Bring agile manufacturing capabilities with Microsoft's
                      cloud manufacturing solutions. Enable your workforce to
                      cope with the complexities and drive challenges.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons_supply-chain (1).svg"
                      alt="icons_supply-chain (1)"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Resilient Supply Chain</h3>
                    <p>
                      Connect both your internal and external supply chain,
                      stakeholders, customers, and key data to improve your
                      supply chain resilience while reducing the supply chain
                      disruption.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons-power-automate_Enhanced-Efficiency (1).svg"
                      alt="icons-power-automate_Enhanced-Efficiency (1)"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Digital Transformation</h3>
                    <p>
                      Build digital twins and bring digital thread capability to
                      uplift your product and services. Leverage IoT
                      intelligence to improve visibility and drive digital
                      innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons_customer-relation.svg"
                      alt="icons_customer-relation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Engagement</h3>
                    <p>
                      Empower your sellers, marketers, and service team to
                      connect and engage customers across your digital platforms
                      to improve their experience while reserving profit
                      margins.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons_Improved-Visibility.svg"
                      alt="icons_Improved-Visibility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Improved Visibility</h3>
                    <p>
                      Boost your service team's capability to proactively know
                      their customer issues before the customer could realize
                      and quickly detect as well as resolve the problem.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons_Streamline-Operations.svg"
                      alt="icons_Streamline-Operations"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Streamline Operations</h3>
                    <p>
                      Securely connect employees, products, and processes with
                      real-time efficiency to quickly optimize the issues and
                      drive improved workflow with manufacturing cloud
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/assets/img/icons_Manufacturing-Intelligence.svg"
                      alt="icons_Manufacturing-Intelligence"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Manufacturing Intelligence</h3>
                    <p>
                      Leveraging AI-powered automation combined with IoT and
                      Mixed Reality, optimize processes, improve equipment
                      effectiveness, protect industrial IoT, and ensure OT
                      security.
                    </p>
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
                      src="/assets/img/manufacturing side.png"
                      className="fix-im"
                      alt="manufacturing side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <NavLink
                          data-bs-toggle="modal"
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
                    How to Adopt New Manufacturing Capabilities and Maximize
                    Your Service Capability?
                  </h2>
                  <p>
                    This is how to deploy smart factory experience, adapt
                    faster, and drive digital transformation through dedicated
                    cloud manufacturing solutions.
                  </p>
                  <div className="text-lg-start mm-t">
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
                    How to Maximize Your Business Capabilities with Microsoft
                    Cloud Manufacturing
                  </h3>
                  <p>
                    A healthy conversation with us could be a profitable deal
                    for your business ahead. Let's come closure, share your
                    operational limitations or difficulty with us, and
                    understand your business scope with cloud manufacturing
                    solutions.
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
              <h2>Explore Other Industries</h2>
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
                            <NavLink to="/industries/food-and-beverages/">
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
                              <NavLink to="/industries/microsoft-cloud-for-nonprofit/">
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
                              <NavLink to="/industries/ecommerce/">
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
                              <NavLink to="/industries/professional-services/">
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
                              <NavLink to="/industries/startup/">
                                <div className="img-wrp">
                                  <img
                                    src="/assets/img/start-up.svg"
                                    alt="start-up"
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

        <section className="blogs-extra">
          <div className="container">
            <header className="section-header">
              <h2>
                Check out our Best Resources
                <br />
                for Business Central
              </h2>
            </header>
            <div className="row top-2 gx-5">
              <Blog />
              <div className="col-lg-6 align-self-center">
                <img
                  src="/assets/img/n/Cloud-For-Manufacturing-banner.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Manufacturing;
