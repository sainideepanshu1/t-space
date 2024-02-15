import React from "react";
import pic from "../Images/info-1.png";
import pic2 from "../Images/info-2.png";
import { FaCheck } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaReact } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import Aboutdata from "../Data/Aboutdata";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="upr">
          <h3 className="uprh1">{Aboutdata[0].text1}</h3>
          <h1 className="uprh2">{Aboutdata[0].text2}</h1>
          <p className="uprh3">{Aboutdata[0].text3}</p>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4a}
            </h2>
          </div>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4b}
            </h2>
          </div>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4c}
            </h2>
          </div>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4d}
            </h2>
          </div>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4e}
            </h2>
          </div>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4f}
            </h2>
          </div>
          <div>
            <h2 className="texth2">
              <FaCheck />
              {Aboutdata[0].text4g}
            </h2>
          </div>
        </div>
        <div>
          <img className="photo" src={pic} alt="pic" />
        </div>
      </div>
      <div className="aboutmid">
        <h3 className="aboutmid1">{Aboutdata[0].text5}</h3>
        <h1 className="aboutmid2">{Aboutdata[0].text6}</h1>
        <div className="icons">
          <div>
            <IoDocumentTextOutline className="icon" />
            <h2>{Aboutdata[0].text7}</h2>
          </div>
          <div>
            <HiOutlineLightBulb className="icon" />
            <h2>{Aboutdata[0].text8}</h2>
          </div>
          <div>
            <FaReact className="icon" />
            <h2>{Aboutdata[0].text9}</h2>
          </div>
          <div>
            <MdOutlineMenuBook className="icon" />
            <h2>{Aboutdata[0].text10}</h2>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="lowerup">
          <img className="pic" src={pic2} alt="pic" />
        </div>
        <div className="lowerdwon">
          <h1 className="uprh2">{Aboutdata[0].text11}</h1>
          <p className="uprh3">{Aboutdata[0].text12}</p>
          {/* <Link className='button' to='./' >View Our Services</Link> */}
          <button className="button"> View Our Services</button>
        </div>
      </div>
    </>
  );
};

export default About;
