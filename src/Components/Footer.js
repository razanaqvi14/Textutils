import React from "react";

export const Footer = (props) => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className={`mb-3 me-2 mb-md-0 text-body-${
              props.mode === "dark" ? "primary" : "primary"
            } text-decoration-none lh-1`}
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span
            className={`mb-3 mb-md-0 text-body-${
              props.mode === "dark" ? "primary" : "primary"
            }`}
          >
            © 2023 Company, Inc
          </span>
        </div>
      </footer>
    </div>
  );
};
