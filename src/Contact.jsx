import { Alert } from "bootstrap";
import React, { useState } from "react";

const Contact = () => {
  const [data,setData] = useState({
    fullname : "",
    email : "",
    phone : "",
    message : ""
  });

  const inputEvent = (event) =>{
    const {name,value}=event.target;
    setData((prev)=>{
      return {
        ...prev,
        [name]:[value]
      }
    })
  }

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `Name : ${data.fullname} Phone : ${data.phone} Email : ${data.email}`
    );
  }


  return (
    <>
      <div className="my-5">
        <div className="text-center">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit = {formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your full name"
                value={data.fullname}
                onChange={inputEvent}
                name='fullname'
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email"
                value={data.email}
                onChange={inputEvent}
                name='email'
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your phone number"
                value={data.phone}
                onChange={inputEvent}
                name='phone'
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
               Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={data.message}
                onChange={inputEvent}
                name='message'
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
