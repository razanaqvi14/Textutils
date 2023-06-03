import React, { useState } from "react";

export const TextForm = (props) => {
  const [text, setText] = useState("");
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");
  const [copyText, setCopyText] = useState("");
  const [className, setClassName] = useState("fa-regular fa-clipboard");

  const arrayOfWords = text.split(/\s+/);
  const finalArray = [];
  for (let elements in arrayOfWords) {
    if (arrayOfWords[elements] !== "") {
      finalArray.push(arrayOfWords[elements]);
    }
  }
  let numberOfCharacters = 0;
  for (let elements in finalArray) {
    numberOfCharacters += finalArray[elements].length;
  }

  const changeFindWord = (value) => {
    setFindWord(value.target.value);
  };

  const changeReplaceWord = (value) => {
    setReplaceWord(value.target.value);
  };

  const replaceAll = (e) => {
    e.preventDefault();
    setText(text.replaceAll(findWord, replaceWord));
    if (text.length !== 0) {
      props.showAlert(
        "success",
        `The word '${findWord}' is successfully replaced by '${replaceWord}'`
      );
    }
  };

  const changeTextValue = (value) => {
    setCopyText("");
    setClassName("fa-regular fa-clipboard");
    setText(value.target.value);
  };

  const changeToUpperCase = () => {
    setText(text.toUpperCase());
    if (text.length !== 0) {
      props.showAlert(
        "success",
        "Your text has been successfully transformed into Upper Case"
      );
    }
  };

  const changeToLowerCase = () => {
    setText(text.toLowerCase());
    if (text.length !== 0) {
      props.showAlert(
        "success",
        "Your text has been successfully transformed into Lower Case"
      );
    }
  };

  const clearText = () => {
    if (text.length !== 0) {
      let confirmation = window.confirm(
        "Do you really want to clear the text?"
      );
      if (confirmation === true) {
        setText("");
        setFindWord("");
        setReplaceWord("");
        props.showAlert("danger", "The text has been cleared");
      }
    }
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const copy = () => {
    setCopyText("Copied!");
    setClassName("fa-solid fa-check");
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container my-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h5>Enter the text below to analyze</h5>
        </label>
        <textarea
          className="form-control"
          id="textArea"
          rows="6"
          placeholder="Enter your text here"
          value={text}
          onChange={changeTextValue}
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
        ></textarea>
      </div>
      <button
        className="btn btn-sm btn-primary mx-1 my-1"
        onClick={changeToUpperCase}
      >
        Convert To Upper Case
      </button>
      <button
        className="btn btn-sm btn-primary mx-1 my-1"
        onClick={changeToLowerCase}
      >
        Convert To Lower Case
      </button>
      <button className="btn btn-primary btn-sm mx-1 my-1" onClick={speak}>
        Speak Text
      </button>
      <button className="btn btn-danger btn-sm mx-1 my-1" onClick={clearText}>
        Clear Text
      </button>
      <div className="my-3">
        <form action="">
          <h5>Find And Replace</h5>
          <div className="flex">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Find"
                value={findWord}
                onChange={changeFindWord}
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
              />
            </div>
            <div className="mb-3 mx-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control "
                id="replaceInput"
                aria-describedby="emailHelp"
                placeholder="Replace"
                value={replaceWord}
                onChange={changeReplaceWord}
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
              />
            </div>
          </div>
          <button className="btn btn-sm btn-primary" onClick={replaceAll}>
            Replace All
          </button>
        </form>
      </div>
      <div className="my-3">
        <h3>Your text Summary</h3>
        <ul>
          <li>
            Your text contains {finalArray.length} Words and{" "}
            {numberOfCharacters} Characters.
          </li>
          <li>
            It will take around {0.007 * finalArray.length} Minutes for an
            average reader to read this text.
          </li>
        </ul>
        <div className="flex my-3">
          <h3>Text preview</h3>
          <button
            style={{
              background: props.navbarStyle.backgroundColor,
              color: props.navbarStyle.textColor,
              border: "none",
            }}
            className={`btn btn-${props.mode} mx-2`}
            onClick={copy}
          >
            <i className={className}></i>
          </button>
          {copyText}
        </div>
        <p>
          {text.length > 0 ? (
            text
          ) : (
            <h6>
              There is no text to preview, Enter something above to preview it
            </h6>
          )}
        </p>
      </div>
    </div>
  );
};
