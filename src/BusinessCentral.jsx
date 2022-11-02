import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Blog from "./Blog";

import { ExternalLink } from "react-external-link";

const BusinessCentral = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Microsoft Dynamics 365 Business Central Partner UK | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics Square is a top UK-based Microsoft Dynamics 365 Business Central Partner for SMBs providing support, training and consultancy. Schedule a free demo!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Dynamics 365 Business Central" />
        <meta
          property="og:description"
          content="Dynamics 365 Business Central is a unified modern ERP system that allows you to manage sales, finance, operations, projects, people, and accounts all under one roof."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/"
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
        <meta property="og:image:height" content="597" />
        <meta property="og:image:alt" content="Dynamics 365 Business Central" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dynamics 365 Business Central" />
        <meta
          name="twitter:description"
          content="Manage your end-to-end business processes and drive business growth with our Microsoft Dynamics 365 Business Central implementations packages."
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="9 minutes" />
        <script type="application/ld+json">{`
              "@context":"https://schema.org/",
              "@type":"SoftwareApplication",
              "aggregateRating":
              {
              "@type":"AggregateRating",
              "bestRating":5,
              "ratingCount":224,
              "ratingValue":4.3,
              "worstRating":0
              },
              "applicationCategory":"BusinessApplication",
              "applicationSubCategory":
              ["Business Management Software","Distribution Software","Business Performance Management Software","ERP Systems","Accounting Software","Financial Reporting Software","Project Management Software"],
              "description":"Microsoft Dynamics 365 Business Central is a comprehensive business management solution designed for small to medium-sized businesses. The software provides features for financial forecasting, supply chain optimization and project planning along with other useful features like advanced analytics, social collaboration tools and more.",
              "name":"Dynamics 365 Business Central",
              "image": "https://www.dynamicssquare.co.uk/assets/img/Dynamics-365-Business-Central.png"
`}</script>
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
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1>
                Microsoft <br />
                Dynamics 365
                <br />
                Business Central
              </h1>
              <p>
                Manage your end-to-end business processes and drive effective
                growth, sustainability, and scalability in your business with
                Microsoft Dynamics 365 Business Central.
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
              <img
                src="/assets/img/Dynamics-365-Business-Central.png"
                alt="Dynamics 365 Business Central"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <header className="section-header">
                <h2>
                  What is Dynamics 365 <br />
                  Business Central?
                </h2>
                <p>
                  Dynamics 365 Business Central (formerly known as&nbsp;
                  <Link to="/products/microsoft-dynamics-nav/" target="_blank">
                    <b>Dynamics NAV</b>
                  </Link>
                  ) is a comprehensive business management solution helping SMBs
                  to manage sales, finance, service, and operations seamlessly
                  and effectively. As a Dynamics 365{" "}
                  <NavLink to="/dynamics-365-business-central-implementation/">
                    <b>Business Central Implementation Partner</b>
                  </NavLink>
                  , we ensure start-ups and small businesses to get a
                  stress-free and successful software rollout, training and
                  support.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics 365 <br /> Business Central Capabilities
            </h2>
          </header>
          <div className="row d-lg-none">
            <div className="col-lg-12">
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
                        <span>Finance</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Internal Transactions</h4>
                                <p>
                                  Automate and customise the company's internal
                                  transactions with restricted access to team
                                  members.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cash flow Forecasting</h4>
                                <p>
                                  Manage cash balances and account schedules to
                                  estimate future sales and expenses.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Budgeting</h4>
                                <p>
                                  Monitor and manage the company's overall
                                  financial activities, along with budget
                                  control.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Costing</h4>
                                <p>
                                  Maintains the general ledger to manage the
                                  inventory, manufacturing costs, and reconcile
                                  the costs.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Consolidation and Multi-Companies</h4>
                                <p>
                                  With the combination of multiple general
                                  ledgers, it can conduct financial analysis of
                                  the company.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Costs and Income Allocation</h4>
                                <p>
                                  {" "}
                                  Distribute the entries from one general
                                  journal to different accounts.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Banking</h4>
                                <p>
                                  With seamless banking integration, it settles
                                  bank accounts and funds transfers between
                                  accounts.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cost Accounting</h4>
                                <p>
                                  Distribute the budget between actual and
                                  budgeted costs for operations and projects to
                                  analyze returns.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Fixed Assets</h4>
                                <p>
                                  Gives the complete control of fixed assets and
                                  ensures timely reduction with D365 Business
                                  Central.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Accounts Receivable</h4>
                                <p>
                                  Receives payments, settles bank accounts, and
                                  collects the remaining balance.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Accounts Payable</h4>
                                <p>
                                  Make payments, mark outgoing payments, and
                                  manage cheques with D365 BC.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>General Ledger</h4>
                                <p>
                                  Manage the credit and debit entries to
                                  maintain the entire financial data.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span>Sales</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Customer management</h4>
                                <p>
                                  Manage customers and keep track of their
                                  queries as well.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Quote</h4>
                                <p>
                                  Provides a sales quote to the customer to
                                  offer negotiations before making the actual
                                  invoice.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales order</h4>
                                <p>
                                  Manages the process of creating sales orders
                                  with drop shipment and partial shipping
                                  functions.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Invoices</h4>
                                <p>
                                  It creates a sales invoice for the actual
                                  purchases processed by the buyers.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Drop Shipments</h4>
                                <p>
                                  Manages the purchase order to ship the
                                  products directly from vendor to customer.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Returns</h4>
                                <p>
                                  Manages the data of sales invoices of the
                                  product returned to release the refund amount.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Assembly Order</h4>
                                <p>
                                  Create linked assembly orders to process the
                                  full or partial order quantity during product
                                  unavailability.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning & Promising</h4>
                                <p>
                                  Makes the customers informed about order
                                  delivery dates by analysing capable-to-promise
                                  or available to promise dates.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Single invoice Multiple Shipments</h4>
                                <p>
                                  Combines multiple shipments and invoice a
                                  customer once.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Correction or Cancel Unpaid Invoices</h4>
                                <p>
                                  Automatically creates sales invoices for
                                  corrections in unpaid invoices.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Pick List Creation</h4>
                                <p>
                                  Enables users to create a shipment pick-up
                                  list from various vendor locations.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span>Purchase</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Vendor Management</h4>
                                <p>
                                  Creates a vendor card for each vendor to
                                  manages all purchases.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Quote</h4>
                                <p>
                                  Create purchase quote from the vendor and
                                  later convert such quotes into purchase
                                  orders.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Order</h4>
                                <p>
                                  D365 BC manages all the purchase orders for
                                  the vendors.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Invoices</h4>
                                <p>
                                  Manages all the purchase invoices and manages
                                  vendor data to purchase products with terms.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Items for Sales</h4>
                                <p>
                                  D365 BC allows users to create a single
                                  invoice for multiple selected purchase
                                  invoices.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Returns</h4>
                                <p>
                                  Creates invoices for the vendor to show
                                  product return data along with the amount to
                                  be refunded.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Combine Receipts on Single Invoice</h4>
                                <p>
                                  It combines multiple invoices from the same
                                  vendor and converts them into a single one.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Electronic Documents</h4>
                                <p>
                                  Manages and converts all the electronic
                                  invoices to purchase invoices from the
                                  vendors.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Date Calculation for Purchase</h4>
                                <p>
                                  It reflects the data of products to be
                                  received on or before certain dates.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Merge Duplicate Records</h4>
                                <p>
                                  It merges all the duplicate records and
                                  eliminates all the confusion.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span>Inventory Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Master Management</h4>
                                <p>
                                  Creates the items or product cards an
                                  organisation generally trades.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Bill of Materials</h4>
                                <p>
                                  Creates the structure or data of the parent
                                  item to be sold as the parent item’s component
                                  kits to stock.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Categorization</h4>
                                <p>
                                  Organises the items into categories and
                                  maintains an overall overview.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Attributes</h4>
                                <p>
                                  Assign the attributes to the different items
                                  to make finding a specific item easy.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Catalog</h4>
                                <p>
                                  Creates special item card that a company
                                  offers to its customers with no inventory
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Counting</h4>
                                <p>
                                  Manages to keep the stock of items counted in
                                  real-time.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availablity</h4>
                                <p>
                                  Manages item availability by location, time,
                                  sales event, use on assembly, and production
                                  BOMs.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Transfer</h4>
                                <p>
                                  Manages all the transfer orders to transfer
                                  inventory items from one location to another.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Reservation</h4>
                                <p>
                                  Reserve some products from inventory for
                                  sales, service, purchase, assembly, and
                                  production orders.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Tracking</h4>
                                <p>
                                  Helps the user to track items using a serial
                                  number or lot number in case of a recall
                                  situation.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Block Items</h4>
                                <p>
                                  Blocks some items from entering into sales or
                                  purchase lines or in any transaction.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span>Warehouse Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Receiving</h4>
                                <p>
                                  Manages the record of all item receipts at the
                                  warehouse location along with the details of
                                  the purchase order.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Shipments</h4>
                                <p>
                                  Manages the record of shipped items at the
                                  warehouse location along with the details of
                                  the sales order.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cross Dock Items</h4>
                                <p>
                                  Bypass, pick, and place expedited items in
                                  inventory for shipping.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Putting Items Away</h4>
                                <p>
                                  Classifies the items received from various
                                  available resources as per the configured
                                  warehouse process.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Moving Items</h4>
                                <p>
                                  Helps the organisation to move items from
                                  different locations in the warehouse.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Picking Items</h4>
                                <p>
                                  Chooses the items for different purposes as
                                  per the data configured in the warehouse.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Automated Data Capture Systems (ADCS)</h4>
                                <p>
                                  Track the movements of items in the warehouse
                                  using the barcode scanning feature.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Creation</h4>
                                <p>
                                  The Dynamics 365 BS assists the organisation
                                  in creating and managing projects, as well as
                                  assigning jobs and planning projects.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Allocations</h4>
                                <p>
                                  Distributes resources to various tasks with
                                  price management prior to the start of each
                                  project.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Time Sheet Management</h4>
                                <p>
                                  Prepares the time sheet with job tasks,
                                  planning lines, and updates the time sheet
                                  lines to the job journal.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Budget Management</h4>
                                <p>
                                  Analyze and compare the distribution of the
                                  budget across various projects to check the
                                  quality, cost, and efficiency.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Consumptions</h4>
                                <p>
                                  Keeps a record of all consumption based on
                                  various jobs and updates the data in
                                  real-time.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Supplies</h4>
                                <p>
                                  Manages the purchase of all supplies needed to
                                  complete a project and keeps track of the item
                                  as well as the time spent on it.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project WIP Methods</h4>
                                <p>
                                  This feature helps to ensure the creation of
                                  correct financial statements and makes a
                                  financial estimation of jobs.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Progress and Performance</h4>
                                <p>
                                  It manages the correct financial statements
                                  and the financial value of materials after
                                  consumption for a job.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Invoicing</h4>
                                <p>
                                  Send the project’s invoice to the customer
                                  after the completion of a particular project
                                  or schedule it as required.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Merge Duplicate Records</h4>
                                <p>
                                  Eliminates the duplicate records of the same
                                  vendors to remove the confusion.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span>Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Planning</h4>
                                <p>
                                  To plan and suggest, the planning system
                                  demands a balanced supply chain.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Supply Planning</h4>
                                <p>
                                  Plan the supply and adjust the algorithms to
                                  meet the manufacturing requirements.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Demand Forecasting</h4>
                                <p>
                                  Enables the users to forecast the demand as
                                  per expected sales and production.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>
                                  Creation of Production Order from Sales Order
                                </h4>
                                <p>
                                  Manages the production orders from sales
                                  demand to cover the exact sales order demand.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning</h4>
                                <p>
                                  Helps to manually plan for sales and
                                  production demand, but one BOM level at a
                                  time.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>MRP & MPS</h4>
                                <p>
                                  For supply chain automation, the planning
                                  worksheet works on MPS and MRP options.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Requisition Worksheet</h4>
                                <p>
                                  Creates data automatically about the supply
                                  chain and mentions the demand for refilled
                                  items.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Calculate Work Centre Calendar</h4>
                                <p>
                                  With D365 Business Central, it reschedules the
                                  work centre calendar due to sudden planning
                                  changes.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availablity</h4>
                                <p>
                                  Check the availability of a specific item and
                                  the insights of events that influence it.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Order</h4>
                                <p>
                                  Create production orders manually or
                                  automatically with Dynamics 365 Business
                                  Central.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Subcontracting</h4>
                                <p>
                                  Helps decision makers to outsource the
                                  selected processes or operations to a
                                  subcontractor.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Consumption & Output</h4>
                                <p>
                                  Record, post production output with material
                                  and time consumption for single released
                                  production line.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row busines-bg g-0">
            <div className="col-lg-3 no-pad">
              <div
                className="nav flex-column nav-pills  bus-ser-left"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="nav-link active"
                  id="v-pills-Finance-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Finance"
                  role="tab"
                  aria-controls="v-pills-Finance"
                  aria-selected="true"
                >
                  <h3>Finance</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Sales-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Sales"
                  role="tab"
                  aria-controls="v-pills-Sales"
                  aria-selected="false"
                >
                  <h3>Sales</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Purchase-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Purchase"
                  role="tab"
                  aria-controls="v-pills-Purchase"
                  aria-selected="false"
                >
                  <h3>Purchase</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Management-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Management"
                  role="tab"
                  aria-controls="v-pills-Management"
                  aria-selected="false"
                >
                  <h3>Inventory Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Inventory-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Inventory"
                  role="tab"
                  aria-controls="v-pills-Inventory"
                  aria-selected="false"
                >
                  <h3>Warehouse Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Project-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Project"
                  role="tab"
                  aria-controls="v-pills-Project"
                  aria-selected="false"
                >
                  <h3>Project Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Manufacturing-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Manufacturing"
                  role="tab"
                  aria-controls="v-pills-Manufacturing"
                  aria-selected="false"
                >
                  <h3>Manufacturing</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-Finance"
                  role="tabpanel"
                  aria-labelledby="v-pills-Finance-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                          <p>
                            Automate and customise the company's internal
                            transactions with restricted access to team members.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cash flow Forecasting</h4>
                          <p>
                            Manage cash balances and account schedules to
                            estimate future sales and expenses.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Budgeting</h4>
                          <p>
                            Monitor and manage the company's overall financial
                            activities, along with budget control.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Costing</h4>
                          <p>
                            Maintains the general ledger to manage the
                            inventory, manufacturing costs, and reconcile the
                            costs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Consolidation and Multi-Companies</h4>
                          <p>
                            With the combination of multiple general ledgers, it
                            can conduct financial analysis of the company.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Costs and Income Allocation</h4>
                          <p>
                            {" "}
                            Distribute the entries from one general journal to
                            different accounts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Banking</h4>
                          <p>
                            With seamless banking integration, it settles bank
                            accounts and funds transfers between accounts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cost Accounting</h4>
                          <p>
                            Distribute the budget between actual and budgeted
                            costs for operations and projects to analyze
                            returns.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Fixed Assets</h4>
                          <p>
                            Gives the complete control of fixed assets and
                            ensures timely reduction with D365 Business Central.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Accounts Receivable</h4>
                          <p>
                            Receives payments, settles bank accounts, and
                            collects the remaining balance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Accounts Payable</h4>
                          <p>
                            Make payments, mark outgoing payments, and manage
                            cheques with D365 BC.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>General Ledger</h4>
                          <p>
                            Manage the credit and debit entries to maintain the
                            entire financial data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Sales"
                  role="tabpanel"
                  aria-labelledby="v-pills-Sales-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Customer management</h4>
                          <p>
                            Manage customers and keep track of their queries as
                            well.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Quote</h4>
                          <p>
                            Provides a sales quote to the customer to offer
                            negotiations before making the actual invoice.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales order</h4>
                          <p>
                            Manages the process of creating sales orders with
                            drop shipment and partial shipping functions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Invoices</h4>
                          <p>
                            It creates a sales invoice for the actual purchases
                            processed by the buyers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Drop Shipments</h4>
                          <p>
                            Manages the purchase order to ship the products
                            directly from vendor to customer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Returns</h4>
                          <p>
                            Manages the data of sales invoices of the product
                            returned to release the refund amount.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Assembly Order</h4>
                          <p>
                            Create linked assembly orders to process the full or
                            partial order quantity during product
                            unavailability.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning & Promising</h4>
                          <p>
                            Makes the customers informed about order delivery
                            dates by analysing capable-to-promise or available
                            to promise dates.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Single invoice Multiple Shipments</h4>
                          <p>
                            Combines multiple shipments and invoice a customer
                            once.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Correction or Cancel Unpaid Invoices</h4>
                          <p>
                            Automatically creates sales invoices for corrections
                            in unpaid invoices.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Pick List Creation</h4>
                          <p>
                            Enables users to create a shipment pick-up list from
                            various vendor locations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Purchase"
                  role="tabpanel"
                  aria-labelledby="v-pills-Purchase-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Management</h4>
                          <p>
                            Creates a vendor card for each vendor to manages all
                            purchases.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Quote</h4>
                          <p>
                            Create purchase quote from the vendor and later
                            convert such quotes into purchase orders.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Order</h4>
                          <p>
                            D365 BC manages all the purchase orders for the
                            vendors.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Invoices</h4>
                          <p>
                            Manages all the purchase invoices and manages vendor
                            data to purchase products with terms.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Items for Sales</h4>
                          <p>
                            D365 BC allows users to create a single invoice for
                            multiple selected purchase invoices.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Returns</h4>
                          <p>
                            Creates invoices for the vendor to show product
                            return data along with the amount to be refunded.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Combine Receipts on Single Invoice</h4>
                          <p>
                            It combines multiple invoices from the same vendor
                            and converts them into a single one.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Electronic Documents</h4>
                          <p>
                            Manages and converts all the electronic invoices to
                            purchase invoices from the vendors.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Date Calculation for Purchase</h4>
                          <p>
                            It reflects the data of products to be received on
                            or before certain dates.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>
                            It merges all the duplicate records and eliminates
                            all the confusion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Management"
                  role="tabpanel"
                  aria-labelledby="v-pills-Management-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Master Management</h4>
                          <p>
                            Creates the items or product cards an organisation
                            generally trades.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials</h4>
                          <p>
                            Creates the structure or data of the parent item to
                            be sold as the parent item’s component kits to
                            stock.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization</h4>
                          <p>
                            Organises the items into categories and maintains an
                            overall overview.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes</h4>
                          <p>
                            Assign the attributes to the different items to make
                            finding a specific item easy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog</h4>
                          <p>
                            Creates special item card that a company offers to
                            its customers with no inventory
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting</h4>
                          <p>
                            Manages to keep the stock of items counted in
                            real-time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>
                            Manages item availability by location, time, sales
                            event, use on assembly, and production BOMs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer</h4>
                          <p>
                            Manages all the transfer orders to transfer
                            inventory items from one location to another.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation</h4>
                          <p>
                            Reserve some products from inventory for sales,
                            service, purchase, assembly, and production orders.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking</h4>
                          <p>
                            Helps the user to track items using a serial number
                            or lot number in case of a recall situation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Block Items</h4>
                          <p>
                            Blocks some items from entering into sales or
                            purchase lines or in any transaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Inventory"
                  role="tabpanel"
                  aria-labelledby="v-pills-Inventory-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving</h4>
                          <p>
                            Manages the record of all item receipts at the
                            warehouse location along with the details of the
                            purchase order.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments</h4>
                          <p>
                            Manages the record of shipped items at the warehouse
                            location along with the details of the sales order.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cross Dock Items</h4>
                          <p>
                            Bypass, pick, and place expedited items in inventory
                            for shipping.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away</h4>
                          <p>
                            Classifies the items received from various available
                            resources as per the configured warehouse process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items</h4>
                          <p>
                            Helps the organisation to move items from different
                            locations in the warehouse.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items</h4>
                          <p>
                            Chooses the items for different purposes as per the
                            data configured in the warehouse.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS)</h4>
                          <p>
                            Track the movements of items in the warehouse using
                            the barcode scanning feature.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Project"
                  role="tabpanel"
                  aria-labelledby="v-pills-Project-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Creation</h4>
                          <p>
                            The Dynamics 365 BS assists the organisation in
                            creating and managing projects, as well as assigning
                            jobs and planning projects.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                          <p>
                            Distributes resources to various tasks with price
                            management prior to the start of each project.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management</h4>
                          <p>
                            Prepares the time sheet with job tasks, planning
                            lines, and updates the time sheet lines to the job
                            journal.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management</h4>
                          <p>
                            Analyze and compare the distribution of the budget
                            across various projects to check the quality, cost,
                            and efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions</h4>
                          <p>
                            Keeps a record of all consumption based on various
                            jobs and updates the data in real-time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies</h4>
                          <p>
                            Manages the purchase of all supplies needed to
                            complete a project and keeps track of the item as
                            well as the time spent on it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods</h4>
                          <p>
                            This feature helps to ensure the creation of correct
                            financial statements and makes a financial
                            estimation of jobs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance</h4>
                          <p>
                            It manages the correct financial statements and the
                            financial value of materials after consumption for a
                            job.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                          <p>
                            Send the project’s invoice to the customer after the
                            completion of a particular project or schedule it as
                            required.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>
                            Eliminates the duplicate records of the same vendors
                            to remove the confusion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Manufacturing"
                  role="tabpanel"
                  aria-labelledby="v-pills-Manufacturing-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                          <p>
                            To plan and suggest, the planning system demands a
                            balanced supply chain.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                          <p>
                            Plan the supply and adjust the algorithms to meet
                            the manufacturing requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Demand Forecasting</h4>
                          <p>
                            Enables the users to forecast the demand as per
                            expected sales and production.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                          <p>
                            Manages the production orders from sales demand to
                            cover the exact sales order demand.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                          <p>
                            Helps to manually plan for sales and production
                            demand, but one BOM level at a time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                          <p>
                            For supply chain automation, the planning worksheet
                            works on MPS and MRP options.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                          <p>
                            Creates data automatically about the supply chain
                            and mentions the demand for refilled items.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                          <p>
                            With D365 Business Central, it reschedules the work
                            centre calendar due to sudden planning changes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>
                            Check the availability of a specific item and the
                            insights of events that influence it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                          <p>
                            Create production orders manually or automatically
                            with Dynamics 365 Business Central.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                          <p>
                            Helps decision makers to outsource the selected
                            processes or operations to a subcontractor.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                          <p>
                            Record, post production output with material and
                            time consumption for single released production
                            line.
                          </p>
                        </div>
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
          <div className="row g-5">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>
                  Microsoft Dynamics 365 <br />
                  Business Central Features
                </h2>
                <h3>
                  Streamline your business to a new level with Dynamics 365
                  Business Central advanced features and capabilities
                </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                <NavLink
                  to="/dynamics-365-business-central-features/"
                  className="btn-get-started scrollto"
                >
                  <span>Read More Features </span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        An Integrated <br />
                        ERP Solution
                      </h3>
                      <div className="overlay">
                        <p>
                          Microsoft Dynamics 365 Business Central is an
                          all-in-one{" "}
                          <NavLink to="/products/microsoft-dynamics-erp/">
                            ERP System{" "}
                          </NavLink>
                          whereby enterprises can connect their teams to drive
                          effective and timely collaboration from anytime and
                          anywhere using any device.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Real-time Reporting
                        <br />& Analytics
                      </h3>
                      <div className="overlay">
                        <p>
                          Real-time reporting & analytics help to make
                          business-driven decisions. Businesses can get a
                          variety of reports and boost their reporting and
                          analytics process when integrated with{" "}
                          <NavLink to="/products/microsoft-power-bi/">
                            Power BI.
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improved
                        <br />
                        Customer Experiencee
                      </h3>
                      <div className="overlay">
                        <p>
                          <NavLink to="/dynamics-365-business-central-implementation/">
                            Implementing Business Central{" "}
                          </NavLink>
                          can help you to drive a sound customer experience by
                          keeping track of customer activities and supporting
                          them in their hourly need.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Personalization
                        <br />& Integration
                      </h3>
                      <div className="overlay">
                        <p>
                          <NavLink to="/products/dynamics-365-business-central/">
                            D365 Business Central
                          </NavLink>{" "}
                          can be easily customized to suit your business
                          requirements. Businesses can get seamless integration
                          with Microsoft's products as well as other existing
                          business applications.
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
      <section className="call_to_action call_to_action-n">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <Swiper
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-8 align-self-center">
                        <div className="call_to_action-left">
                          <h3>Dynamics NAV to Business Central Upgrade!</h3>
                          <p>
                            Are you looking to upgrade from Dynamics NAV to
                            Dynamics 365 BC?
                          </p>
                          <div className="new-btn new-btn-nn">
                            <NavLink
                              to="/dynamics-nav-to-business-central/"
                              className="btn-get-started-color"
                            >
                              <span>Learn More</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="call_to_action-right">
                          <img
                            src="/assets/img/Group-683.png"
                            alt="microsft dynamics Nav"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-8 align-self-center">
                        <div className="call_to_action-left">
                          <h3>Dynamics NAV to Business Central Upgrade!</h3>
                          <p>
                            Are you looking to upgrade from Dynamics NAV to
                            Dynamics 365 BC?
                          </p>
                          <div className="new-btn new-btn-nn">
                            <NavLink
                              to="#about"
                              className="btn-get-started-color"
                            >
                              <span>Read More Feature</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="call_to_action-right">
                          <img src="/assets/img/Group-683.png" alt="jasd" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>

            <div className="swiper-pagination"></div>
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
                    src="/assets/img/bisin_leftimg.jpg"
                    className="fix-im"
                    alt="Business Central Services"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <NavLink
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/Video-Business Central.png"
                          alt="Video Business Central"
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
                <h2>Business Central Services</h2>
                <p>
                  Get unmatched Dynamics 365 Business Central services from UK's
                  most trusted Partners.
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
                  <h3>
                    Business Central
                    <br /> Implementation
                  </h3>
                  <p>
                    Transform your business capabilities with our highly
                    customized and secured Business Central Implementation.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-365-business-central-implementation/">
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
                  <h3>
                    Business Central
                    <br /> Upgrade
                  </h3>
                  <p>
                    Avail seamless Business Central upgrade to explore your
                    business opportunities and scale high.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-365-business-central-upgrade/">
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
                  <h3>
                    Business Central
                    <br /> Support
                  </h3>
                  <p>
                    Drive smoother flow and continuity throughout your
                    enterprise with our seamless support services.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-365-business-central-support/">
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
          <header className="section-header">
            <h2>Dynamics 365 Business Central Pricing & Licensing</h2>
            <p>
              Explore D365 Business Central Pricing for Team Members, Essentials
              & Premium Plans
            </p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Premium
                </h3>
                <div className="price">
                  <sup>£</sup>75.40<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Sales Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Service Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Manufacturing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Team Members
                </h3>
                <div className="price">
                  <sup>£</sup>6<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Read and Approve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Employee Self Serve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Run All Reports
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <NavLink
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </NavLink>
                <ExternalLink
                  href="/assets/pdf/Dynamics-365-Licensing-Guide-June-2022.pdf"
                  className="btn-get-whit"
                  target="_blank"
                  rel=""
                >
                  <span>See Licensing Guide</span>
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
                <h3>Dynamics 365 Business Central Implementation</h3>
                <p>
                  Maximize your business potentials and overcome business
                  challenges by implementing Dynamics 365 Business Central
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Learn More The About Implementation Process </span>
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
              questions about Business Central?
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
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <ExternalLink
                          target="_blank"
                          rel=""
                          href="https://www.dynamicssquare.co.uk/what-is-dynamics-365-business-central/"
                        >
                          <b>Dynamics 365 Business Central</b>
                        </ExternalLink>
                        &nbsp;is a one-stop solution for all your enterprise
                        needs. Since Business Central is built with excel-like
                        features and easy-to-use navigation, anyone exposed to
                        advanced excel functionality can easily adapt and
                        leverage the powerful use of Business Central.
                      </p>
                      <p>
                        Business Central is designed as a complete{" "}
                        <Link to="/products/microsoft-dynamics-erp/">
                          <b>ERP solution</b>
                        </Link>{" "}
                        for modern enterprises seeking to simplify end-to-end
                        enterprise practices from financials to sales,
                        warehousing to supply chain, project management to
                        general reporting, assembly to manufacturing; Business
                        Central is embedded with all potential business
                        management solutions that give you real-time eyes into
                        your business.&nbsp;
                      </p>
                      <p>
                        You can host your application whether on cloud (private
                        or public) or on-premise; the choice is yours. When it
                        comes to{" "}
                        <ExternalLink
                          target="_blank"
                          rel=""
                          href="https://www.dynamicssquare.co.uk/what-is-dynamics-365-business-central/"
                        >
                          <strong>
                            Dynamics 365 Business Central Overview
                          </strong>
                        </ExternalLink>
                        , it comprises huge things.&nbsp;
                      </p>
                      <p>
                        To get more information about Business Central, how it
                        works, and how it can transform your business context,
                        do contact Dynamics Square. Our{" "}
                        <Link to="/">
                          <strong>Dynamics 365 Business Central experts</strong>
                        </Link>{" "}
                        can assist you with the right and precise information.
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
                      How is Business Central related to Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is the updated version of
                      Dynamics NAV. With its upgrade, Microsoft changed its name
                      too. The Core functionality remains the same and is
                      updated with advanced features and navigation to support
                      modern enterprises and to serve every industry. However,
                      existing Dynamics NAV users can still avail of the support
                      services. Dynamics Square offers highly reliable and
                      efficient NAV and Business Central Support Services at
                      cost-effective rates.
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
                      How do I upgrade to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Often, enterprises seem confused about when is the right
                        time to upgrade to Dynamics 365 Business Central. If the
                        same question is rolling out in your mind, contact{" "}
                        <NavLink to="/">
                          <strong>Dynamics Square</strong>
                        </NavLink>
                        . We provide free-system health-check to identify your
                        system lacks and upgrading needs considering your
                        current business practices. Our experts can let you know
                        whether you are in need to upgrade your current system
                        or not.
                      </p>
                      <p>
                        To know more about Why move to Dynamics 365 Business
                        Central?&nbsp;
                        <NavLink to="/contact-us/" target="_blank">
                          <b>Contact our Dynamics 365 experts</b>
                        </NavLink>
                        , we can help you with all your questions. For instance,
                        when you need to upgrade, what are possible personalized
                        options for you? What sort of implementation practices
                        do we follow while upgrading your existing business
                        solution to Microsoft Dynamics 365 Business Central?
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
                      data-bs-target="#faq-content-4"
                    >
                      What industries can Dynamics 365 Business Central Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is designed in such a way
                      that any industry from retailers to manufacturers, food &
                      beverages to operations, e-commerce industry to financial
                      services, and more can avail of seamless support in terms
                      of Dynamics 365 business central. Moreover, Business
                      Central can be personalized as per your industry-specific
                      needs, or custom operational navigation takes place in
                      your organization.To get more information about how this
                      ERP solution can be implemented and leveraged by your
                      specific industry, talk to us, we as a Business Central
                      Consulting Services Provider are here to answer all your
                      queries.
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
                      How much does Dynamics 365 Business Central cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Business Central pricing goes as per your
                        specific business processes. You can choose out of the
                        given licensing options:
                      </p>
                      <ul>
                        <li>Essential</li>
                        <li>Premium</li>
                        <li>Team Member</li>
                      </ul>
                      <p>
                        Essential plan comes to fulfil your essential business
                        requirement whereas premium comes with extra
                        functionality layers.
                      </p>
                      <ul>
                        <li>
                          For Dynamics 365 Business Central Essential plan, you
                          will be charged £52.80 per user/per month.
                        </li>
                        <li>
                          For Dynamics 365 Business Central Premium plan, you
                          need to invest £75.40 per user/per month.
                        </li>
                        <li>
                          For Dynamics 365 Business Central Team Member, users
                          will be charged £5.82 per user/per month.
                        </li>
                      </ul>
                      <p>
                        If you manage processes like finance, purchase/sales,
                        and inventory, an essential license would be an ideal
                        deal for your business to start your journey.
                      </p>
                      <p>
                        If you are a manufacturer and provide services, a
                        premium license would be the best-suitable way to start
                        with.
                      </p>
                      <p>
                        So, it's up to you, you can buy Business Central suited
                        to your specific needs or user requirements. To know
                        more or which plan would be ideal for your business,
                        Dynamics Square - Microsoft authorized Business Central
                        Consulting Services provider can help.
                      </p>
                      <p>
                        Here you need to understand that this cost is just a
                        licensing cost, it doesn't include any sort of
                        implementation, customization, or integration cost. Your
                        actual costs can be revealed by your Dynamics 365
                        Business Central Implementation Partner once you share
                        your requirement with them.
                      </p>
                      <p>
                        Initially, you can start with Microsoft Business Central
                        Trial at no cost for 30 days. After your trial period,
                        if you find Business Central - a suitable deal for your
                        business, you can continue by availing any of the given
                        licensing suited to your budget and requirements.
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
                      How do I get ongoing support for Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        You will get direct support from Dynamics Square as we
                        are a gold partner for Microsoft's products with
                        existence in the UK market and other global locations
                        with a well-equipped support system. Our support system
                        includes end-user training, technical assistance, and
                        off-hours support whenever required.
                      </p>
                      <p>
                        If you are seeking professional and trustworthy support
                        services, selecting Dynamics Square - a trustworthy
                        Business Central Support Partner in the UK can help.
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
                      data-bs-target="#faq-content-7"
                    >
                      How does Power BI Fit with Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central is an all-in-one ERP solution. In case
                        you want advancement in your reporting &amp; analytics
                        terms, seamless integration with Power BI can be done as
                        both are Microsoft's products, hence, Power BI fits well
                        with Dynamic 365 Business Central. Power BI can enable
                        visualization in your reporting, key metrics, and your
                        entire business analytics. You can create your own
                        business reports and dashboards leveraging standard
                        reporting templates and other visuals.
                      </p>
                      <p>
                        If you want expert advice on how you can leverage Power
                        BI and Business Central together, connect with us, being
                        a reliable Business Central Support, Upgrade, and
                        Implementation partner, we can always provide you with
                        expert consulting.
                      </p>
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
          <header className="section-header">
            <h2>
              Check out our Best Resources
              <br />
              for Business Central
            </h2>
          </header>
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
                      to="/assets/pdf/Is-Your-Business-Outgrowing-Your-Accounting-Software.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Business-Owners-Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Business
                      Owner's Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Reimagine-Productivity.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reimagine
                      Productivity
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Four-Technology-Trends-Helping-Businesses-Thrive-in-a-Digital-World.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Technology
                      Trends Helping Businesses Thrive in a Digital World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Reinvent-productivity-with-Dynamics-365-and-Microsoft-365.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reinvent
                      productivity with Dynamics 365 and Microsoft 365
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/The-Total-Economic-Impact-of-Microsoft-Dynamics-365-Business-Central.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> The Total
                      Economic Impact of Dynamics 365 Business Central
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <ExternalLink
                      rel=""
                      href="/why-choose-microsoft-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why Choose
                      Microsoft Dynamics 365 Business Central?
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      rel=""
                      href="/products/dynamics-365-business-central/advantages-capabilities/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Advantages
                      and Capabilities
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      rel=""
                      href="https://www.dynamicssquare.co.uk/upgrade-dynamics-nav-to-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why to
                      Upgrade Dynamics NAV to Business Central
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      rel=""
                      href="https://www.dynamicssquare.co.uk/reasons-to-upgrade-accounting-software/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </ExternalLink>
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

export default BusinessCentral;
