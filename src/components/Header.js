/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header container">
      <div className="row name">
        <h2>
          sa<span>k</span>ib
        </h2>
        <h2>
          bi<span>sw</span>as
        </h2>
      </div>

      <hr />

      <div className="row">
        <span>front end developer</span>
        <a href="google.com" target="_blank" rel="noreferrer">
          view resume
        </a>
        <a
          href="mailto:sakibbiswas419@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send mail
        </a>

        <Link to="/contact">contact me</Link>
      </div>

      <hr />

      <div className="row">
        <Link to="/about" className="box about">
          <span>about</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2>creative</h2>

        <Link to="/projects" className="box project">
          <span>projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      <div className="row">
        <h2>
          front-e<span>n</span>d dev<span>el</span>oper
        </h2>
      </div>

      <hr />

      <div className="row">
        <h2>based</h2>
        <Link to="/skills" className="box skill">
          <span>skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>in india</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
