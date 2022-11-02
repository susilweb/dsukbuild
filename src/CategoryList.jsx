import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const CategoryList = () => {
  return (
    <>
      <Helmet>
        <title>Microsoft Dynamics 365 Case Studies | Dynamics Square</title>
        <meta
          name="description"
          content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Microsoft Dynamics 365 Case Studies | Dynamics Square"
        />
        <meta
          property="og:description"
          content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/case-studies/"
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
        <meta property="og:image" content=" " />
        <meta property="og:image:width" content="735" />
        <meta property="og:image:height" content="243" />
        <meta property="og:image:alt" content=" " />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Microsoft Dynamics 365 Case Studies | Dynamics Square"
        />
        <meta
          name="twitter:description"
          content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta
          name="twitter:image"
          content="https://www.dynamicssquare.co.uk/assets/img/case-icons-list.png"
        />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="1 minute" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Studies</h1>
              <p>
                Check out some of our case studies to see how Dynamics 365 has
                made a difference for our clients.
              </p>
              {/* <div>
                <div className="text-center text-lg-start">
                  <NavLink to="#" className="btn-get-started scrollto">
                    <span>Borwse List</span>
                  </NavLink>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/case-icons-list.png"
                alt="case-icons-list"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiless"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  All
                </button>
                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-homes"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Upgrade
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiles"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Implementation
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messagess"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Support
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profiless"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/crm-trading-1.png"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how CRM Trading boosted it's operational
                            efficiency by upgrading from Dynamics NAV 2009 to
                            Dynamics NAV 2018.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/crm-trading/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/pasante-logo.png"
                            alt="pasante-logo.png"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Find out how Pasante improved accuracy and
                            productivity by upgrading from Dynamics NAV to
                            Business Central On-premise.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/pasante/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/timesco-logo.png"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Timesco improved production capacity and
                            doubled revenue by upgrading Dynamics NAV to
                            Business Central Online.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/timesco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/cqc-logo-1-300x103-1.png"
                            alt="cqc-logo-1-300x103-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Discover how CQC improved accounting capabilities by
                            implementing Microsoft Dynamics 365 Business Central
                            online
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/cqc/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/cropped-arteak-logo-2.png"
                            alt="cropped-arteak-logo-2"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how Arteak Limited improved overall accounting
                            and financial processes by implementing Dynamics 365
                            Business Central.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/arteak/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/wipersupplywide-1-300x54-1.png"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Wiper Supply Services doubled sales
                            volume and customers by getting dedicated support
                            from Dynamics Square.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/wiper-supply-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/assets/img/tea.png" alt="tea" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Learn how Dynamics Square helped Global Tea &
                            Commodities Limited by customizing and providing
                            stress-free Dynamics NAV support.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/global-tea/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-homes"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/crm-trading-1.png"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how CRM Trading boosted it's operational
                            efficiency by upgrading from Dynamics NAV 2009 to
                            Dynamics NAV 2018.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/crm-trading/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/pasante-logo.png"
                            alt="pasante-logo.png"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Find out how Pasante improved accuracy and
                            productivity by upgrading from Dynamics NAV to
                            Business Central On-premise.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/pasante/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/timesco-logo.png"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Timesco improved production capacity and
                            doubled revenue by upgrading Dynamics NAV to
                            Business Central Online.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/timesco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profiles"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/cqc-logo-1-300x103-1.png"
                            alt="cqc-logo-1-300x103-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Discover how CQC improved accounting capabilities by
                            implementing Microsoft Dynamics 365 Business Central
                            online
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/cqc/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/cropped-arteak-logo-2.png"
                            alt="cropped-arteak-logo-2"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how Arteak Limited improved overall accounting
                            and financial processes by implementing Dynamics 365
                            Business Central.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/arteak/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messagess"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/assets/img/wipersupplywide-1-300x54-1.png"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Wiper Supply Services doubled sales
                            volume and customers by getting dedicated support
                            from Dynamics Square.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/wiper-supply-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/assets/img/tea.png" alt="tea" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Learn how Dynamics Square helped Global Tea &
                            Commodities Limited by customizing and providing
                            stress-free Dynamics NAV support.
                          </p>
                        </div>
                        <div className="btn-003">
                          <NavLink
                            to="/case-studies/global-tea/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
