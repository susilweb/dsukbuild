import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FooterBtoomSuscriber = () => {
  const [display, setDisplay] = useState("const2");
  const currentUrl = window.location.href;
  const history = useHistory();
  function sendEmail(e) {
    setDisplay("spinner-border");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_caieyr7",
        "template_m86umpi",
        e.target,
        "AqRGHUvLru9UkjZoA"
      )
      .then((res) => {
        console.log(res);
        // alert("success");

        history.push("/thank-you/email-subscriber/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="main-form-wrper">
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Full Name"
              name="name"
              required
            />
              <input type="hidden" name="url" value={currentUrl} />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="* Work Email"
              name="email"
              pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary fomr-submit">
            Subscribe Now
          </button>
          <div
            style={{
              color: "white",
              position: "relative",
              marginLeft: "10px",
              top: "12px",
            }}
            className={display}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default FooterBtoomSuscriber;
