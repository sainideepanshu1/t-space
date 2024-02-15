import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import "../Style/ContactForm.css";

const ContactForm = ({ setToggle }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    fullName: "",
    contact: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormValues((prevFormValues) => {
      if (type === "checkbox") {
        return {
          ...prevFormValues,
          services: checked
            ? [...prevFormValues.services, value]
            : prevFormValues.services.filter((service) => service !== value),
        };
      } else {
        return {
          ...prevFormValues,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (formValues.email.trim() === "") {
      newErrors.email = "This field is required. Please input a valid email.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formValues.fullName.trim() === "") {
      newErrors.fullName = "This field is required. Please input your name.";
    }

    if (formValues.contact.trim() === "") {
      newErrors.contact =
        "This field is required. Please input a phone number.";
    } else if (!/^\d+$/.test(formValues.contact)) {
      newErrors.contact = "Invalid contact number";
    }

    if (formValues.services.length === 0) {
      newErrors.services = "Select at least one service";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Your form submission logic goes here
      console.log("Form submitted:", formValues);

      try {
        const response = await axios.post("http://localhost:8080/reach-out", {
          email: formValues.email,
          fullName: formValues.fullName,
          contactNumber: formValues.contact,
          services: formValues.services,
          message: formValues.message,
        });
        if (response.status === 201) {
          Swal.fire({
            text: "We will contact you shortly!",
            icon: "success",
          });
          setFormValues({
            email: "",
            fullName: "",
            contact: "",
            services: [],
            message: "",
          });
          document
            .querySelectorAll("input[type=checkbox]")
            .forEach((el) => (el.checked = false));

          setErrors({});
        }
        console.log(response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          Swal.fire({
            text: error.response.data.message,
            icon: "error",
          });
        } else {
          Swal.fire({
            text: "Server Error! Try Again Later!",
            icon: "error",
          });
        }
      }
    }
  };
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div
          onClick={setToggle}
          style={{
            cursor: "pointer",
            backgroundColor: "rgba(0,0,0)",
            position: "absolute",
            borderRadius: "50%",
            top: "-18px",
            right: "-18px",
            zIndex: "999",
          }}
        >
          <IoMdClose size={30} color="white" />
        </div>
        <div className="contact-form-row">
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Email Address*"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-form-row2">
            <input
              type="text"
              placeholder="Full Name*"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.fullName}</span>
          </div>
          <div className="contact-form-row2">
            <input
              type="text"
              placeholder="Contact Number*"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
            />
            <span className="error">{errors.contact}</span>
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-form-services">
            <h2>
              Select Services <span>*</span>
            </h2>
            <div className="Contect_left_checkbox">
              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  value="Website Development"
                  onChange={handleChange}
                />
                <label>Website Development</label>
              </div>
              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  value="Application Development"
                  onChange={handleChange}
                />
                <label>Application Development</label>
              </div>
              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  value="Local SEO"
                  onChange={handleChange}
                />
                <label>Local SEO</label>
              </div>
              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  value="Digital Marketing"
                  onChange={handleChange}
                />
                <label>Digital Marketing</label>
              </div>
              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  value="Social Media Management"
                  onChange={handleChange}
                />
                <label>Social Media Management</label>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-row">
          <textarea
            placeholder="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-button">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
