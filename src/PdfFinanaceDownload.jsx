import React from "react";
import { Helmet } from "react-helmet";
const PdfFinanaceDownload = () => {
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
        <title>Finance Guide Download | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/guides/download/Pdf-guide-finance/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>Dynamics 365 Finance Guide PDF</h1>
              <div className="text-center">
                <div className="">
                  <a
                    href="/assets/pdf/Finance-e-book-EN-UK.pdf"
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

export default PdfFinanaceDownload;
