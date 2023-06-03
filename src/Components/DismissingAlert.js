import React from "react";

export const DismissingAlert = (props) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "70px" }}>
      {props.alert && (
        <div className="container">
          <div
            className={`alert alert-${props.alert.alertType} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.alert.alertType)}: </strong>
            {props.alert.alertMessage}
          </div>
        </div>
      )}
    </div>
  );
};
