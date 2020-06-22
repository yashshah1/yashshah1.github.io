import React from "react";
import { Link } from "react-router-dom";
import OutdomainLink from "../helpers/OutdomainLink";

export default function BottomNav() {
  return (
    <nav role="navigation" className="flex-container bottom-menu">
      <hr />
      <p id="bottom-nav">
        <Link to="/about">Who am I?</Link> &#183;{" "}
        <OutdomainLink url="/blog">Blog</OutdomainLink> &#183;{" "}
        <OutdomainLink url="https://github.com/yashshah1">
          Projects
        </OutdomainLink>{" "}
        &#183; <Link to="/">Home</Link>
      </p>
    </nav>
  );
}
