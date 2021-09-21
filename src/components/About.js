import React from "react";

import { Link } from "react-router-dom";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
    borderWidth: 3,
    borderColor: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2 mx-2 pb-2 text-center">
        <em>About us</em>
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button text-center"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Text utils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Text utils is a collection of useful text processing utilities.
                All text tools are simple, free and easy to use. There are no
                intrusive ads, popups or other garbage. Just text utilities that
                work right in your browser.You can use it to change your text to
                uppercase,lowercase.You can also capitalize each word.You can
                even copy the whole text on clipboard after editing or doing
                whatever you wanted.You can remove extra spaces if there are
                any.You can reverse the text too!You can clear the
                text,backspace or even delete from start if there is any typing
                mistake or something is wrong.
              </strong>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer font-small special-color-dark pb-5 fixed-bottom">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <Link className="btn-floating btn-fb mx-1" href="https://www.facebook.com/pratiksha.sankhe.9">
                <i className="fab fa-facebook-f"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn-floating btn-tw mx-1" href="https://twitter.com/SankhePratiksha">
                <i className="fab fa-twitter"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/pratiksha-sankhe/">
                <i className="fab fa-linkedin-in"> </i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-1 fixed-bottom">
          © 2021 Copyright
          <br />
          <Link
            href="https://github.com/psankhe28"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Made by <strong>Pratiksha Sankhe</strong>
          </Link>
        </div>
      </footer>
    </div>
  );
}
