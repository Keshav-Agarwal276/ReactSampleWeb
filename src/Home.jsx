import React from "react";
import web from '../src/images/rightimage.jpg';
import Common from "./Common";
const Home = () =>{
  return (
    <>
      <Common name='Grow Your Business With' imgsrc={web} btnname='Get Started' visit='/service'/>
    </>
  );
}

export default Home;
