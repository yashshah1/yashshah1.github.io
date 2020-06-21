import React from "react";

export default function OutdomainLink(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={props.className}
    >
      {props.children}
    </a>
  );
}
