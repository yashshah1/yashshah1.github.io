import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "./";
import OutdomainLink from "../helpers/OutdomainLink";
export default function Home() {
  return (
    <nav role="navigation" className="flex-container" id="splash">
      <Link to="/about" className="big-link">
        Who am I?
      </Link>
      <OutdomainLink url="/blog" className="big-link">
        Blog
      </OutdomainLink>
      <OutdomainLink url="https://github.com/yashshah1" className="big-link">
        Projects
      </OutdomainLink>
      <OutdomainLink
        url="https://drive.google.com/file/d/1oyRudP-OIKvmTUEViv9uRvt4d6-Ht8MY/view?usp=sharing"
        className="big-link"
      >
        Resume
      </OutdomainLink>
      <Contact />
    </nav>
  );
}
