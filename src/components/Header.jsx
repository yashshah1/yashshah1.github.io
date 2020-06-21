import React from "react";

export default function Header({ text }) {
  return (
    <header className="wrap flex-container">
      <h1>{text}</h1>
    </header>
  );
}
