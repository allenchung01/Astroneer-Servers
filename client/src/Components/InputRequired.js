import React from "react";

import "../Styles/InputRequired.css";

export default function InputRequired(props) {
  const input = props.input;

  return (
    <div>
      {input ? null : <span id="input-required-star">* </span>}
      {props.children}
    </div>
  );
}
