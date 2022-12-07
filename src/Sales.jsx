import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import Blog from "./Blog";
import { ExternalLink } from "react-external-link";
const Sales = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Sales | Microsoft Sales CRM Solutions</title>
        <meta
          name="description"
          content="Dynamics 365 for sales is a customer relationship management software that helps to effortlessly build strong relationships with your customers and seamlessly"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-sales/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Dynamics 365 Sales | Microsoft Sales CRM Solutions"
        />
        <meta
          property="og:description"
          content="Dynamics 365 for sales is a customer relationship management software that helps to effortlessly build strong relationships with your customers and seamlessly"
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-sales/"
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
        <meta property="og:image:width" content="872" />
        <meta property="og:image:height" content="712" />
        <meta property="og:image:alt" content="sales-hub-app-Banner" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dynamics 365 Sales | Microsoft Sales CRM Solutions"
        />
        <meta
          name="twitter:description"
          content="Dynamics 365 for sales is a customer relationship management software that helps to effortlessly build strong relationships with your customers and seamlessly"
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="6 minutes" />
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
                Dynamics 365 Sales
              </h1>
              <p>
                Upgrade your system with Microsoft Dynamics 365 Sales to impact
                your sales drive and improve sound customer relationships to
                elevate your business values while maximizing your revenue
                outcomes.
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
              <img src="/assets/img/Sales-banner.png" alt="Dynamics 365 Sales" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>
                What is dynamics 365 Sales?
                </h2>
                <p>
                Microsoft Dynamics 365 for Sales (formerly known as Dynamics CRM)
                helps to improve end-to-end sales practices, build & improve your
                customer relationship, and supports to close sales deals faster.
                With actionable sales insights configured for mobile devices, it
                helps to make instant productive decisions, engage customers, and
                drive effective sales strategy.
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
                            src="/assets/img/sales-hub-app.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Sales Hub App</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Developed on unified interface framework configured with
                        responsiveness that facilitates users with interactive
                        app view and navigation for any screen or device. The
                        Sales Hub app is designed to be used by both desktops
                        and mobile devices and comes with Microsoft Dynamics 365
                        Sales Enterprise Plan.
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
                            src="/assets/img/sales-proffesional-app.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Sales Professional App</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Sales Professional App is designed similar to the Sales
                        Hub app. The only difference is- the entities that Sales
                        Professional app comprises are a subset of entities
                        included in the Sales Enterprise licensing. This app
                        comes and can be availed of with Microsoft Dynamics 365
                        Sales Professional licensing Plan.
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
            <h2>Dynamics 365 For Sales Features</h2>
              <h3>Explore the benefits of implementing Microsoft Dynamics 365 Sales for your business.
              </h3>
            </div>
            
              <div className="m-o-t m-o-t-b">
                {/* <NavLink to="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </NavLink> */}
              </div>
              {/* <div className="downlad_guid">
                        <NavLink to="#">
                        <span>Download Microsoft Guide</span>
                        </NavLink>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Build & Improve <br />
                        Customer Relationship{" "}
                      </h3>
                      <div className="overlay">
                        <p>
                          With a unified view of interactions and real-time
                          engaging facilitation, connect, engage, and build
                          customer relationships. Identify whom and how to
                          engage to drive conversions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Collaborate & <br />
                        Engage Faster
                      </h3>
                      <div className="overlay">
                        <p>
                          Gain visibility into the right data insights,
                          collaborate with your sales team in real-time, and
                          manage your end-to-end sales pipeline leveraging a
                          single collaborated workspace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Close <br />
                        Sales Faster
                      </h3>
                      <div className="overlay">
                        <p>
                          Leveraging AI-based insights, connect and engage with
                          the right customers across communication channels.
                          Meet and collaborate with your customers virtually to
                          close sales faster.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Make Informed <br />
                        Decisions
                      </h3>
                      <div className="overlay">
                        <p>
                          With AI-based data-driven practices, automate your
                          sales and marketing practices and make informed
                          decisions to enable and drive continuous productivity.
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
                    src="/assets/img/sales-side image.png"
                    className="fix-im"
                    alt="Dynamics 365 Sales Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <NavLink
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/Video-Sales.png"
                          alt="sales-video-Sales"
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
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 Sales Service</h2>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics 365 Sales journey including implementation, upgrade
                  and support.
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
                  <h3>Dynamics 365 Sales Implementation</h3>
                  <p>
                    Proactively manage your sales with an improved customer
                    experience by <ExternalLink rel="" target="_self" href="https://www.dynamicssquare.co.uk/blog/dynamics-365-sales-implementation-guide/">implementing Dynamics 365 Sales.</ExternalLink>
                  </p>
                  <div className="action-content">
                    <Link to="/dynamics-365-sales-implementation/">
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
                  <h3>Dynamics 365 Sales Upgrade</h3>
                  <p>
                    Uplift your business deliveries by simply upgrading your
                    system with Microsoft's Sales Management Solution.
                  </p>
                  <div className="action-content">
                    <Link to="/our-services/dynamics-365-support-services/">
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
                  <h3>Dynamics 365 Sales Support</h3>
                  <p>
                    Bring continuity and drive sales efficiency all through
                    Dynamics 365 Sales support services.
                  </p>
                  <div className="action-content">
                    <Link to="/dynamics-nav-to-business-central/">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Sales Pricing</h2>
            <p>
              Choose The Applications That Are Right For Your Business Needs.{" "}
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Financial Management</li>
                           <li> <i className="bi bi-check-lg"></i> Inventory Management</li>
                           <li> <i className="bi bi-check-lg"></i> Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Purchase Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Project Management</li>
                           <li> <i className="bi bi-check-lg"></i> Additional Capabilities</li>
                        </ul>
                       
                     </div> */}
              <div className="box box-22">
                <h3>
                  Dynamics 365 Sales
                  <br />
                  Professional
                </h3>
                <div className="price">
                  <sup>£</sup>49<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Core sales force automation and Microsoft 365 integration
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Sales
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>£</sup>71.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Industry-leading sales force automation with contextual
                    insights and advanced customisation capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div> */}
              <div className="box box-22">
                <h3>
                  Dynamics 365 Sales
                  <br />
                  Premium
                </h3>
                <div className="price">
                  <sup>£</sup>101.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Dynamics 365 Sales Enterprise plus prebuilt customisable
                    intelligence solutions for sellers and managers
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </Link>
                {/* <NavLink to="#about" className="btn-get-whit">
                              <span>See Licensing Guide</span>
                              </NavLink> */}
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
                  Sales
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span>
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
              Have you got
              <br />
              questions about Sales?
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
                      What is Microsoft Dynamics 365 Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 for sales is a customer relationship
                      management software that helps to effortlessly build
                      strong relationships with your customers and seamlessly
                      manage your sales campaigns to close sales faster.
                      AI-based sales insights help businesses effectively
                      leverage their sales data to connect and engage with the
                      right customers from anywhere and anytime. With mobile
                      efficiency, Salespeople and Sales Managers can stay
                      updated with any sales activity and customer behavior in
                      real-time.
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
                      What is Dynamics 365 for Sales used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Sales is a powerful sales management solution
                      to manage sales and customers using a single app
                      leveraging mobile devices. It helps to identify actual
                      customers to connect and engage with them in real-time.
                      Utilizing sales insights and customer data, salespeople
                      can make instant and productive decisions supporting their
                      sales campaigns. Sales managers can monitor their sales
                      team's performance and, if necessary, can guide them to
                      improve things to obtain better results and ensure
                      campaign success.
                      <br />
                      <br />
                      When you implement Dynamics 365 Sales, it enables sales
                      managers to access and create excel documents without
                      switching apps. They can even instantly create sales
                      documents using a single interface when configured with
                      other Microsoft apps..
                      <br />
                      <br />
                      To avail of a free consultation to manage your sales and
                      customers or to implement <NavLink to="/products/microsoft-dynamics-crm/">Microsoft Dynamics CRM</NavLink> solution
                      for your business, experts at Dynamics Square can help.
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
                      How does Microsoft Dynamics 365 help in Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics 365 for Sales helps enterprises to
                      effectively roll out their sales campaigns, manage
                      customers, and drive productivity. This sales management
                      solution helps to streamline their sales data, connect &
                      engage customers, and make informed decisions leveraging
                      sales analytics to close maximized sales in a faster
                      manner.
                      <br />
                      <br />
                      Dynamics 365 for Sales helps enterprises to eliminate
                      their time-consuming manual efforts, repetitive tasks, and
                      other redundancies. It enables businesses to focus more on
                      their core sales tasks that drive sales, customers,
                      profitability.
                      <br />
                      <br />
                      No matter what business context you belong to, out of the
                      available CRM systems, Microsoft Dynamics 365 Sales can
                      help you bring your entire sales and customers data at the
                      siloed interface that can be seamlessly accessed, edited,
                      utilized, and shared with anyone in your organizational
                      connection even without switching apps.
                      <br />
                      <br />
                      With Dynamics 365 Sales, everyone involved in the Sales
                      process can access data and manage customers from anywhere
                      and at any time using mobile or tab devices. To know how
                      Dynamics 365 sales can help to improve your customer
                      experience and impact your sales drive, contact experts at
                      Dynamics Square.
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
                      Is Dynamics 365 Sales available on-premises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Dynamics 365 Sales is available on-premises but only
                      for Dynamics 365 Sales Enterprise Plan not for the Sales
                      Professional plan. Enterprise Plan comes with both the{ " "}
                       <NavLink to="/microsoft-dynamics-365-cloud-vs-on-premise/">on-premises</NavLink> and cloud versions whereas Sales Professional
                      license comes with cloud facilitation only.
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
                      How much does it cost to implement Microsoft Dynamics 365
                      for Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Addressing your specific business needs and a number of
                      user requirements, your licensing need for Dynamics 365
                      Sales may go different. To know your exact licensing cost,
                      connect with Dynamics Square. Here, we are giving a rough
                      idea of licensing to implement Dynamics 365 Sales
                      considering the most common licensing model:
                      <br />
                      <br />
                      <b>Dynamics 365 Sales Professional</b>
                      <br />
                      <br />
                      <ul>
                        <li>
                          For first <NavLink to="/products/microsoft-dynamics-365/">Dynamics 365 App</NavLink> - 49 pounds/ per user
                          (approx.)
                        </li>
                        <li>
                          For Subsequent Dynamics 365 App - 15 pounds/per user
                          (approx.)
                        </li>
                      </ul>
                      <b>Dynamics 365 Sales Enterprise</b>
                      <br />
                      <br />
                      <ul>
                        <li>
                          For First Dynamics 365 App - 71.60 Pounds/per user
                          (approx.)
                        </li>
                        <li>
                          For Subsequent Dynamics 365 App - 15 pounds/per user
                          (approx.)
                        </li>
                      </ul>
                      <b>Dynamics 365 Sales Premium </b>
                      <br />
                      <br />
                      <ul>
                        <li>
                          For First Dynamics 365 App - 101.80 Pounds/per user.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How does Dynamics 365 Sales Works?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Sales helps to transform your entire sales
                      model. It enables businesses to improve and uplift their
                      digital sales experience. They can connect and engage the
                      actual customers in real-time. With centralized data,
                      Dynamics 365 Sales enables people to collaborate and
                      process the same customer data in real-time which helps to
                      streamline and accelerate sales.
                      <br />
                      <br />
                      Instant sales reports and other actionable insights help
                      everyone in the sales team to make informed decisions in
                      real-time as Dynamics 365 sales eliminate the need for
                      manual data processing and repetitive tasks.
                      <br />
                      <br />
                      When you get handy with sales insights and customer
                      behavior in real-time, it helps convert the leads and
                      close the sales faster. Sales managers can monitor and
                      control the sales process and can suggest supporting the
                      ongoing sales process or campaign.
                      <br />
                      <br />
                      With predictive insights, salespeople can manage sales,
                      customers, and can determine their priorities to impact
                      and accelerate sales and profitability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      How do I access Dynamics 365 Sales Professional?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      All you need to sign in to your Microsoft 365 account in
                      your Sales Professional App, now select Microsoft 365 App
                      launcher, and then Dynamics 365. The selection of the app
                      entirely depends on the subscription you have availed of.
                      <br />
                      <br />
                      Now, select Sales Professional on Dynamics 365 Home Page
                      and you are ready to navigate according to your need
                      leveraging the Navigation bar, Site map, Data records, and
                      other business practices available in your Dynamics 365
                      Sales Professional.
                      <br />
                      <br />
                      To know further how to efficiently make use of Microsoft
                      Dynamics Sales features, contact Dynamics Square today,
                      our Dynamics 365 sales experts can assist you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
        <div className="row justify-content-center">
          <div class="col-lg-9">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          </div>
        </div>
         
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/6-strategies-to-boost-sales-productivity.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>6 Strategies to
                      Boost Sales Productivity
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Building-relationships-in-todays-sales-environment.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Building
                      Relationships in Today's Sales Environment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Dynamics-365-Sales-Professional.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Dynamics 365
                      Sales Professional
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Dynamics365SalesKeyCapabilitiesOverviewFINAL63017.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Key Capability
                      of Dynamics 365 Sales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</NavLink></li>
                        </ul>
                     </div> */}
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Sales;
