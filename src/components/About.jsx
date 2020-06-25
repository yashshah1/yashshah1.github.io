import React from "react";
import { Header, BottomNav, OutdomainLink } from "./";

export default function About() {
  return (
    <>
      <Header text="About" />
      <main className="wrap">
        <article className="flex-container">
          <p>
            I'm Yash, a final year Computer Engineering student at College of
            Engineering Pune and an incoming Data Science Engineer at Wolters
            Kluwer India.
            <br />
            <br /> I was an intern with Wolters Kluwer from May '19 to Jan '20
            where I built a model recalibration pipeline to reduce time taken by
            upto 60% and other peripheral tools.
            <br />
            <br /> I've been writing code since I was 12 (Q Basic counts), and I
            absolutely love it. Currently, my heart lies in building full stack
            software solutions. I am comfortable using the MERN stack, and have
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
