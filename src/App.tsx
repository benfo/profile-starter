import React from "react";
import { Button } from "./components/button";
import { ToggleThemeButton } from "./components/toggle-theme-button";

export const App = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="container">
            <nav className="nav">
              <ToggleThemeButton />
              <a className="nav-brand" href="#">
                ME
              </a>
              <div>
                <a className="nav-item" href="#about">
                  About
                </a>
                <a className="nav-item" href="#experience">
                  Experience
                </a>
                <a className="nav-item" href="#contact">
                  Contact
                </a>
                <button className="btn">Resume</button>
                <button className="btn btn-primary">Resume</button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="section landing">
          <div className="container">
            <div className="hero">
              <span className="lead">Hi, my name is</span>
              <div>
                <h2>Ben Fourie</h2>
                <h3>I make cool things for the web.</h3>
              </div>
              <p>
                I'm a skilled and innovative software developer, specializing in
                front-end development. With a passion for creating visually
                appealing and user-friendly interfaces, I bring a wealth of
                technical expertise and a keen eye for design to every project.
              </p>
              <div>
                <button className="btn btn-lg btn-primary">
                  Check out my resume
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="hero">
              <h2>About</h2>
              <p>
                Meet [Your Name], a dedicated and detail-oriented software
                developer with a focus on front-end development. With years of
                experience and a track record of delivering high-quality
                software solutions, [Your Name] has a passion for creating
                beautiful and intuitive user interfaces.
              </p>
              <p>
                His expertise in the latest technologies and development
                methodologies, combined with his creative problem-solving
                skills, make him an invaluable asset to any team. In his free
                time, he enjoy staying up-to-date with the latest industry
                trends and exploring new technologies.
              </p>
              <p>
                Here are a few technologies that I've been working with
                recently:
              </p>
              <ul className="skills">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Node.js</li>
                <li>Eleventy</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container experiences">
            <h2>Experience</h2>
            <p>
              Over the past three years, [Your Name] has honed [their/their]
              skills as a web developer, working with a range of cutting-edge
              technologies.
            </p>

            <div className="experiences-list">
              <section className="card">
                <h3>Company 1</h3>
                <p>
                  At Company 1, [They/They] spent a year building and
                  maintaining complex web applications using Node.js, React, and
                  TypeScript. [They/They] developed and implemented innovative
                  solutions that improved the performance and functionality of
                  the platform, while also ensuring a seamless user experience.
                </p>
              </section>

              <section className="card">
                <h3>Company 2</h3>
                <p>
                  At Company 2, [They/They] brought [their/their] expertise in
                  front-end development to the table, using React and CSS to
                  create visually appealing and user-friendly interfaces for web
                  applications. [They/They] worked closely with designers and
                  back-end developers to ensure that all components were
                  integrated smoothly, resulting in a highly functional and
                  efficient platform.
                </p>
              </section>

              <section className="card">
                <h3>Company 3</h3>
                <p>
                  At Company 3, [They/They] used Node.js and TypeScript to build
                  and maintain scalable web applications. [They/They]
                  collaborated with cross-functional teams to identify and
                  resolve technical issues, and [they/they] implemented best
                  practices in coding, testing, and deployment to ensure that
                  the platform was reliable and efficient.
                </p>
              </section>
            </div>

            <p>
              [Your Name]'s diverse experience and technical skills make
              [them/their] an asset to any team, and [they/they] are eager to
              continue [their/their] growth and development as a web developer."
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="hero">
              <h2>Get in touch</h2>
              <p>
                Although I am not actively seeking new opportunities at the
                moment, my inbox remains open to messages. Whether it be a
                question or just a friendly greeting, I will make every effort
                to respond to your message.
              </p>
              <div>
                <a href="mailto:name.surname@email.com" className="btn">
                  Send me an email!
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
