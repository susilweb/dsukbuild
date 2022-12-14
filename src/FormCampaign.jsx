import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FormCampaign = () => {
  const [display, setDisplay] = useState("const2");
  const history = useHistory();
  const currentUrl = window.location.href;
  function sendEmail(e) {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rb24nny",
        "template_mv5gkb4",
        e.target,
        "rkNd-nNe8gDdNeZT5"
      )
      .then((res) => {
        //console.log(res);
        // alert("success");

        history.push("/thank-you/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
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
            placeholder="* Work Email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!gmail)(?!yahoo.com)(?!yahoo)(?!hotmail.com)(?!hotmail)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="* Company Name"
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
            required
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
            I agree to the&nbsp;
            <Link to="/privacy-policy/" title="privacy-policy" target="_blank">
              Privacy Policy&nbsp;
            </Link>
            and&nbsp;
            <Link to="/terms-of-use/" title="terms-of-use" target="_blank">
              Terms of Service
            </Link>
            .
          </label>
        </div>
        <div className="spiner-wrper">
          <button type="submit" className="btn btn-primary fomr-submit">
            Submit
          </button>
          <div className={display} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCampaign;
