import React from "react";
import "./nav.css";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import {useState} from 'react';

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <BiHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <MdWorkOutline />
      </a>
      <a href="#portfolio">
        <AiOutlineProject />
      </a>
      <a href="#contact">
        <BiSolidContact />
      </a>
    </nav>
  );
};

export default Nav;
