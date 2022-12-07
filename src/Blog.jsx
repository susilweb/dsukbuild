import React from "react";
import { ExternalLink } from "react-external-link";
const Blog = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>

        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.co.uk/blog/microsoft-dynamics-365-business-central-for-manufacturing/"
              target="_self"
            >
              <img
                src="/assets/img/Business-Central-for-Manufacturing.jpg"
                alt="img"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.co.uk/blog/microsoft-dynamics-365-business-central-for-manufacturing/"
                target="_self"
              >
                Microsoft Dynamics 365 Business Central for Manufacturing: One
                Stop Solution for all Manufacturing Needs
              </ExternalLink>
            </h4>
            <span>16 June 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.co.uk/blog/how-to-avail-the-dynamics-365-business-central-trial/"
              target="_self"
            >
              <img
                src="/assets/img/Business-Central-Trial.jpg"
                alt="img"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.co.uk/blog/how-to-avail-the-dynamics-365-business-central-trial/"
                target="_self"
              >
                How to avail Dynamics 365 Business Central Trial?
              </ExternalLink>
            </h4>
            <span>26 May 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.co.uk/blog/what-is-business-central-implementation-methodology/"
              target="_self"
            >
              <img
                src="/assets/img/Business-Central-Implementation-Methodology.jpg"
                alt="img"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.co.uk/blog/what-is-business-central-implementation-methodology/"
                target="_self"
              >
                What is Business Central Implementation Methodology?
              </ExternalLink>
            </h4>
            <span>24 May 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.co.uk/blog/dynamics-365-business-central-vs-dynamics-365-sales/"
              target="_self"
            >
              <img
                src="/assets/img/Blue-White-Simple-Financial-Tips-Blog-Banner-1.png"
                alt="img"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.co.uk/blog/dynamics-365-business-central-vs-dynamics-365-sales/"
                target="_self"
              >
                Dynamics 365 Business Central Vs Dynamics 365 Sales
              </ExternalLink>
            </h4>
            <span>5 May 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
