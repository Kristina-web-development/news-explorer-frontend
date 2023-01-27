import React from "react";

export default function About() {
  return (
    <section className="about">
      <img
        src="https://ca.slack-edge.com/TPV9DP0N4-U030B02AHFY-e8089a0843ec-512"
        alt="author"
        className="about__author-picture"
      />
      <div className="about__author-container">
        <h4 className="about__heading">About the author</h4>
        <div className="about__paragraph-container">
          <p className="about__paragraph-text">
            My name is Kristina Stasevich, I am a web developer. To develop this
            project I used my newly acquired knowledge with: React.js,
            JavaScript Classes, RestApi, CSS, HTML, Node.js, MongoDB, Google
            Cloud and more!
          </p>
          <p className="about__paragraph-text">
            I am very glad that I took part in the "Practicum 100" program by
            Yandex. Thanks to this course, I discovered all the possibilities on
            the way to achieving my goal!
          </p>
        </div>
      </div>
    </section>
  );
}
