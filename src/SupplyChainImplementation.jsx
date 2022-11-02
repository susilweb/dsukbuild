import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ExternalLink } from "react-external-link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
const SupplyChainImplementation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Helmet>
      <title>Dynamics 365 Supply Chain Management Implementation | Dynamics Square</title>
<meta name="description" content="Bring agility, optimise resources, and build a resilient supply chain through Dynamics 365 Supply Chain Management implementation."/>
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/d365-supply-chain-management-implementation/" />
<meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
              Dynamics 365  <br />  Supply Chain Management Implementation 
              </h1>
              <p>
              Bring agility, optimise resources, and build a resilient supply chain through implementing Dynamics 365 Supply Chain Management.<br /><br /><strong>Learn how Dynamics 365 SCM can help you drive business continuity while enhancing revenue.</strong>
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo Now!</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/img/Supplychain banner.png"
                alt="Supplychain Implementation banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
            <header className="section-header">
            <h2>How Dynamic Supply Chain Management implementation can help you build a resilient supply chain system?</h2>
            <p>
            Dynamics 365 Supply Chain Management is an end-to-end ERP solution to build a full-proof supply chain system while eliminating redundancies and ensuring a smooth distribution system. It comes with embedded AI, ML, Big Data, Mixed Realty, and IoT technologies, which offer an intelligent platform to connect various departments, including warehouse, inventory, distribution, procurement, manufacturing, and logistics, to streamline the entire supply chain with improved customer satisfaction.
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
                        <span>Enhanced Operational Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p><NavLink to="/products/dynamics-365-supply-chain-management/">D365 Supply Chain Management</NavLink> is a cutting-edge SCM software that lifts your business and may expand your operations faster while performing more efficiently. It manages the entire supply chain processes, including collaboration, cost savings, improved delivery standards, and exponential growth, with ease.</p>
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
                      
                        <span>Boost Revenue</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <p>Dynamics SCM can streamline your supply chain, improve communication, and enable collaboration between your team members to help you reduce costs, improve efficiencies, and ultimately boost your revenue.</p>
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
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                       
                        <span>Synchronized Departments</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>Dynamics Supply Chain Management implementation enables businesses to link all the departments and share the data efficiently with one another for constant business flow to get the maximum output from limited resources.</p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                     
                        <span>Advanced Data Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>A supply chain consists of several operations, checkpoints, and milestones where the data must be updated in real-time for maximum operational efficiency. The in-built advanced data insights keep track of all actions and let the users take informed decisions proactively.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewasd">
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
                        <span>Optimize Supply Chain</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                      <p>There is always a room for improvement in every business. This powerful application comes with process optimization that enables the users to optimize the existing operations and prepare the system for data and demand forecasting.</p>
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
                        <span>Leverage Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                      Most of the recurring and manual processes can be automated to optimise workforce productivity with minimal effort. The automation in this application helps you reduce downtime, improve profit margins, leverage the power of IoT, and improve operational efficiency.
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Maximised ROI</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>Dynamics 365 Supply Chain Management controls the set of activities that ensure the efficient and effective flow of goods and services from suppliers to end customers. This is an effective solution that can assist you in reducing inventory costs, improving customer service, and supporting communication.</p>
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
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <span>Flexible with Customizations</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewasd"
                    >
                      <div className="accordion-body">
                        <p>Customization and integration make a solution adaptable to all changing business needs as per market and customer demand. D365 SCM is flexible with unique customizations to perform specific business operations, enabling more focus on growth and scalability rather than being consumed with core operations.</p>
                      </div>
                    </div>
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
                <h3>Avail Full support for your business beyond implementation!</h3>
                <p>Join hands with a hassle-free D365 SCM implementation partner today and avail support beyond it.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-6-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-6-pic">
                <img src="/assets/img/imp-left.svg" alt="imp-left.svg" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>Our Simple yet Powerful D365 SCM Implementation Methodology</h2>
                  <p>We follow Microsoft's certified implementation methodology to understand your existing legacy system and guarantee you a successful, secure, and transparent process.</p>
                </div>
                <div className="box-6-bottom">
                  <div className="posi-bottm">
                    <Swiper
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: true,
                    }}
                      loop={true}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Thumbs ,Autoplay]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Analysis Phase</h4>
                          <p>In this, our team will start working to prepare the FRD (Functional Requirement Document) to understand the organization's current processes and understand the requirements better.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Design Phase</h4>
                          <p>Our team will create a GAP-FIT manual based on functional requirements to analyse the requirements which can be provided as FIT and the needs we have to work on or build specifically as GAP. In this, we specify the necessary, standard, add-on configurations, and integration needs.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Development Phase</h4>
                          <p>In this case, our team will begin working to create a personalised and appropriate Dynamics 365 supply chain management solution that understands your needs and assists you in achieving maximum growth with increased profitability.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Deployment Phase</h4>
                          <p>In this, we deploy the system on servers so that the users can test it. Also, it lets us test the system whether it is built as per GAP-FIT and FRD or not. If not, we will make further changes to provide an ideal solution for the business.</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>Post Go-Live Support</h4>
                          <p>In the last phase, we make the system live so your team can start working on it with full efficiency and productivity.</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="posi">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={false}
                      spaceBetween={5}
                      slidesPerView={5}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/assets/img/Component-1-icons.svg"
                            className="overmain-thumb"
                            alt="Component-1-icons"
                          />
                          <img
                            src="/assets/img/Component-1-iconss.svg"
                            className="over"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/assets/img/Component-2.svg"
                            className="overmain-thumb-1"
                            alt="Component-2"
                          />
                          <img
                            src="/assets/img/Component-2-iconss.svg"
                            className="over-1"
                            alt="Component-2-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/assets/img/Component-3.svg"
                            className="overmain-thumb-2"
                            alt="Component-3"
                          />
                          <img
                            src="/assets/img/Component-3-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/assets/img/Component-4.svg"
                            className="overmain-thumb-3"
                            alt="Component-4"
                          />
                          <img
                            src="/assets/img/Component-4-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/assets/img/Component-5.svg"
                            className="overmain-thumb-4"
                            alt="Component-5"
                          />
                          <img
                            src="/assets/img/Component-5-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    



      <section className="Solution-business-why mar-back">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
            <header className="section-header">
            <h2>Why Choose Dynamics Square as Your Trusted Dynamics 365 Supply Chain Management Implementation Partner?</h2>
            <p>Before the start of the implementation process, our sole motto is to understand your unique business operations, explore future needs, and then offer a tailored business solution. We believe in full customer satisfaction and building unbreakable trust with our customers (a major reason for being successful for the last 11 years).</p>
          </header>
            </div>
          </div>
          <div className="row pdd1">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Certified <br />
                  Professionals
                  </h3>
                  <div className="overlay">
                    <p>We have a team of certified professionals with years of experience in providing <NavLink to="/our-services/dynamics-365-implementation-services/">implementation</NavLink>, <NavLink to="/our-services/dynamics-365-upgrade-services/">upgrade</NavLink>, and <NavLink to="/our-services/dynamics-365-support-services/">support services</NavLink> to businesses like yours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Cost-Effective
                    <br />
                    Pricing
                  </h3>
                  <div className="overlay">
                    <p>We provide competitive and cost-effective pricing for all services to help you get the most out of your hard-earned investment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Domain 
                    <br />
                  Expertise
                  </h3>
                  <div className="overlay">
                    <p>We have professionals with extensive knowledge and experience in different domains cater to all industries, irrespective of their type and size.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Seamless and Fast
                    <br />
                    Implementation
                  </h3>
                  <div className="overlay">
                    <p>
                    We follow a fast, unique, and seamless Dynamics 365 Supply Chain Management implementation process without depending upon the complexity of the processes and operations to keep your business running efficiently.  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  24*7  <br />
                  Customer Support
                  </h3>
                  <div className="overlay">
                    <p>Our dedicated <NavLink to="/our-services/dynamics-365-support-services">D365 support</NavLink> team is always available to help you in a time of need without any time, region, or language barriers to help you rise above the limits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  100% Customer <br />
                  Satisfaction
                  </h3>
                  <div className="overlay">
                    <p>We will keep making efforts till you confirm 100% satisfaction with the support and services we have provided to you. The whole process wouldn't be easy, but you have our words.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
            <header className="section-header">
            <h2>Dynamics 365 <br /> Supply Chain Management Pricing</h2>
            <p>
              Build a consistent and flexible supply chain by our Dynamics 365
              Supply Chain Management Packages
            </p>
          </header>
            </div>
          </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365
                  <br />
                  Supply Chain Management
                </h3>
                <div className="price">
                  <sup>£</sup>135.70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Build Resilience with an Agile Supply Chain with Dynamics
                    365. Enhance Customer Service. Drive Business Sales. Manage
                    Topline Revenue. Market Smarter. Services: Cloud-Based CRM,
                    Customer Support, Automate Sales, Marketing Features.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
            <p className="text-center" style={{padding:'50px 0px 0px 0px'}}><b>Looking for Customised Pricing as per your business requirements?</b></p>
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <NavLink
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get the Quotes NOW!</span>
                </NavLink>
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
                <h3>Start Today and Upgrade Later</h3>
                <p>Being a flexible <NavLink to="/products/microsoft-dynamics-erp/">ERP solution</NavLink>, you can easily increase its capabilities based on your business growth and changing modern needs. You can start today with the current requirements and upgrade the system later.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Speak to a Certified Gold Microsoft Partner</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
            Most searched Dynamics 365 <br /> Supply Chain Implementation FAQs</h2>
            <p>Click to explore the best answer!</p>
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
                     What's next after submitting my contact details? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Once you submit your details, one of our experts will call you to understand your business, its present requirements, and future needs too, and the process is known as Phase 1 Discovery Call. We will document everything, prepare an FRD, perform a FIT-GAP analysis, and start the implementation process. In case of need, we arrange a Discovery Call again with our expert functional consultants.</p>
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
                      What's my role in the entire implementation project?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Your sole role would be to give accurate information to your <NavLink to="/our-services/dynamics-365-implementation-services">Dynamics 365 implementation partner</NavLink> about the current processes and future needs so that we can implement a perfect D365 Supply Chain Management implementation solution for you. Also, you need to be cooperative during the process for a seamless and smooth implementation.</p>
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
                     Does Dynamics Square provide training?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>To properly utilise the newly installed solution, we provide a free training session for users to understand the system functions, features, and capabilities. Also, we will help you understand the core capabilities so that you can understand your current and future requirements for the Phase 2 implementation process (in case of need).</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                     How long will it take to implement the project successfully?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    <p>Neither we, nor anyone else, can give you an exact time frame for implementing a solution, whether it be <NavLink to="/products/microsoft-dynamics-365-finance-operations/">Dynamics 365 Finance and Operations</NavLink> or SCM without understanding the business and its requirements. Various factors, including the number of processes, complexity of operations, integrations, and customizations, specify the time.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                    What is the accurate cost of D365 Supply Chain Management implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Like time, various factors define the accurate cost of implementation. You can simply call us and fill in the Contact Form to get the exact quote for the implementation process.</p>
                      <p><b>See Also -</b></p>
                      <ul>
                        <li><NavLink to="/dynamics-365-finance-implementation/">Dynamics 365 Finance Implementation</NavLink></li>
                        <li><NavLink to="/power-bi-implementation/">Power BI Implementation</NavLink></li>
                        <li><NavLink to="/dynamics-365-sales-implementation/">Dynamics 365 Sales Implementation</NavLink></li>
                      </ul>
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

export default SupplyChainImplementation;
