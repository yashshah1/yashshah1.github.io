import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { OutdomainLink } from "./";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handleClick = () => {
    // this.setState((state) => { show: !this.state.show });
    this.setState(state => ({ show: !state.show }));
  };
  commonStyles = {
    marginLeft: "2em",
  };

  render() {
    return (
      <>
        <p className="big-link" id="p-like-anchor" onClick={this.handleClick}>
          Contact me!
        </p>
        <Reveal when={this.state.show} duration={20}>
          <div
            style={{
              marginTop: "1.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <OutdomainLink url="https://linkedin.com/in/yashshah13/">
              <FaLinkedinIn size={32} />
            </OutdomainLink>
            <OutdomainLink url="https://github.com/yashshah1">
              <FaGithub size={32} />
            </OutdomainLink>
            <OutdomainLink url="https://stackoverflow.com/users/11362183/yash-shah">
              <FaStackOverflow size={32} />
            </OutdomainLink>
            <OutdomainLink url="https://instagram.com/itsmeyashshah">
              <FaInstagram size={32} />
            </OutdomainLink>
            <OutdomainLink url="https://twitter.com/JustAnotherYash">
              <FaTwitter size={32} />
            </OutdomainLink>
            <OutdomainLink url="mailto:yashah1234@gmail.com">
              <FiMail size={32} />
            </OutdomainLink>
          </div>
        </Reveal>
      </>
    );
  }
}

export default Contact;
