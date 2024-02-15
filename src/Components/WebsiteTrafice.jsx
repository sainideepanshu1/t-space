// import React from "react";
// import { Website } from "../Data/Website_trafice";
// import { useState } from "react";

// function Website_trafice() {
//   const initialValues = { username:"", email: "", Contact: "" };
//   const [formValues, setFormValues] = useState(initialValues);

//   const handleChange=(e)=>{
// // console.log(e.target)
// const {name,value}=e.target;
// setFormValues({...formValues,[name]:value})
// console.log(formValues)
//   }
//   return (
//     <div className="Website_trafice">
//       <div className="Website_trafice_top">
//         {Website.map((product, index) => {
//           return (
//             <div key={index} className="Website_trafice_top1">
//               <h3>{product.Heading}</h3>
//               <h2>{product.Heading2}</h2>
//             </div>
//           );
//         })}
//       </div>

//       <div className="Website_trafice_bottom">
//         <form className="">
//           <div className="Website_trafice_bottom1">
//             <div className="Website_trafice_bottom2">
//               <label>
//                 Full Name<span> *</span>
//               </label>
//               <input
//                 placeholder="Full Name"
//                 type="text"
//                 value={formValues.username}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="Website_trafice_bottom2">
//               <label>
//                 Email Address<span> *</span>
//               </label>
//               <input placeholder="Email" type="email" value={formValues.email}   onChange={handleChange} />
//             </div>
//             <div className="Website_trafice_bottom2">
//               <label>
//                 Contact Number<span> *</span>
//               </label>
//               <input
//                 placeholder="Contact"
//                 type="text"
//                 value={formValues.Contact}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="Website_trafice_button">
//             <button type="text">GROW WITH US</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Website_trafice;

import { Website } from "../Data/Website_trafice";
import React, { useState } from "react";
import axios from "axios";
function WebsiteTrafice() {
  const initialValues = { fullName: "", email: "", contact: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (formValues.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required";
    }

    if (formValues.contact.trim() === "") {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d+$/.test(formValues.contact)) {
      newErrors.contact = "Invalid contact number";
    }

    if (formValues.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/grow-with-us",
          {
            fullName: formValues.fullName,
            email: formValues.email,
            contactNumber: formValues.contact,
          }
        );
        if (response.status === 201) {
          alert(response.data.message);
          setFormValues(initialValues);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert("Server Error! Try Again Later!");
        }
      }
    }
  };

  return (
    <div className="Website_trafice">
      <div className="Website_trafice_top">
        {Website.map((product, index) => {
          return (
            <div key={index} className="Website_trafice_top1">
              <h3>{product.Heading}</h3>
              <h2>{product.Heading2}</h2>
            </div>
          );
        })}
      </div>
      <div className="Website_trafice_bottom">
        <form className="" onSubmit={handleSubmit}>
          <div className="Website_trafice_bottom1">
            <div className="Website_trafice_bottom2">
              <label>
                Full Name<span>*</span>
              </label>
              <input
                placeholder="Full Name"
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
              />
              <span className="error">{errors.fullName}</span>
            </div>
            <div className="Website_trafice_bottom2">
              <label>
                Email Address<span> *</span>
              </label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="error">{errors.email}</span>
            </div>
            <div className="Website_trafice_bottom2">
              <label>
                Contact Number<span> *</span>
              </label>
              <input
                placeholder="Contact"
                type="text"
                name="contact"
                value={formValues.contact}
                onChange={handleChange}
              />
              <span className="error">{errors.contact}</span>
            </div>
          </div>
          <div className="Website_trafice_button">
            <button type="submit">GROW WITH US</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WebsiteTrafice;
