import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormCampaign from "./FormCampaign";
const DynamicsEmailerCRM = () => {
  const liststyle={

    marginBottom: '10px',
  }
  return (
    <>
      <Helmet>
        <title>
          Drive sales higher, excellent customer service & improve marketing
          capabilities | Dynamics Square
        </title>
        <meta
          name="description"
          content="Drive sales higher, excellent customer service & improve marketing capabilities"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/email-dynamics365-crm/"
        />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <section
        className="Solution-banner"
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>
              Provide Value to Delight Customers With Every Interaction
              </h1>
              <p>
              We assist your business in enhancing customer interactions and empowering your team to boost sales and ROI with a robust, feature-rich CRM - <span style={{color:'#ee3442'}}>Dynamics 365 Customer Engagement</span>.
              </p>
              <p>
                <b>
                  Benefits of Microsoft Dynamics 365 Customer Engagement(CRM):
                </b>
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <ul>
                    <li style={liststyle}><b>Build Customer Relationships:</b> Store, access, and streamline your customers' data.</li>
                    <li style={liststyle}><b>Drive Predictive Approach</b>: Leverage data analytics capabilities to analyze customer data.</li>
                    <li style={liststyle}><b>Remain Productive</b>: Enable enterprises to access customers' data anywhere using any device.</li>
                    <li style={liststyle}><b>Drive Personalized Experienced</b>: Understand & serve customers a personalized solution as per need.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Please fill the form to connect further</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <FooterHide />
    </>
  );
};

export default DynamicsEmailerCRM;
