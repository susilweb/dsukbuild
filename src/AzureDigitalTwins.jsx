import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AzureDigitalTwins = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Azure Digital Twins | Best Data Modelling and Simulations</title>
        <meta
          name="description"
          content="Azure Digital Twins is an IoT platform that allows you to create a digital representation of IoT-connected infrastructure. Get Azure Digital Twins today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/azure-digital-twins/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Azure Digital Twins | Best Data Modelling and Simulations"
        />
        <meta
          property="og:description"
          content="Azure Digital Twins is an IoT platform that allows you to create a digital representation of IoT-connected infrastructure. Get Azure Digital Twins today."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/products/azure-digital-twins/"
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
        <meta property="og:image:alt" content="azure digital twins banner" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Azure Digital Twins | Best Data Modelling and Simulations"
        />
        <meta
          name="twitter:description"
          content="Azure Digital Twins is an IoT platform that allows you to create a digital representation of IoT-connected infrastructure. Get Azure Digital Twins today."
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="2 minutes" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Azure
                Digital Twins
              </h1>
              <p>
                Build extensive IoT solutions to model your overall environment
                with real-time efficiency. Develop and model digital
                demonstration, and leverage key insights to drive exceptional
                customer experience.
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
                src="/assets/img/azure-digital-twins-banner.webp"
                alt="azure-digital-twins-banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Azure Digital Twins?</h2>
            <p>
              Azure Digital Twins is an IoT platform that allows you to create a
              digital representation of IoT-connected infrastructure. Leveraging
              open modeling language, you can model real-world things, people,
              processes, places, etc. Now, you can transform these digital twins
              into real-life objects by applying dynamic business logic and data
              processing methods.
            </p>
            <br /> <br />
            <h2>Azure Digital Twins Overview</h2>
            <p>
              Seamlessly model real-world things, processes, etc., and create
              world-class custom domain models by using Digital Twins definition
              language. Apply live execution environment to enable your digital
              twins for live graph demonstration. Extend IoT connected
              experience by acquiring insights by seamlessly integrating with
              Azure data, AI services, or other key analytics. These analytics
              can be leveraged to trace past activities as well as predict the
              future potentials for any of your IoT-connected environments.
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
                            src="/assets/img/icons-digitaltwin_Create-Comprehensive.svg"
                            alt="icons-digitaltwin_Create-Comprehensive"
                          />
                        </div>
                        <span>Create Comprehensive Digital Models</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Craft digital representation or digital twins of
                        real-world objects, people, places, and more and bring
                        life to these digital twins to drive better product
                        strategy, optimize operations & costs to improve
                        customer experience.
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
                            src="/assets/img/icons-digitaltwin_Predictive-Analysis.svg"
                            alt="icons-digitaltwin_Predictive-Analysis"
                          />
                        </div>
                        <span>Predictive Analysis</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Enables to deep-dive into past experiences and helps to
                        predict the future of your connected equipment, devices,
                        or overall IoT connected environment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accneww">
                <hr className="mob-disp" />
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
                            src="/assets/img/icons-digitaltwin_Reduce-Downtime.svg"
                            alt="icons-digitaltwin_Reduce-Downtime"
                          />
                        </div>
                        <span>Reduce Downtime</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Reduce downtime within the connected environment with
                        the help of insights that enable to predict failure,
                        downgraded performance of equipment, and entire IoT
                        connected environment.
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
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-digitaltwin_Trusted-Enterprise.svg"
                            alt="icons-digitaltwin_Trusted-Enterprise"
                          />
                        </div>
                        <span>Trusted Enterprise-Grade Platform</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Allows you to create enterprise-grade IoT solutions
                        wrapped with compliance, security, and privacy
                        management benefits. Integrating with Azure IoT hub can
                        embed with a high level of security and scalability with
                        the capability of monitoring, managing, and updating the
                        devices in timely accordance.
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
              <h2>Azure Digital Twins Features</h2>
              <h3>Model Your IoT Connected Environment Leveraging Azure Digital Twins</h3>
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
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Create Custom
                        <br />
                        Domain
                      </h3>
                      <div className="overlay">
                        <p>
                          Develop custom domain models for any IoT-connected
                          environment by simply making efficient use of Digital
                          Twins Definition Language.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Live Execution
                        <br />
                        Environment
                      </h3>
                      <div className="overlay">
                        <p>
                          Bring digital twins to life via live graphical
                          representation. The live representation can be
                          leveraged to reveal business analytics, equipment
                          performance, and more in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Seamless
                        <br />
                        Inputs
                      </h3>
                      <div className="overlay">
                        <p>
                          Get inputs from connected devices and systems to
                          connect your IoT devices, Logic Apps, and REST APIs to
                          make an efficient connected environment to optimize
                          processes and predict device performance.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Efficient
                        <br />
                        outputs
                      </h3>
                      <div className="overlay">
                        <p>
                          Implement scalable solutions quickly with reduced
                          coding efforts leveraging Plug & Play app that allows
                          simplified and seamless device-to-device cloud
                          integration to launch cloud IoT solutions faster.
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

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Talk to Our Digital TwinsExperts</h3>
                <p>
                  Connect, share your business requirement, and avail of our
                  consultation to reveal the best potential IoT solution for
                  your business.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book a Callback</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AzureDigitalTwins;
