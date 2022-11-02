import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import FooterBtoomSuscriber from "./FooterBtoomSuscriber";
const CustomFooter = () => {
  return (
    <>
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
              <NavLink to="/sitemap_index.xml">| Sitemap</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CustomFooter;
