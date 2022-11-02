import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Helmet } from "react-helmet";
import { ExternalLink } from "react-external-link";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Dynamics Square | Dynamics 365 Business Central Partner
        </title>
        <meta
          name="description"
          content="Learn about Dynamics Square and explore what makes us unique and one of the most trusted Dynamics 365 Business Central partners in the UK and Europe region."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/about-us/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="About Dynamics Square | Dynamics 365 Business Central Partner"
        />
        <meta
          property="og:description"
          content="Learn about Dynamics Square and explore what makes us unique and one of the most trusted Dynamics 365 Business Central partners in the UK and Europe region."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/about-us/"
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
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:alt" content="Dynamics-365-service" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Dynamics Square | Dynamics 365 Business Central Partner"
        />
        <meta
          name="twitter:description"
          content="Learn about Dynamics Square and explore what makes us unique and one of the most trusted Dynamics 365 Business Central partners in the UK and Europe region."
        />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:creator" content="@dsquare_uk" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="1 minute" />
      </Helmet>
      <main>
        <section className="Solution-banner hero-1 hero about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  mobile-1 align-self-center">
                <h1>Transforming Businesses Through Cloud Technology </h1>
                <p>
                Dynamics Square is mustering the energy to create a better world and solve your critical business challenges through digital transformation led by innovative Microsoft cloud technology - making your business more agile and resilient.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <img src="/assets/img/about-pic.png" alt="About-us" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-intr">
          <div className="container">
            <div className="col-lg-12">
              <div className="about-intr-wrpper">
                <div className="left-content">
                  <h3>
                    We're Microsoft
                    <br />
                    Gold Partners
                  </h3>
                </div>
                <div className="right-content">
                  <p>
                    As a Microsoft Gold Partner and trusted by 250+ clients
                    worldwide, we're proactively delivering cloud technology
                    solutions, training, and support from a team of 135+ highly
                    skilled Microsoft consultants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter-sec">
          <div className="container">
            <div className="row inner-side-pad">
              <div className="col-lg-4 col-md-4">
                <div className="counter-sec inerr">
                  <h3>250+</h3>
                  <p>Clients Worldwide</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="counter-sec inerr">
                  <h3>135+</h3>
                  <p>Certified Pofessionals</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="counter-sec inerr">
                  <h3>11+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header">
                  <h2>Your Trusted Microsoft Partner</h2>
                  <p>
                    Relationships are built over an ever-valuable commodity:
                    <b>Trust</b>. We're out with a simple motto in mind: Be the most
                    preferred technology solution provider in the Global IT
                    Infrastructure by building strong relationships among companies and
                    clients for rapid business growth.
                  </p>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/assets/img/mission.png" alt="mission" />
                    <h3>Mission</h3>
                    <p>
                    To empower every business on the planet to achieve more and cope with the world's next wave through Microsoft Business Apps such as D365 Business Central, Finance, Sales, Supply Chain - hosted under Microsoft Azure Cloud; a highly secure and advanced cloud network. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/assets/img/vission.png" alt="vission" />
                    <h3>Vision</h3>
                    <p>
                    To simplify & automate business processes, improve customer experience, boost sales ROI by breaking data silos into meaningful insights by integrating Power BI, AI, and ML - Powered by Microsoft cloud technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/assets/img/approch-new.png" alt="approch" className="wsd" />
                    <h3>Approach</h3>
                    <p>
                    We strive to build long-term relationships by making cloud techology accessible. We nurture fundamental values - "customer centricity" and "value proposition". Our clients are at our "central focus" for all our actions - engaging, informing, and adding value to their Vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mission">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="mission-pic">
                  <img
                    src="/assets/img/miss-lefiimage.png"
                    alt="miss-lefiimage"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="mission-content-building">
                 <h3>Building Long Term Association</h3>
                 <p>Backed up by our in-house highly secured ways of delivering IT solutions, we offer Microsoft Cloud Technology for businesses at a reasonable cost; monthly or yearly per-user subscription. It helps us build long-term relationships with our customers.</p>
                 <h4>See how our incredible people can help you</h4>
                 <div>
                    <div className="text-center text-lg-start">
                      <NavLink
                        data-bs-toggle="modal"
                        to="#exampleModal"
                        className="btn-get-started scrollto"
                      >
                        <span>Get In Touch</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="domain-expertise">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header">
                  <h2>Meet Our Passionate Team</h2>
                  <p>
                  Dynamics Square is led by a team of experienced professionals who embrace new business opportunities. 
                  </p>
                </header>
              </div>
            </div>
          <div className="row">
              <div className="col-lg-4">
                <div className="team-memb">
                  <div className="tem-mem-pic">
                    <img src="/assets/img/gaurav-goyal.png" alt="gaurav-goyal" />
                  </div>
                  <div className="tem-mem-info">
                    <h4>Gaurav Goyal</h4>
                    <span>Co-Founder</span>
                    <p>"Nurturing people and investing in their capabilities to build a resilient organization."</p>
                  </div>
                  {/* <div class="social">
                    <ExternalLink href="https://www.linkedin.com/in/gauravg1">
                      <i class="bi bi-linkedin"></i>
                      </ExternalLink>
                    </div> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-memb">
                  <div className="tem-mem-pic">
                    <img src="/assets/img/manish-goyal.png" alt="manish-goyal" />
                  </div>
                  <div className="tem-mem-info">
                    <h4>Manish Goyal</h4>
                    <span>Co-Founder</span>
                    <p>"Helping companies with Digital Transformation using innovative Microsoft cloud technology"</p>
                  </div>
                  {/* <div class="social">
                    <ExternalLink href="https://www.linkedin.com/in/manish-g-74854a44">
                      <i class="bi bi-linkedin"></i>
                      </ExternalLink>
                    </div> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-memb">
                  <div className="tem-mem-pic">
                    <img src="/assets/img/dr-felton-lean.png" alt="dr-felton-lean" />
                  </div>
                  <div className="tem-mem-info">
                    <h4>Dr. Felton Lean</h4>
                    <span>The People Person</span>
                    <p>"Helping employees and organisations to achieve more through learning and development."</p>
                  </div>
                  {/* <div class="social">
                    <ExternalLink href="https://www.linkedin.com/in/dr-felton-lean-5941bb2b/">
                      <i class="bi bi-linkedin"></i>
                      </ExternalLink>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-drak">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header section-header-white-new">
                  <h2>Milestones Achieved Since Inception </h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper about-timeline"
                >
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2011</h4>
                      <p>Dynamics Square came into existence</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2012</h4>
                      <p>Became Microsoft Certified Silver Partner</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2015</h4>
                      <p>Started our Footprints in Australia</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2016</h4>
                      <p>Launched US/UK Operations</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2017</h4>
                      <p>Became Competent for D365 Customer Engagement</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2018</h4>
                      <p>Became Microsoft Gold Certified Partner</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2019</h4>
                      <p>Launched Singapore Operations</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2020</h4>
                      <p>Emerged as Power Platform competent</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner-slider-cont">
                      <h4>2021</h4>
                      <p>
                        Gained competency with entire Microsoft Business
                        Applications
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>



        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
              <header className="section-header">
              <h2>We are not merely an IT Solutions provider, but your partner in growth.  </h2>
              </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <img src="/assets/img/group-2192.svg" alt="group-2192"></img>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
              <header className="section-header">
              <h2>Our Expertise and Capabilities</h2>
              <p><b>With us, businesses grow fast, strong, and at full throttle.</b></p>
              <p>Here at Dynamics Square, our unique ways of consulting businesses with the latest IT technology solutions for over 11+ years are helping SMBs and large enterprises grow and scale through simplified best-in-class Microsoft cloud technology.</p>
              </header>
              </div>
            </div>
            <Swiper
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination ,Autoplay]} className="mySwiper mySwiper-about">
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/assets/img/new-side-1.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Outpace Your Competition with Microsoft's Cloud-based ERP Solutions</h3>
                      <p>We streamline your business processes with modern ERP systems powered by cloud technology, AI, and machine learning, ensuring sustainability and continuous growth.</p>
                      <ul className="new-com-list">
                        <li>
                          <NavLink to="/products/dynamics-365-business-central/">
                          <img src="/assets/img/group-2122.png" alt="Business-Central" />
                          <span>Business <br /> Central</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-finance/">
                          <img src="/assets/img/group-2123.png" alt="Finance" />
                          <span>Finance</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-commerce/">
                          <img src="/assets/img/group-2124.png" alt="Commerce" />
                          <span>Commerce</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/dynamics-365-human-resources/">
                          <img src="/assets/img/group-2125.png" alt="Human-Resources" />
                          <span>Human <br /> Resources</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/dynamics-365-supply-chain-management/">
                          <img src="/assets/img/group-2126.png" alt="Supply-chain" />
                          <span>Supply <br /> Chain</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/dynamics-365-project-operations/">
                          <img src="/assets/img/group-2127.png" alt="Project-Operations" />
                          <span>Project <br /> Operations</span>
                          </NavLink>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/assets/img/group-2152.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Uncover Deeper Insights to Deliver Extraordinary Customer Experience</h3>
                      <p>Digital transformation isn't successful without meeting customer expectations. We help you build strong relationships, nurture clients and boost sales through Microsoft CRM solutions.</p>
                      <ul className="new-com-list">
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-sales/">
                          <img src="/assets/img/group-2138.png" alt="Sales" />
                          <span>Sales</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-marketing/">
                          <img src="/assets/img/group-2139.png" alt="Marketing" />
                          <span>Marketing</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-field-service/">
                          <img src="/assets/img/group-2137.png" alt="Field-Service" />
                          <span>Field <br /> Service</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-customer-service/">
                          <img src="/assets/img/group-2136.png" alt="Customer-Service" />
                          <span>Customer <br /> Service</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/assets/img/group-215.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Integrate Microsoft Business Apps with Power Platform for Impactful Solutions </h3>
                      <p>Make informed decision by connecting apps with Azure cloud and develop end-to-end business solutions for effectively analyzing data, building solutions, automating processes, and creating virtual agents.</p>
                      <ul className="new-com-list">
                        <li>
                          <NavLink to="/products/microsoft-power-bi/">
                          <img src="/assets/img/group-2214.png" alt="Power-BI" />
                          <span>Power <br /> BI</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-power-automate/">
                          <img src="/assets/img/group-2213.png" alt=">Power-Automate" />
                          <span>Power <br /> Automate</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-power-apps/">
                          <img src="/assets/img/group-2211.png" alt="Power-Apps" />
                          <span>Power <br /> Apps</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-power-virtual-agents/">
                          <img src="/assets/img/group-22101.png" alt="Virtual-Agents" />
                          <span>Virtual <br /> Agents</span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/assets/img/group-2154.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Leverage Emerging Technologies for Sustainability</h3>
                      <p>Leverage the power of next-gen technologies like Azure, IoT, IIoT, AI, and ML. Save time and money by connecting your business to intelligent Microsoft Cloud Ecosystem.</p>
                      <ul className="new-com-list">
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-mixed-reality/">
                          <img src="/assets/img/group-1998.png" alt="Mixed-Reality" />
                          <span>Mixed <br /> Reality</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-azure/">
                          <img src="/assets/img/group-2164.png" alt="Azure" />
                          <span>Azure</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/microsoft-dynamics-365-ai/">
                          <img src="/assets/img/group-1977.png" alt="AI" />
                          <span>AI</span>
                          </NavLink>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section>
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header">
                  <h2>Why Choose Dynamics Square?</h2>
                  <p>We strive to make the latest technology simple to implement, effective, and accessible to all while encouraging innovation. Disrupting traditional ways of serving people is in our veins. We provide IT solutions and technology consulting at a reasonable cost and fixed price along with a specific solution that truly fits the business purpose.</p>
                </header>
              </div>
            </div>
          </div>
        </section>

        <section className="marn-bus-bo">
          <div className="container">
            <header className="section-header">
              <h2>Business Partners We Have Worked With</h2>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <img src="/assets/img/clients.jpg" alt="clients"></img>
              </div>
              <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <NavLink
                  to="/case-studies/"
                  className="btn-get-red"
                >
                  <span>Read Success Stories</span>
                </NavLink>
              </div>
            </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <header className="section-header">
              <h2>Our Presence Worldwide</h2>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <img src="/assets/img/word-map.png" alt="word-map"></img>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};



export default AboutUs;
