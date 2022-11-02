import React from "react";
import { Helmet } from "react-helmet";
const PdfCRMDownload = () => {
  const reloadCount = sessionStorage.getItem("reloadCount");
  if (reloadCount < 2) {
    sessionStorage.setItem("reloadCount", String(reloadCount + 1));
    console.log(reloadCount);
    window.location.reload();
  } else {
    sessionStorage.removeItem("reloadCount");
    console.log(reloadCount);
  }
  return (
    <>
      <Helmet>
        <title>Dynamics CRM Guide Download | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/guides/download/Pdf-dynamics-crm/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>A Complete Guide to Dynamics CRM Pdf</h1>
              <div className="text-center">
                <div className="">
                  <a
                    href="/assets/pdf/Dynamics CRM-Ebook-UK_En.pdf"
                    className="btn-get-started scrollto"
                    download
                  >
                    <span>
                      Download <i className="bi bi-file-earmark-pdf"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfCRMDownload;
