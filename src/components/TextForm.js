import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "Success");
  };
  const handleLowClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "Success");
  };
  const handleClear = () => {
    // console.log("Lowercase was clicked");
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared sucessfully!", "Success");
  };
  const handleBackspace = () => {
    // console.log("Lowercase was clicked");
    let newText = text.substring(0, text.length - 1);
    setText(newText);
    props.showAlert("Backspace done!", "Success");
  };
  const handleCopy = () => {
    // console.log("Copy was clicked");
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied!", "Success");
  };
  const handleExtraSpaces = () => {
    // console.log("Extra spaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "Success");
  };
  const handleDeleteFromStart = () => {
    console.log("Capitalize");
    let newtext = text.substring(text.length, text.length - (text.length - 1));
    setText(newtext);
    props.showAlert("Deleted character from beginning!", "Success");
  };
  const handleCapitalize = () => {
    let a = text.toString().split(" ");
    for (let i = 0; i < a.length; i++) {
      let b = a[i].charAt(0).toUpperCase() + a[i].slice(1);
      a[i] = b;
    }
    let c = a.toString().replace(/,/g, " ");
    setText(c);
    props.showAlert("Capitalize done!", "Success");
  };
  const reversed = () => {
    let splitWord = text.split("");
    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords;
    setText(newText);
    props.showAlert("String reversed!", "Success");
  };
  const handleonChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  // text="new text"; //Wrong way to change state
  // setText="new text"; //Correct way to change state
  return (
    <>
      <div className="container">
        <h2 className="text-center">
          <em>{props.heading}</em>
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control z-depth-1"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn btn-info mx-3 my-1" onClick={handleLowClick}>
            Lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleCapitalize}
          >
            Capitalize
          </button>
          <button className="btn btn-info mx-2 my-1" onClick={reversed}>
            Reverse
          </button>
          <button
            className="btn btn-primary mx-3 my-1"
            onClick={handleExtraSpaces}
          >
            Extra spaces
          </button>
          <button className="btn btn-info mx-3 my-1" onClick={handleClear}>
            Clear
          </button>
          <button
            className="btn btn-primary mx-3 my-1"
            onClick={handleBackspace}
          >
            Backspace
          </button>
          <button
            className="btn btn-info mx-2 my-1"
            onClick={handleDeleteFromStart}
          >
            Delete from start
          </button>
          <button className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h4 className="text-center">
          <em>Your text summary</em>
        </h4>
        <div className="d-flex justify-content-around flex-wrap">
          <div>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words,{text.length} characters
          </div>
          <div>
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.008}{" "}
            Minutes read
          </div>
          <div>
            {(
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length * 0.048
            ).toFixed(3)}{" "}
            Seconds read
          </div>
          <div>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            sentences
          </div>
          <div>
            {
              text.split(" ").filter((element) => {
                return (text + '\nNo. of unique words :'+element.size);
              }).length
            }{" "}
            unique words
          </div>
        </div>
        <br/>
        <h3 className="text-center pt-4">
          <strong>Preview</strong>
        </h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </p>
      </div>
      <footer className="page-footer font-small special-color-dark pt-1">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/pratiksha.sankhe.9">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1" href="https://twitter.com/SankhePratiksha">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/pratiksha-sankhe/">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-1">
          © 2021 Copyright
          <br />
          <a
            href="https://github.com/psankhe28"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Made by <strong>Pratiksha Sankhe</strong>
          </a>
        </div>
      </footer>
    </>
  );
}
