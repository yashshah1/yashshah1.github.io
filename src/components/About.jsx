import React from "react";
import { Header, BottomNav, OutdomainLink } from "./";

export default function About() {
  return (
    <>
      <Header text="About" />
      <main className="wrap">
        <article className="flex-container">
          <p>
            I'm Yash, a Software Engineer at Big Binary Solutions Pvt Ltd.
            Currently, I work on building full stack web solutions using
            ReactJS, NodeJS and Ruby on Rails for our clients. Before this, I
            was a Data Scientist at Wolters Kluwer India where I worked with
            re-calibrating existing blended NLP models and creating new ones to
            support in-house products. Along with this, I also built highly
            scaleable and concurrent APIs to allow realtime prediction.
            <br />
            <br /> I was an intern with Wolters Kluwer from May '19 to Jan '20
            where I built a model recalibration pipeline to reduce time taken by
            upto 60% amongst other things.
            <br />
            <br /> I've also held multiple positions with the Software
            Development Section, COEP through my college years where I've
            contributed to and lead several teams which serviced both in-house
            and external clients.
            <br />
            <br /> I've been writing code since I was 12 (Q Basic counts), and I
            absolutely love it. I am comfortable using the MERN stack, and have
            good control over Python.
            <br />
            <br /> Outside college, I spend my time reading books, writing code
            and I've recently started writing a blog. Check it out{" "}
            <OutdomainLink url="/blog">here</OutdomainLink>!
            <br />
            <br />I enjoy hands-on conducting technical workshops, read about my
            previous ones{" "}
            <OutdomainLink url="https://www.linkedin.com/posts/yashshah13_graphql-nginx-javascript-activity-6639888929678028801-iSXX">
              here
            </OutdomainLink>{" "}
            and{" "}
            <OutdomainLink url="https://www.linkedin.com/posts/yashshah13_sds-webdev-activity-6596791902597672960-CAHP">
              here
            </OutdomainLink>
            .
          </p>
        </article>

        <BottomNav />
      </main>
    </>
  );
}
