import React from "react";

export const DismissingAlert = (props) => {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div className="container my-4">
        <div
          className={`alert alert-${props.alert.alertType} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.alertType)}: </strong>
          {props.alert.alertMessage}
        </div>
      </div>
    )
  );
};
