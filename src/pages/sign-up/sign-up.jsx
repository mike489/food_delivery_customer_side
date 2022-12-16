import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className=" mb-1 bg-light-slate text-center justify-content-around ">
        <span
          className=" display-1 mb-2 fw-bold "
          style={{
            color: "#6322a5",
            backgroundColor: "#f4eafd",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          E N I B L A
        </span>
      </div>
      <form>
        <div className=" justify-content-center align-items-center col-6  container py-4 shadow-2-strong card-registration">
          <div className="row ">
            <div className="col-md-6 mb-4">
              <div className="form-outline ">
                <label className="form-label" for="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className=" form-control form-floating mb-3"
                  placeholder="first name"
                />
              </div>
            </div>
            <div className=" col-md-6 mb-4">
              <div className="form-outline ">
                <label className="form-label" for="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control "
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline ">
                <label className="form-label" for="username">
                  User name
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control "
                  placeholder="user name"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline ">
                <label className="form-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="form-control"
                  placeholder="email"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline ">
                <label className="form-label" for="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="phone number"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline ">
                <label className="form-label" for="alternativephonenumber">
                  Alternative phone number
                </label>
                <input
                  type="tel"
                  id="alternativephonenumber"
                  className="form-control"
                  placeholder="alternative phone Number"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline ">
                <label className="form-label" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="col-md-6 pb-5">
              <div className="form-outline ">
                <label className="form-label" for="confirmpassword">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  className="form-control"
                  placeholder="confirm password"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline ">
                <label className="form-label" for="confirmpassword">
                  Address description
                </label>
                <input
                  type="text"
                  id="confirmpassword"
                  className="form-control"
                  placeholder="address description"
                />
              </div>
            </div>
            <div className="col-md-6 pb-5 ">
              <div className="form-outline d-grid">
                <button className="btn btn-slate me-md-2" type="button">
                  Add Location Info
                </button>
              </div>
            </div>
          </div>
          <div className="mb-2 justify-content-around d-flex  ">
            <Link className="btn btn-large btn-outline-slate  " to="/sign-up">
              SIGN UP
            </Link>
          </div>
        </div>
      </form>
      
      <Link to="/">Back</Link>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        
      }}>
      <p>Copyright &copy; 2022 ENIBLA. All rights reserved. </p>
      </div>
    </>
  );
};

export default SignUp;
