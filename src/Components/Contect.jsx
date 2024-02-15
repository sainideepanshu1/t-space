import React, { useState } from "react";
import { Contect_Data } from "../Data/Contect";
import axios from "axios";
import Swal from "sweetalert2";

function Contect() {
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
    <div className="Contect">
      <div className="Contect_left">
        <form onSubmit={handleSubmit}>
          <div className="Contect_left_1">
            <input
              required
              type="email"
              placeholder="Email Address*"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>
          <div className="Contect_left_2">
            <input
              type="text"
              placeholder="Full Name*"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.fullName}</span>
            <input
              type="text"
              placeholder="Contact Number*"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
            />
            <span className="error">{errors.contact}</span>
          </div>

          <div className="Contect_left_3">
            <h2>
              Select Services <span>*</span>
            </h2>
            <div className="Contect_left_checkbox">
              <div className=" Contect_checkbox">
                <input
                  type="checkbox"
                  value="Website Development"
                  onChange={handleChange}
                />
                <label>Website Development</label>
              </div>
              <div className=" Contect_checkbox">
                <input
                  type="checkbox"
                  value="Application Development"
                  onChange={handleChange}
                />
                <label>Application Development</label>
              </div>
              <div className=" Contect_checkbox">
                <input
                  type="checkbox"
                  value="Local SEO"
                  onChange={handleChange}
                />
                <label>Local SEO</label>
              </div>
              <div className=" Contect_checkbox">
                <input
                  type="checkbox"
                  value="Digital Marketing"
                  onChange={handleChange}
                />
                <label>Digital Marketing</label>
              </div>
              <div className=" Contect_checkbox">
                <input
                  type="checkbox"
                  value="Social Media Management"
                  onChange={handleChange}
                />
                <label>Social Media Management</label>
              </div>
            </div>
            <div className="Contect_textarea">
              <textarea
                placeholder="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
            <div className="Contect_button">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>

      <div className="Contect_right">
        <div className="Contect_right1">
          {Contect_Data.map((product, index) => {
            return (
              <div className="Contect_right2" key={index}>
                <h1>{product.h1}</h1>

                <div>
                  {product.li && (
                    <ul className="Contect_right3">
                      {product.li.map((list, listIndex) => (
                        <li key={listIndex}>{list}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contect;
