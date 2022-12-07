import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
// import AnimatedNumber from "react-animated-number";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>
          Microsoft Dynamics 365 Partner UK, London | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics Square is UK&#039;s leading Gold Microsoft Dynamics 365 Partner helping businesses to achieve desired results with Dynamics 365 apps and services."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Microsoft Dynamics 365 Partner UK, London | Dynamics Square"
        />
        <meta
          name="og:description"
          content="Dynamics Square is UK's leading Microsoft Dynamics 365 Partner. We help businesses implement Microsoft Dynamics 365 solutions. Contact us to know more."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/assets/img/about.jpg"
        />
        <meta
          property="og:image"
          content="https://www.dynamicssquare.co.uk/assets/img/about.jpg"
        />

        <meta property="og:site_name" content="Dynamics Square" />
        <meta property="fb:app_id" content="2007906422699147" />

        <meta
          property="og:image:secure_url"
          content="https://www.dynamicssquare.co.uk/assets/img/about.jpg"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="DS Favicon" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Microsoft Dynamics 365 Partner UK, London | Dynamics Square"
        />
        <meta
          name="twitter:description"
          content="Dynamics Square is UK's leading Microsoft Dynamics 365 Partner. We help businesses implement Microsoft Dynamics 365 solutions. Contact us to know more."
        />
        <meta
          name="twitter:image"
          content="https://www.dynamicssquare.co.uk/assets/img/about.jpg"
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />

        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="admin" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="5 minutes" />
        <meta name="google-site-verification" content="UA-76870474-2" />
        <meta name="msvalidate.01" content="EE56DA95B952D734B4521A0EFA1F0E8B" />
      </Helmet>

      <section id="hero" className="hero hero-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <h1 data-aos="fade-up">
              UK's Trusted <br /> Microsoft Gold Partner
              </h1>
              <p>Simplify your end-to-end business processes to maximize ROI, agility, and growth with Microsoft cloud technology.</p>
              <div>
                <div className="text-center text-lg-start btn-welcome">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book A Free Demo Today</span>
                  </Link>
                </div>
                <div className="bnner_inline_images">
                  <ul>
                    <li>
                      <img
                        src="/assets/img/Microsoft Partner black.png"
                        alt="Microsoft Partner black.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img hero-img-home"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="banner-service-wraper">
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/dynamics-365-business-central/">
                        <img
                          src="/assets/img/business-center-logo.svg"
                          alt="business-center-logo"
                        />
                        <span>
                          Business <br />
                          Central
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-azure/">
                        <img
                          src="/assets/img/azur-icons.svg"
                          alt="azur-icons"
                        />
                        <span>Azure</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-power-apps/">
                        <img
                          src="/assets/img/Powerapps_power-apps.svg"
                          alt="Powerapps_power-apps"
                        />
                        <span>
                          Power
                          <br /> Apps
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-finance/">
                        <img
                          src="/assets/img/finace-icons.svg"
                          alt="finace-icons"
                        />
                        <span>Finance</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-customer-service/">
                        <img
                          src="/assets/img/customer-service-icons.svg"
                          alt="customer-service-icons"
                        />
                        <span>
                          Customer
                          <br /> Service
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-3">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/dynamics-365-supply-chain-management/">
                        <img
                          src="/assets/img/supplychain-logo.svg"
                          alt="supplychain-logo"
                        />
                        <span>
                          Supply
                          <br />
                          Chain
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="list-n-wrp-size">
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365/">
                        <img
                          src="/assets/img/ds-365.png"
                          alt="Microsoft Dynamics 365 Partner"
                        />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-field-service/">
                        <img
                          src="/assets/img/feald-service-logo.svg"
                          alt="feald-service-logo"
                        />
                        <span>
                          Field <br /> Service
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-power-bi/">
                        <img
                          src="/assets/img/powerbilogo.png"
                          alt="powerbilogo"
                        />
                        <span>Power BI</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-marketing/">
                        <img src="/assets/img/marketing.svg" alt="marketing" />
                        <span>Marketing</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-sales/">
                        <img
                          src="/assets/img/Sales_scalable.svg"
                          alt="Sales_scalable"
                        />
                        <span>Sales</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/dynamics-365-human-resources/">
                        <img
                          src="/assets/img/human-resource.svg"
                          alt="human-resource"
                        />
                        <span>
                          Human <br /> Resources
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-9">
            <header className="section-header">
            <h2>
            Microsoft Business Apps: Innovative Solutions to Boost Business Performance 
            </h2>
            <p>
            Microsoft business applications offer various efficient solutions for better ROI, including ERP (Dynamics NAV, AX), CRM (Dynamics 365 CE), and Power Platform (Power BI implementation). 
            </p>
          </header>
            </div>
          </div>
          <div className="row gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/business-center-logo.svg"
                    alt="business-center-logo"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p>
                  Drive an efficient business model on the cloud while keeping
                  real-time eyes on your sales insights, effectively manage your
                  finance, and ensure a sound customer experience.
                </p>
                <Link
                  to="/products/dynamics-365-business-central/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/finace-icons.svg"
                    alt="finace-icons"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Finance
                  </h3>
                </div>
                <p>
                  Simplify your finance hierarchy and boost your organization's
                  ability to develop, modify and control budgets, make faster
                  and more informed financial decisions.
                </p>
                <Link
                  to="/products/microsoft-dynamics-365-finance/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/supplychain-logo.svg"
                    alt="supplychain-logo"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Supply Chain
                  </h3>
                </div>
                <p>
                  Optimize resources, maximize operational efficiency, and
                  accelerate time to market while keeping real-time eyes in your
                  end-to-end supply chain operations.
                </p>
                <Link
                  to="/products/dynamics-365-supply-chain-management/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/Sales_scalable.svg"
                    alt="Sales_scalable"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Sales
                  </h3>
                </div>
                <p>
                  Boost your sales, build better customer relationships, and
                  maximize your revenue outcomes through Microsoft Dynamics 356
                  for Sales.
                </p>
                <Link
                  to="/products/microsoft-dynamics-365-sales/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/powerbilogo.png"
                    alt="Powerapps_power-apps"
                    className="icon"
                  />
                  <h3>
                    Microsoft <br />
                    Power BI
                  </h3>
                </div>
                <p>
                  Steadily monitor your business activities with power-packed
                  data visualization and real-time reporting insights to make
                  informed decisions for better productivity ahead.
                </p>
                <Link to="/products/microsoft-power-bi/" className="read-more">
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                  />
                  <h3>
                    Internet Of <br />
                    Things
                  </h3>
                </div>
                <p>
                  Outreach more efficient, scalable, and secure data
                  distribution practices by simply integrating cloud-equipped,
                  modernized, and seamless data-driven solutions with Microsoft
                  Azure.
                </p>
                <Link
                  to="/products/azure-iot-internet-of-things/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="serve-more-new">
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="more-new-inner pad12">
              <h3>Looking for a Dynamics 365 implementation partner?</h3>
              <p>We can help you get a stress-free and cost-effective Dynamics 365 implementation to minimise efforts and maximise outcomes that bring continuous growth for your business.</p>
              <div className="cla-brn">
                <NavLink data-bs-toggle="modal"
                    to="#exampleModal" className="btn btn-md btn-danger btn-custmm">Request a Demo</NavLink>
              </div>
            </div>
          </div>
          <hr className="ds-nnn-mo" />
          <div className="col-lg-6">
          <div className="more-new-inner pad13">
              <h3>Want to know what more Dynamics 365 can do?</h3>
              <p>Microsoft Dynamics 365 can be your steppingstone for rapid business growth and scalability to your business powered by Microsoft cloud technology. Want Dynamics 365 in action?</p>
              <div className="cla-brn">
                <NavLink to="/products/microsoft-dynamics-365/" className="btn btn-md btn-danger btn-custmm">Learn More</NavLink>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row ns-bdd">
          <div className="col-lg-12">
            <div className="new-hh">
            <h2>What Your Microsoft Partner can Deliver:</h2>
            <p>With more than 11 years of experience, we have a proven record of scaling businesses to new <br /> heights with seamless and highly scalable services.</p>
            </div>
          </div>
            <div className="col-lg-4">
              <div className="our-serv-new-de">
                <img src="/assets/img/imp-1.png" alt="Implementation Services" />
                <h3>Implementation</h3>
                <p>Our stress-free Dynamics 365 implementation services, catered by a proactive team of Microsoft consultants, offer customized solutions with superior technical expertise to scale your business.</p>
                <NavLink to="/our-services/dynamics-365-implementation-services/">Learn More</NavLink>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-serv-new-de">
                <img src="/assets/img/imp-2.png" alt="Upgrade" />
                <h3>Upgrade</h3>
                <p>Modernise your legacy system by leveraging new capabilities to revolutionise your business with our Dynamics 365 upgrade services. Get automatic updates, seamless integrations, and better RoI.</p>
                <NavLink to="/our-services/dynamics-365-upgrade-services/">Learn More</NavLink>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="our-serv-new-de">
                <img src="/assets/img/imp-3.png" alt="Support" />
                <h3>Support</h3>
                <p>Avail our comprehensive and adaptive remote or on-site Dynamics 365 support for all Microsoft business applications, including NAV, GP, AX, Business Central, Finance & Supply Chain, and Power BI.</p>
                <NavLink to="/our-services/dynamics-365-support-services/">Learn More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="services bg-shape">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Become an Industry leader</h2>
            <p>By implementing Dynamics 365 Business Applications</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/StartUp-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Startups</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Startups</h3>
                  <p>
                    With Microsoft Dynamics Business Solutions, startups can
                    streamline their business efficiency and ensure levelling up
                    their business in a shorter time span.
                  </p>
                  <Link
                    to="/industries/startups/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Not for Profit--icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="Not for Profit"
                  />
                  <h3>Not for Profit</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Not for Profit</h3>
                  <p>
                    Our experienced Dynamics consultants in the UK can help to
                    streamline your end-to-end non-profit practices across your
                    organization or divisions.
                  </p>
                  <Link
                    to="/industries/microsoft-cloud-for-nonprofit/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/E-Commerce-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>E-Commerce</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>E-Commerce</h3>
                  <p>
                    Automate your entire e-commerce operations from ordering and
                    inventory management to supply chain efficiency to final
                    customer delivery with Dynamics 365 E-commerce.
                  </p>
                  <Link
                    to="/industries/ecommerce/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Manufacturing & Distribution-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Manufacturing & Distribution</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Manufacturing & Distribution</h3>
                  <p>
                    By eliminating redundancies, our experts in the United
                    Kingdom can boost efficiency in your manufacturing &
                    distribution model through D365 Business Applications.
                  </p>
                  <Link
                    to="/industries/microsoft-cloud-for-manufacturing/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Professional Services-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Professional Services</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Professional Services</h3>
                  <p>
                    We help to automate and streamline your professional
                    services from managing finances, customers, and clients to
                    projects while reducing costs and equipping efficiency.
                  </p>
                  <Link
                    to="/industries/professional-services/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Food & Beverages-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Food & Beverages</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Food & Beverages</h3>
                  <p>
                    We deep-dive your industry-specific needs and implement a
                    next-generation Microsoft D365 Solution delivering true
                    values to your food & beverages business domain.
                  </p>
                  <Link
                    to="/industries/food-and-beverages/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Health-Check">
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics 365 <br /> System Health Check
            </h2>
            <p>
              Enlarge your business capabilities and ensure your business <br />
              continuity with our Dynamics 365 system health check program.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-6 aos-init align-self-center">
              <img
                src="/assets/img/system-health-check.png"
                className="system-health-check"
                alt="Dynamics 365 System Health Check"
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content align-self-center">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Considering your present business requirements and future
                      business anticipations, we diagnose your real-time
                      requirements demonstrating your future approach.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Consultants at Dynamics Square provide free system
                      health-check to discover the optimum and customized
                      Microsoft Dynamics 365 needs as per your distinct business
                      context.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Now, it's time to decide whether you want to stay with
                      your existing equipped system or would love to schedule a
                      Microsoft Dynamics Demo to implement a modern-equipped
                      system.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <Link
                to="/free-dynamics-365-system-health-check/"
                className="read-more"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Get Free System Health Check
                <i className="bi bi-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom07">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-7 align-self-center">
              <div className="side-heading-custom-01">
              <h2>About Dynamics Square</h2>
              </div>
              <div className="custom-p-001 custom-p-009">
               
                <p>As a Gold Microsoft Dynamics Partner, we can help you revolutionize your business processes and operations while leveraging the power of the cloud, AI, and ML.</p>
                <p>Since 2011, we have been serving our global customers, enabling them to make more profits by implementing tech-driven cloud solutions.</p>
                <p>We are one of the trusted dynamics consultants and certified Microsoft CRM & ERP partners, helping businesses like yours to achieve exponential growth while resolving critical business problems with 100% user satisfaction. </p>
                <NavLink to="/about-us/">Find Out Our Approach</NavLink>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/assets/img/about-home-left.png"
                  alt="about-home-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts counts-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon awesome-user-check.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={135}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">135+</span>
                  <p>Microsoft Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon awesome-award.png"
                    alt="Icon awesome-award"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={11}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">11+</span>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon awesome-globe-asia.png"
                    alt="Icon awesome-globe-asia"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={6}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">6+</span>
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon ionic-md-thumbs-up.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  {/* <span>
                    <AnimatedNumber
                      component="text"
                      value={99}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span> */}
                  <span className="inner">99%</span>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>
                  What Our Clients <br /> Have To Say About Us
                </h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper test-client-page"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/assets/img/testimonials/Terence-Turner.png"
                              className="testimonial-img"
                              alt=""
                            />
                            <div className="imginner">
                              <img
                                src="/assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              Dynamics Square Team provided us a top-level
                              service. Well trained staff as well as excellent
                              support when needed. Very professional and
                              trustworthy.
                            </p>
                            <h3>Terence Turner</h3>
                            <h4>General Manager, Arteak</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/assets/img/testimonials/Nicolas-Hopwood.png"
                              className="testimonial-img"
                              alt="Nicolas-Hopwood"
                            />
                            <div className="imginner">
                              <img
                                src="/assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              The team at Dynamics Square helped us in upgrading
                              our erp system to the latest version of D365
                              Business Central resulting in a successful rollout
                              to our staff.
                            </p>
                            <h3>Nicolas Hopwood</h3>
                            <h4>Facilities Manager, Pasante</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="/assets/img/testimonials/Jonathan-W.png"
                              className="testimonial-img"
                              alt="Jonathan-W.png"
                            />
                            <div className="imginner">
                              <img
                                src="/assets/img/Icon metro-quote.png"
                                alt="metro-quote"
                              />
                            </div>
                            <p>
                              We have worked with Dynamics Square since 2019.
                              Our working relationship has built during this
                              period, and we have found them to be very
                              professional
                            </p>
                            <h3>Jonathan W</h3>
                            <h4>Technical Director, Parweld</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <img
                    src="/assets/img/testmonial-side-pic.png"
                    className="testmonial-side-pic"
                    alt=""
                  />
                  {/* <div className="testimonials-rigt-iner-1">
                    <img src="/assets/img/test-side-1.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-2">
                    <h4>250+</h4>
                    <span>
                      Happy Clients
                      <br />
                      Worldwide
                    </span>
                  </div>
                  <div className="testimonials-rigt-iner-3">
                    <img src="/assets/img/test-side-3.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-4">
                    <img src="/assets/img/test-side-2.jpg" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: true,
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/client-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/client-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/client-3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/client-5.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
            <div className="col-lg-5 align-self-center">
              <img
                src="/assets/img/case-study-side-banner.png"
                alt="case-study-side-banner"
              />
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/assets/img/case-1.png"
                        className="casestudys-slider-item-img"
                        alt=""
                      />
                      <p>
                        A leading British based manufacturer of Military
                        Equipment implemented Microsoft Dynamics 365 Business
                        Central to streamline their finance and inventory
                        management process.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>2X</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                        <div className="case-content">
                          <p>80%</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link
                          to="/case-studies/cqc/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/assets/img/crm-trading.png"
                        className="casestudys-slider-item-img"
                        alt="crm-trading"
                      />
                      <p>
                        UK's leading fragrance, skincare, cosmetics, and
                        haircare wholesaler was looking to improve its
                        operational efficiencies with Microsoft Dynamics NAV
                        2018. Discover now.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>4x</p>
                          <span>Improved Inventory System</span>
                        </div>
                        <div className="case-content">
                          <p>100%</p>
                          <span>Alliance with HMRC</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link
                          to="/case-studies/crm-trading/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/assets/img/wipersupplywide.png"
                        className="casestudys-slider-item-img"
                        alt="wipersupplywide"
                      />
                      <p>
                        British-based Hygienic Disposable Cleaning & Wiping
                        Products wholesaler wanted to up and cross sell to
                        increase the sales volume with customers. Read how they
                        did it!
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>10x</p>
                          <span>Improved Customer Experience</span>
                        </div>
                        <div className="case-content">
                          <p>50%</p>
                          <span>Increased Sales Revenue</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link
                          to="/case-studies/wiper-supply-services/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
