import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
import { useHistory, useLocation } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Form from "./Form";
import FooterBtoomSuscriber from "./FooterBtoomSuscriber";

//import HubspotForm from "react-hubspot-form";

const Footer = () => {
  const history = useHistory();
  const currentUrl = window.location.href;
  const [display, setDisplay] = useState("dspn");
  const { pathname } = useLocation();
  //console.log(pathname);
  if (
    pathname === "/contact-us/" ||
    pathname === "/thank-you/" ||
    pathname === "/thank-you-for-registration/" ||
    pathname === "/404" ||
    pathname === "/thank-you/email-subscriber/" ||
    pathname === "/not-for-profit-fundraising-engagement/" ||
    pathname === "/emailer-power-bi/" ||
    pathname === "/email-dynamics365-crm/" ||
    pathname === "/email-mtd-compliant/" ||
    pathname === "/subscribe-updates/" || 
    pathname === "/email-gp-to-bc/"
  ) {
    //setStyle("dspn");
    return null;
  }

  function sendEmail(e) {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p9e4s2i",
        "template_own8zg4",
        e.target,
        "JZAkUF2t_OOtPtKmy"
      )
      .then((res) => {
        history.push("/thank-you/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div
        className="modal fade form-main-model"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Request Callback
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <p></p>
            </div>
            <p>
              Please complete the form below and we will be in touch or{" "}
              <ExternalLink href="tel:+442071932502" target="_self" rel="">
                book a call
              </ExternalLink>{" "}
              with one of our Microsoft consultants.
            </p>
            <div className="modal-body">
              <div className="main-form-wrper">
                <form onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Full Name"
                      name="name"
                      required
                    />
                    <input type="hidden" name="url" value={currentUrl} />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="*Work Email"
                      name="email"
                      pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Company Name"
                      name="company_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="*Phone Number"
                      name="phone"
                      pattern="^\d{10,13}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="*How Can We Help You?"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I agree to the
                      <NavLink
                        to="/privacy-policy/"
  
                        target="_blank"
                      >
                        {" "}
                        Privacy Policy{" "}
                      </NavLink>
                      and
                      <NavLink
                        to="/terms-of-use/"
                        target="_blank"
                      >
                        {" "}
                        Terms of Service{" "}
                      </NavLink>
                      .
                    </label>
                  </div>

                  <div className="spiner-wrper">
                    <button
                      type="submit"
                      className="btn btn-primary fomr-submit"
                    >
                      Submit
                    </button>
                    <div className={display} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="services bg-shape ovr-f hidesec">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Book a Free Consultation</h2>
            <p>
              See How Dynamics Square Can Help Transform Your Business With
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row justify-content-md-center">
            <div className="col-lg-10 col-md-10">
              <div className="row g-0 extra-height">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="main-form-wrper-common">
                    <Form />
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-6 hide-c">
                  <img
                    src="/assets/img/contactfor-sede-img.jpg"
                    alt="contactfor-sede-img"
                    className="image-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-contact-s">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <ExternalLink target="_self" rel="" href="tel:+442071932502">
                    +44 207 193 2502
                  </ExternalLink>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  International House 61 Mosley Street, Manchester, M2 3HZ,
                  United Kingdom
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <ExternalLink target="_self" rel="" href="tel:+447479273380">
                    +44 747 927 3380
                  </ExternalLink>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <ExternalLink target="_self" rel="" href="tel:+3197010257044">
                    +31 970 102 57044
                  </ExternalLink>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <NavLink to="/" className="logo d-flex align-items-center">
                  <img
                    src="/assets/img/dsuk-footer-logo.svg"
                    alt="dsuk-footer-logo"
                  />
                </NavLink>
                <p>
                  Dynamics Square is UK's leading Microsoft Gold Certified
                  Partner that caters to the needs of orgnizations who can
                  source next-gen Microsoft Business Apps from our highly
                  skilled Microsoft consultants.
                </p>
                <img
                  src="/assets/img/microsoft-partner.svg"
                  alt="microsoft-partner"
                  className="footer-img"
                />
                <img
                  src="/assets/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img"
                />
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/dynamics-365-business-central/">
                      Business Central
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/microsoft-power-bi/">
                      Power BI
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/microsoft-azure/">Azure IoT</NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/products/microsoft-dynamics-crm/">
                      CRM
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/about-us/">About us</NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/why-us/">Why Us</NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/our-services/">Our Services</NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/partner/">Our Partners</NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/contact-us/">Contact Us</NavLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <ExternalLink
                      href="https://www.dynamicssquare.co.uk/blog/"
                      rel=""
                      target="_self"
                    >
                      Blog
                    </ExternalLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <NavLink to="/privacy-policy/">Privacy policy</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <ExternalLink
                    target="_blank"
                    rel=""
                    href="https://twitter.com/dsquare_uk"
                    className="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </ExternalLink>
                  <ExternalLink
                    target="_blank"
                    rel=""
                    href="https://www.facebook.com/dynamicssquareuk/"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </ExternalLink>
                  <ExternalLink
                    target="_blank"
                    rel=""
                    href="https://www.instagram.com/dynamicssquareuk/"
                    className="instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </ExternalLink>
                  <ExternalLink
                    target="_blank"
                    rel=""
                    href="https://www.linkedin.com/showcase/dynamics-square-uk/"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </ExternalLink>
                </div>
                <div className="footer-bottm-subscriber">
                  <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span>
                  <FooterBtoomSuscriber />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2022 Dynamics Square.</span>
            <div className="footer-extra-link">
              <NavLink to="/terms-of-use/">Terms of Use </NavLink>
              <NavLink to="/cookie-policy/">| Cookie </NavLink>
              <NavLink to="/sitemap.xml">| Sitemap</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
