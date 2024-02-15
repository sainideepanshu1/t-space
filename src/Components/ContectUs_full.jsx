import React from "react";
import ContactUsdata from "../Data/ContactUsdata";

const ContactUs = () => {
  return (
    <div className="Contact">
      <div className="contact1">{ContactUsdata[0].text1}</div>
      <div className="contact2">{ContactUsdata[0].text2}</div>
    </div>
  );
};

export default ContactUs;
