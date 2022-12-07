import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import Blog from "./Blog";
const ProjectOperations = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Project Operations Partner UK</title>
        <meta
          name="description"
          content="Dynamics 365 Apps- Bring Agility, Improve Transparency, and Streamline Your Projects through implementing Dynamics 365 Project Operations"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-project-operations/"
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
                Project Operations
              </h1>
              <p>
                Bring Agility, Improve Transparency, and Streamline Your
                Projects with Dynamics 365 Project Operations
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
                src="/assets/img/project-operation-banner.png"
                alt="images"
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
                <h2>What is dynamics 365 Project Operations?</h2>
                <p>
                  <b>
                    Empower your team to drive visibility and agility to ensure
                    on-time project delivery within budget all through Dynamics
                    365 Project Operations.
                  </b>
                </p>
                <br />
                <p>
                  Connect your project operations from sales, resourcing, and
                  financing to project management by effectively leveraging
                  Dynamics 365 Project Operations. A single unified app helps to
                  bring your team together to drive collaboration, faster your
                  project delivery, and maximize your growth potentials.
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
                            src="/assets/img/icon-automation.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Project Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Enable project automation to allow people involved from
                        the top level to executive level to stay updated with
                        the real-time status of the project to plan and execute
                        the project accordingly.
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
                            src="/assets/img/icons_resource-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Resource Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Elevate your project delivery model by aligning the
                        right talent to the right project impacting the overall
                        project development cycle while ensuring the quality of
                        the project and fulfilling deadlines.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
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
                            src="/assets/img/icons_finance-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Finance Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Simplify your finance from project costing, budgeting,
                        invoicing & billing, revenue recognition, and compliance
                        management while enabling visibility into every project
                        status.
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
                            src="/assets/img/icons_data-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Data Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        Streamline your data to be accessed and utilized by
                        everyone involved in the project to accelerate project
                        delivery, drive quality assurance, and attain project
                        success.
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
                <h2>Microsoft Dynamics 365 Project Operations Features</h2>
                <h3>
                  Streamline your Project Operations & Accelerate Delivery with
                  D365 Project Operations
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize <br />
                        Resource Utilization
                      </h3>
                      <div className="overlay">
                        <p>
                          With Dynamics 365 Project Service Automation, assign
                          the right people to the right project leveraging
                          skill-matching, scheduling, and resourcing insights.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Accelerate Project <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                          Make effective use of inbuilt Microsoft Project
                          Management capabilities such as Kanban boards, Gantt
                          charts, etc. to faster the Project delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Streamline Project <br />
                        Financials
                      </h3>
                      <div className="overlay">
                        <p>
                          Streamline your project financials from project
                          accounting, budgeting to ensuring global financial
                          reporting standards compliance.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Time & Expense <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                          Effortlessly submit time and expenses, automate the
                          entire workflow, and improve your submissions,
                          approvals, and reporting capabilities.
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
                    src="/assets/img/Project-operation-side image.png"
                    className="fix-im"
                    alt="Project-operation-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <NavLink
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/Video-Video-Project-Operation.png"
                          alt="Project-Operation"
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
                <h2>Dynamics 365 Project Operations</h2>
                <p>
                Avail a range of hassle-free implementation, upgrade, and support services to boost your project operations. 
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
                  Manage your project seamlessly while leveraging the Dynamics 365 Project Service implementation service. 
                  </p>
                  <div className="action-content">
                    <NavLink  to="/dynamics-365-project-operations-implementation/">
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
                  Bring agility and build robust project operations with our enhanced and highly recommended support system. 
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
                  Get instant support to drive a project-centric approach across your business operations with the D365 Project Operations Support Service. 
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
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Dynamics 365 Project Operations Pricing</h2>
                <p>
                  Find Dynamics 365 Project Operations plans and pricing to
                  choose the applications that are right for your business
                  needs.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>Dynamics 365 Project Operations</h3>
                <div className="price">
                  £90.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    Get the visibility, collaboration, and agility needed to
                    drive success across your project-centric business.
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
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Connect & Talk with Our Experts</h3>
                <p>
                To enhance business operations and fully utilize business capabilities, connect and reveal a favorable deal for your company.
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
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Project Operations?
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
                      data-bs-target="#faq-content-2"
                    >
                      What is Project Operations in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft Dynamics 365 Project Operations is an ERP (Enterprise Resource Planning) solution capable of managing and streamlining projects effortlessly. It comes with many extensive capabilities, including team collaboration, opportunity management, project planning, resource management, customer billing, and expense management.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                     Does Microsoft Project Operation integrate with Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft Dynamics Project Operations is a powerful application to seamlessly manage operations with full productivity and efficiency. However, organisations can integrate it with <NavLink to="/products/dynamics-365-business-central/">Business Central</NavLink> or other native integrations to enhance the features for smooth operations. There are a few more modules that can be integrated without any restrictions, such as Human Resources, Sales, Marketing, Customer Service, and more.</p>
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
                     How do I install Project Operations in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>When installing project operations in <NavLink to="/products/microsoft-dynamics-365/"></NavLink> , there are several installation options available. You have two options to start the installation:</p>
                      <ul>
                        <li>Using the existing CDS environment</li>
                        <li>Using a new CDS environment</li>
                      </ul>
                      <p>You must have access to Power Platform Administrator and a Project Operations licence to install project operations in a new environment.</p>
                      <p>In case, you have to create a new CDS environment using the Power Platform admin.</p>
                      <p>In the case of an existing CDS, you must have access to a <NavLink to="/products/microsoft-power-platform/">Power Platform</NavLink> Administrator with a licence for Project Operations. Using <NavLink to="/products/microsoft-power-bi/">Power BI</NavLink>, you have to locate the environment using the Power Platform admin center.</p>
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
                     What are the core modules in Dynamics 365 Project Operations? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>There are a few core modules which are: Contract Management, Sales, Project Management, Resource Management, Team Collaboration, Finance Management, and Time and Expense Management. These are the modules that let users seamlessly manage an entire project in an organisation for easy growth.</p>
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
                     What is the price of D365 Project Operations? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft doesn't sell its business management solutions directly to customers. You have to search for and collaborate with a reliable support partner like Dynamics Square for any kind of update, <NavLink to="/our-services/dynamics-365-upgrade-services/">upgrade</NavLink>, or <NavLink to="/our-services/dynamics-365-implementation-services">implementation</NavLink> service for your business. The pricing for D365 Project Operations is entirely dependent on your company's needs and the type of deployment. The standard cloud deployment pricing is £90.50 per user/month and is also available on Microsoft's website. On-premises deployment always comes with customised pricing, and it depends on business to business.</p>
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
                     Can D365 Project Operations help businesses boost sales and enhance revenue? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>D365 Project Operations helps users to increase transparency across different processes and departments and to provide accurate data insights using advanced technologies like <NavLink to="/products/microsoft-dynamics-365-ai/">Artificial Intelligence</NavLink>, <NavLink to="/products/azure-machine-learning/">Machine Learning</NavLink>, and Business Intelligence. This helps the users to take actionable decisions in real-time, resulting in improved efficiency and productivity to get more deals.</p>
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
                     How to start using Dynamics 365 Project Operations? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The first step you have to take is to search for the right support partner for proper implementation of your D365 Project Operations solution as per your business needs. Following that, you must be patient until the implementation is completed, at which point your partner will train you on the solution's functions and features. Once everything is set up, you or your team members can start using the solution at full pace.</p>
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
                     What are the core functions of Dynamic 365 Project Operations? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Project Operations covers a lot of areas of a business, resulting in overall growth of almost all departments. Some of the areas are listed below:</p>
                      <ul>
                        <li>Project Planning</li>
                        <li>Project Sales</li>
                        <li>Invoicing</li>
                        <li>Revenue management</li>
                        <li>Ledger management</li>
                        <li>Project allocation</li>
                        <li>Management of project finances</li>
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
                      data-bs-target="#faq-content-9"
                    >
                     How does Project Operation work?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Project Operations works by offering the capabilities to manage and streamline various projects efficiently with minimal errors. It analyses the existing resources, optimises them for optimum productivity, and delivers results to gain maximised revenue using minimum resources.</p>
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
                <p>
                  Whether you are a start-up, an SMB, or an enterprise, the
                  Dynamics Square blog is the best place to get inspired and
                  learn more about Microsoft Business Applications.
                </p>
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
                      to="/assets/pdf/Remote-Service-Modernise-Your-Operations-with-Mixed-Reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Remote Service
                      Modernise Your Operations with Mixed Reality
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Transform-your-field-service-with-IoT-AI-and-mixed-reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Transform Your
                      Field Service With IoT, AI, and Mixed Reality
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Five-ways-to-know-if-connected-field-service-is-right-for-your-business.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Connected Field
                      Service is Right for Your Business?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/5-innovative-ways-industry-leaders-modernize-their-field-service.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Innovative Ways
                      Industry Leaders Modernize Their Field Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/5-case-studies-from-manufacturing.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>5 Case Studies
                      From Manufacturing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-1-1.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Licensing Guide
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default ProjectOperations;
