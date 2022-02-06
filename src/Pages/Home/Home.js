import React, { useState, useEffect } from "react";
import "./style.scss";

function Home() {
  return (
    <>
      <section className="py-5 container">
        <div className="row py-lg-5">
          <div className="col-lg-12 col-md-12 mx-auto text-center ">
            <label className="fw-light landing-typing-text landing-title">
              Hi, I am Shashikant
            </label>
          </div>
          <div className="col-lg-6 col-md-8 mx-auto ">
            <div className="justify-content-between">
              <p className="lead text-md-left text-muted text-justify">
                I'm a software engineer. I was born in 1991 and grew up in
                Kirloskarwadi. After graduating High School, I've Completed my
                Bachelor's degree in Information Technology from Shivaji
                University, Kolhapur.
              </p>
              <p className="lead text-md-left text-muted text-justify">
                I trying tokeep myself updated with latest web technologies.
                Currently I'm in love with{" "}
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://reactjs.org/"
                >
                  React
                </a>
                ,{" "}
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://www.typescriptlang.org/"
                >
                  TypeScript
                </a>
                ,{" "}
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://nextjs.org/"
                >
                  Next.js
                </a>{" "}
              </p>
              <p className="lead text-md-left text-muted text-justify">
                I have written code for&nbsp;
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://austeresystems.com/"
                >
                  Austere
                </a>
                ,&nbsp;
                <a
                  className="tech-link"
                  target="_blank"
                  href="http://www.impulsetech.co.in/"
                >
                  Impulse
                </a>
                ,&nbsp;
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://www.infosys.com/"
                >
                  Infosys
                </a>
                ,&nbsp;
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://www.capgemini.com/in-en/"
                >
                  Capgemini
                </a>
                &nbsp;and many open source projects on my{" "}
                <a
                  className="tech-link"
                  target="_blank"
                  href="https://github.com/shashibeit"
                >
                  GitHub
                </a>{" "}
                account (including private projects).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div
          className="row 
         pb-0"
        >
          <div className=" mx-auto text-center w-auto">
            <h3 className="find-me-text">find me on</h3>
            <hr className="rounded text-cente"></hr>
          </div>
        </div>
        <div className="row ">
          <div className=" mx-auto text-center w-auto">
            <ul className="list-group list-group-horizontal social-links">
              <li className="list-group-item">
                <div className="avatar">
                  <a
                    href="https://github.com/shashibeit"
                    className="social-link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </li>
              <li className="list-group-item">
                <div className="avatar">
                  <a
                    href="https://www.linkedin.com/in/shashikant-shinde/"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
              <li className="list-group-item">
                <div className="avatar">
                  <a
                    href="https://www.instagram.com/being_shashi/"
                    className="social-link"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </li>
              <li className="list-group-item">
                <div className="avatar">
                  <a
                    href="https://www.facebook.com/shashikant.shinde.31"
                    className="social-link"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export { Home };
