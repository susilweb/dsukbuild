import React from "react";
import { Helmet } from "react-helmet";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const D360 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Microsoft Dynamics 365 CRM & ERP Gold Partener UK | Dynamics Square
        </title>
        <meta
          name="description"
          content="Need Microsoft Dynamics 365 CRM and ERP services? Scale-up your business productivity by implementing Dynamics 365 apps from Microsoft Gold Partner Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>
              Microsoft Dynamics 365 - CRM & ERP Solution
              </h1>
              <p>
              Microsoft Dynamics 365 is a powerful tool to transform your ways of business management, connect all departments, simplify data reporting, and automate the process for growth and sustainability. With the power of cloud computing, get real-time data availability and make intelligent decisions at ease.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Dynamics 365!</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/assets/img/d360-banner.png" alt="Microsoft Dynamics 365" />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/d605-left.png"
                    className="fix-im"
                    alt="d605-left"
                  />
                  {/* <div className="video-ytube">
                    <div className="popup-btn">
                      <Link data-bs-toggle="modal" to="#exampleModalToggle">
                        <img src="/assets/img/contactfor-sede-img.jpg" />
                        <span className="cente-icns">
                          <img
                            src="/assets/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>
                What Is Microsoft Dynamics 365?
                </h2>
              </div>
              <div className="custom002">
                <p>
                  <Link to="/products/microsoft-dynamics-365/">
                    Microsoft Dynamics 365
                  </Link>{" "}
                  is a power pack collection of Microsoft apps and other add-ons to meet the ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) needs. It is a refreshed version of Dynamics Suite that delivers new ways to manage a business. Microsoft not only wants to simplify business management but also wants to redefine the user experience.
                  </p>
                  <p>Dynamics 365 enables users to seamlessly manage the finance, handling, sales, purchase, inventory, CRM, manufacturing, and more. Microsoft Dynamics 365 establish the connection between all SaaS (Software as Service) apps and services to transform the communication between the organization and the customer. It is a cloud-based software solution with the mixed capabilities of ERP and CRM.</p>
                  <ul>
                    <li>Microsoft Dynamics 365 is based on Microsoft Azure, a cloud computing service operated and managed by Microsoft.</li>
                    <li>Azure data centres are available worldwide to make the apps and other integrations connected with you 24/7.</li>
                    <li>Microsoft allows the users to connect with Dynamics 365, even with a web browser and a working internet connection.</li>
                    <li>There is no need to install the Dynamics 365 on On-premises servers like we have been doing traditionally to install an ERP or a CRM. With Microsoft Dynamics 365 online, we can connect with the processes and operations from anywhere.</li>
                  </ul>
                  <br />
                  <div className="text-center text-lg-start">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Become Dynamics 365 User</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <header className="section-header">
            <h2>Benefits You Get From Using Microsoft Dynamics 365</h2>
            <p>
            Microsoft Dynamics 365 is the most efficient business management solution capable of building, deploying, and supporting advanced ERP and CRM features. It provides more freedom to provide the best support to the end-user, from manufacturing to after-sales service. Below are the key reasons to consider Microsoft Dynamics 365 for your business: 
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
                        <span>Built-in Analytics for Finance</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Microsoft Dynamics 365 has a built-in analytics to provide data insights related to finance and accounting processes or operations. This feature is available with the help of Microsoft Power BI and does provide the deeper data for true analysis to make the real time decisions.</p>
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
                        
                        <span>Improved Overall Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Once an organization starts using Microsoft Dynamics 365, the overall efficiency increases by 2X. This consists of full-fledged business applications, like CRM, Sales, Customer Service, Finance and Operations, Field Service, Project Service Automation, Marketing, etc., that helps the organization to automate, grow and scale.</p>
                        more.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        
                        <span>Data Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>The process of data management becomes a lot easier with Microsoft Dynamics 365. It assures the data is available or shared with the assigned employees of the organization irrespective of the work they perform.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnews">
                  <hr className="mob-disp" />
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
                        
                        <span>Support Scheduling</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>One of the best solutions for managing the most important task; is customer support scheduling. It delivers a centralized solution to manage the request and issues of the customer and schedule them with the required information in the calendar. This lets the executive and customer know the meeting details they have to perform.</p>
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
                       
                        <span>Integration with Outlook</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Outlook integrates with Dynamics 365 to provide a seamless communication experience and manage the client’s data. The inbuilt CRM increases the power of outlook in managing the client information. Microsoft Dynamics 365 is not only integrated with outlook, but it also integrates with Excel, Microsoft NFT framework, web services, Power BI, and more.</p>
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
                        
                        <span>Enhanced Communication</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Microsoft Dynamics 365 always lets you connect with the system to make informed decisions anytime. Whether out of town or working inside the organization, it will keep you updated. Cloud deployment makes the users more productive and efficient.
                      </div>
                    </div>
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
                <h3>Utilize Dynamics 365 Capabilities Now!</h3>
                <p>
                Let Dynamics Square be your reliable partner as we improve your business by offering you the right Dynamics 365 solutions custom-built to fit your business needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Dynamics 365!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shape">
        <div className="container">
          <header className="section-header">
            <h2>
            Where Is Microsoft Dynamics 365 Data Stored?
            </h2>
          </header>
          

          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="commen-rit-info">
                <p>
                This might be one of the important concerns about the safety of your data, and it must be; after all, the business is all about the data. Before you know the storage methods, you must understand the versions.</p>
                <p><b>There are two Microsoft Dynamics 365 versions available, which are given below:</b></p>
                <ul>
                  <li>Dynamics 365 Business for small businesses</li>
                  <li>Dynamics 365 Enterprise for large industry</li>
                </ul>
                <p><b>Based on your industry type and data storage, you must select the data storage method as given below:</b></p>
                <ul>
                  <li>Microsoft Dynamics online servers</li>
                  <li>Hosted servers (to store data on-premises or using private servers)</li>
                </ul>
                <p>As compared, the hosted servers are a more costly option than Microsoft’s online servers, as setting up the servers on-premises costs a lot and there is a data safety issue with the private servers. </p>
                <p>Your data is kept safe and secure with Microsoft Azure. Microsoft assures you that your data and its transactions are safe with encryption. So, there is no need to worry about data safety as it is secured and protected with robust security.</p>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="commen-lef-pic">
                <img
                  src="/assets/img/d360-banner.png"
                  alt="Microsoft Dynamics 365"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-whys">
        <div className="container">
        <header className="section-header">
            <h2>How Much Microsoft Dynamics 365 Licensing & Cost?</h2>
            <p>
            Microsoft provides two ways of Microsoft Dynamics 365 Licensing for the organizations. These plans are based on the apps and integrations that come under Microsoft Dynamics 365 and the number of users as per access to Dynamics 365.
            </p>
          </header>
          <div className="row g-5 justify-content-center">
          
            <div className="col-lg-8">
              <div className="parten-more parten-more-ss text-center">
              <h3>User Licensing</h3>
              <p>Microsoft provides flexible pricing plans for Dynamics 365 or its applications. Users have the choice to opt for ERP or CRM, or they can use the mixed capabilities of both these solutions. Also, you can pay for selected apps and use them despite owning the whole CRM or ERP solution. It comes with several functions, like Finance and Operation, Retail, Talent, Sales, Customer Service, Field Service, Project Service Automation, Marketing, Customer Service Insights, and Power Apps. Or, you can contact Dynamics Square for the latest info about licensing and cost.</p>
              </div>
              <br />
              <div className="text-center m-o-t new-btn-nn">
                  <ExternalLink href="https://www.dynamicssquare.co.uk//blog/perfect-guide-for-microsoft-dynamics-365-pricing-and-licensing/"
                    className="btn-get-started scrollto" target="_blank" rel=""
                  >
                    <span>Dynamics 365 Pricing & Licensing Guide </span>
                  </ExternalLink>
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
                <h3>Get Free Dynamics 365 Consultation!</h3>
                <p>
                Looking to implement Microsoft Dynamics 365 Business Application?
                </p>
                <div className="text-center m-o-t new-btn-nn">
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
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <header className="section-header">
            <h2>Have you got questions about Microsoft Dynamics 365?</h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
            </div>
          </div>
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
                      Is Dynamics 365 available on-premises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Dynamics 365 is a highly flexible business management software solution that offers organisations the choice of deploying servers on company premises, in the cloud, or as a hybrid environment. Companies can also move to the cloud or hybrid solutions after initially opting for <NavLink to="/microsoft-dynamics-365-cloud-vs-on-premise/">on-premises</NavLink> servers. 
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
                      Is Microsoft Dynamics 365 the same for all industries?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Microsoft Dynamics 365 is adaptable for all businesses, irrespective of their industry. MS <NavLink to="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation</NavLink> partner will add or customise the features as per business requirements for a seamless workflow. 
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
                     Why should I use Microsoft Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      If your business is growing and you're looking for a solution to help it run even more smoothly, Microsoft Dynamics 365 is the solution. Not only does it help with business management, but it also increases productivity and efficiency using AI, ML, and cloud computing. In other words, it's the right tool to help your business reach its fullest potential.</p>
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
                      Is Dynamics 365 scalable as per my business growth?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Microsoft Dynamics 365 cloud enables businesses to scale processes or operations in response to changing business needs and organizational growth. The best part of the cloud is the ease of increasing the power and performance of servers without having to invest a lot of money, effort, and time.</p>
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
                     Can I integrate native and third-party apps with Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Microsoft provides the ability to integrate Dynamics 365 with native as well as third-party apps using APIs to make the data processing a lot smoother. Users can supercharge their processes for ERP and CRM by connecting different apps for ease of usage.
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
                      data-bs-target="#faq-content-6"
                    >
                      What is the difference between Microsoft Dynamics NAV and 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p><NavLink to="/products/microsoft-dynamics-nav/">Dynamics NAV</NavLink> is an ERP (Enterprise Resource Planning) solution capable of managing departments like finance, manufacturing, and more. Whereas Dynamics 365 is a set of 12 applications consisting of ERP and CRM to aid businesses with overall growth.</p>
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
                     What is the difference between Microsoft Business Central and 365? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p><NavLink to="/products/dynamics-365-business-central/">Microsoft Business Central</NavLink> is the evolved version of NAV and a part of the Dynamics 365 applications. Business Central is a modern ERP solution with more advanced features and capabilities than NAV.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                     Can I customise Dynamics 365 based on my requirements?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, you can customise the features and functionalities of Dynamics 365 based on the kind of industry and specific business requirements. Your <NavLink to="/our-services/dynamics-365-support-services/">
                      Dynamics 365 support</NavLink> partner will help you evaluate your specific needs and provide a better customization option.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                    Is there a business intelligence tool in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, MS Dynamics 365 is an advanced solution for all the ERP and CRM needs of small and mid-sized organisations. It uses many technologies and intelligence tools, like Cortana, <NavLink to="/products/microsoft-power-bi/">Power BI</NavLink>, and Azure IoT, to help businesses with ease of operations.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >
                    How many users can Dynamics 365 support? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>There is no fixed number when it comes to the number of users of D365 support. It depends on the editions and type of deployment. With on-premises deployment, the number of users is limited, but with cloud deployment, the number of users can be increased or decreased with the performance of servers at any time.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-11"
                    >
                    How much does Dynamics 365 implementation cost? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-11"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The cost of implementation depends on various factors, like current ERP and{ ' '} <NavLink to="/products/microsoft-dynamics-crm/">CRM solutions</NavLink>, industry type, business requirements, integrations, customizations, deployment, and much more. Once an implementation partner evaluates all such factors, you will have the exact cost quotation.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-12"
                    >
                    How much time will it take to implement Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-12"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The total time to implement Dynamics 365 is based on factors like the amount of data to be transferred, the current ERP solution, the complexity of customizations, and more. The D365 support partner will analyze such factors and calculate the total time of implementation.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-13"
                    >
                    Does Microsoft Dynamics 365 come with support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-13"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft doesn't provide sales or support to the end customers. For this, there are certified partners, like Dynamics Square, who can help you install, implement, and <NavLink to="/our-services/dynamics-365-upgrade-services/">upgrade Dynamics 365</NavLink> or any of its applications with total accuracy.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-14"
                    >
                    Can we integrate Microsoft Office with Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-14"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, both are native Microsoft products and are compatible with each other's functionality. Organizations can integrate Office 365 applications, like Excel, Word, and other Microsoft business applications, making the data more convenient to use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-333">
        <div className="container">
          <header className="section-header">
            <h2>
            Get Dynamics 365 Services With Dynamics Square
            </h2>
            <p>As a Microsoft Gold Certified Partner, we provide you with a seamless experience in upgrading or implementing Dynamics 365 without disturbing your existing work process. </p>
          </header>
          <div className="row">
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons">
                  <img src="/assets/img/Group774.svg" alt="Trustworthy Partner" />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Trustworthy Partner</h3>
                  <p>
                  Dynamics Square is Microsoft's gold partner. So far, we have delivered <b>70+</b> implementation projects and serving <b>300+</b> clients globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons">
                  <img src="/assets/img/Group772.svg" alt="Trustworthy Partner" />
                </div>
                <div className="commen-boc-2-info">
                  <h3>End-to-End Training</h3>
                  <p>
                  We enable your users to effectively adapt and use the newly configured system to drive smoother operational flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons">
                  <img src="/assets/img/Group773.svg" alt="Off-Hours Support" />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Off-Hours Support</h3>
                  <p>
                  We provide all-time support to our UK clients with the help of our 135+ Microsoft certified professionals present in 7 global locations.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
    </>
  );
};

export default D360;