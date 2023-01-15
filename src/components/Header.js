/** @format */

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  useLinkDownFall,
  useLineforward,
  useTextUpward,
  useBoxScalling,
} from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const text6 = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const linkArr = [link1, link2, link3, link4];
  const lineArr = [line1, line2, line3, line4, line5];
  const textArr = [text1, text2, text3, text4, text5, text6];
  const boxArr = [box1, box2, box3];

  useLinkDownFall(linkArr);
  useLineforward(lineArr);
  useTextUpward(textArr);
  useBoxScalling(boxArr);

  return (
    <div className="header container">
      <div className="row name">
        <h2 ref={text1}>
          sa<span>k</span>ib
        </h2>
        <h2 ref={text2}>
          bi<span>sw</span>as
        </h2>
      </div>

      <hr ref={line1} />

      <div className="row">
        <span ref={link1}>front end developer</span>
        <a ref={link2} href="google.com" target="_blank" rel="noreferrer">
          view resume
        </a>
        <a
          ref={link3}
          href="mailto:sakibbiswas419@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send mail
        </a>

        <Link ref={link4} to="/contact">
          contact me
        </Link>
      </div>

      <hr ref={line2} />

      <div className="row">
        <Link to="/about" className="box about" ref={box1}>
          <span>about</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>

        <h2 ref={text3}>creative</h2>

        <Link to="/projects" className="box project" ref={box2}>
          <span>projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr ref={line3} />

      <div className="row">
        <h2 ref={text4}>
          front-e<span>n</span>d dev<span>el</span>oper
        </h2>
      </div>

      <hr ref={line4} />

      <div className="row">
        <h2 ref={text5}>based</h2>
        <Link to="/skills" className="box skill" ref={box3}>
          <span>skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text6}>in india</h2>
      </div>

      <hr ref={line5} />
    </div>
  );
};

export default Header;
