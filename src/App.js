import React from "react";
import "./styles.css";

export default function App(props) {
  const div = {
    width: "auto",
    height: "50px",
    border: "2px solid green",
    display: "inline-block",
    margin: "5px"
  };
  if (props.text) {
  } else {
    div.width = "50px";
    div.height = "50px";
  }
  return <div style={div}>{props.text}</div>;
}
