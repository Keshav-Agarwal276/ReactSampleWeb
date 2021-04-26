import React from "react";
import web from '../src/images/rightimage.jpg';
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common name='Welcome to About Page' imgsrc={web} btnname='Contact us' visit='/contact'/>
    </>
  );
}

export default About;
