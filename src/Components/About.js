import React from "react";

export const About = (props) => {
  return (
    <div className="container my-4">
      <h1>About Us</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={
                (props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" },
                props.theme.theme === "lightBlue"
                  ? { backgroundColor: "#e3f2fd" }
                  : props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" })
              }
            >
              About this Website
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={
                (props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" },
                props.theme.theme === "lightBlue"
                  ? { backgroundColor: "#e3f2fd" }
                  : props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" })
              }
            >
              This is <strong>TextUtils.</strong> From this website you can
              analyze your text in whatever way you want.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={
                (props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" },
                props.theme.theme === "lightBlue"
                  ? { backgroundColor: "#e3f2fd" }
                  : props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" })
              }
            >
              Website Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={
                (props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" },
                props.theme.theme === "lightBlue"
                  ? { backgroundColor: "#e3f2fd" }
                  : props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" })
              }
            >
              <ul>
                <li>Uppercase option</li>
                <li>Lowercase option</li>
                <li>Clear Text Option</li>
                <li>Copy Text Option</li>
                <li>Text Preview</li>
                <li>Words Count Option</li>
                <li>Characters Count Option</li>
                <li>Find and replace Option</li>
                <li>Time which will take to a person to read the text</li>
                <li>Beautiful UI</li>
                <li>Dark Mode, Light Mode, Light Blue Theme</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={
                (props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" },
                props.theme.theme === "lightBlue"
                  ? { backgroundColor: "#e3f2fd" }
                  : props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" })
              }
            >
              About Me
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={
                (props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" },
                props.theme.theme === "lightBlue"
                  ? { backgroundColor: "#e3f2fd" }
                  : props.mode === "dark"
                  ? {
                      backgroundColor: "rgb(44 48 51)",
                      color: "#adb5bd",
                      borderColor: "#495057",
                    }
                  : { backgroundColor: "white" })
              }
            >
              I am a second year Computer Science student completing my
              bachelor's degree from University Of Karachi. I made this project
              completely from React JS, HTML, and CSS. Currently focusing and
              gaining web development skills and upgrading day by day until i
              become a successful full stack web developer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
