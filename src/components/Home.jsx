import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "./";
import OutdomainLink from "../helpers/OutdomainLink";
import Reveal from "react-reveal/Reveal";

export default function Home() {
  return (
    <Reveal top cascade duration={2000}>
      <nav role="navigation" className="flex-container" id="splash">
        <div>
          <Link to="/about" className="big-link">
            Who am I?
          </Link>
        </div>
        <div>
          <OutdomainLink url="/blog" className="big-link">
            Blog
          </OutdomainLink>
        </div>
        <div>
          <OutdomainLink
            url="https://github.com/yashshah1"
            className="big-link"
          >
            Projects
          </OutdomainLink>
        </div>
        <div>
          <OutdomainLink
            url="https://drive.google.com/file/d/1oyRudP-OIKvmTUEViv9uRvt4d6-Ht8MY/view?usp=sharing"
            className="big-link"
          >
            Resume
          </OutdomainLink>
        </div>
        <div>
          <Contact />
        </div>
      </nav>
    </Reveal>
  );
}
