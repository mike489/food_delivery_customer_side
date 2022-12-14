import React from 'react';
import {Link} from "react-router-dom";

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
        <div className=" justify-content-center align-items-center col-6  container py-4 shadow-2-strong card-registration">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="first name"
                />
                <label className="form-label" for="firstName">
                  First Name
                </label>
              </div>
            </div>
            <div className=" col-md-6 mb-4">
              <div className="form-outline">
                <input
                  type="text"
                  id="lastName"
                  className="form-control "
                  placeholder="last name"
                />
                <label className="form-label" for="lastName">
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="text"
                  id="username"
                  className="form-control "
                  placeholder="user name"
                />
                <label className="form-label" for="username">
                  User name
                </label>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="email"
                  id="emailAddress"
                  className="form-control"
                  placeholder="email"
                />
                <label className="form-label" for="emailAddress">
                  Email
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="phone number"
                />
                <label className="form-label" for="phoneNumber">
                  Phone Number
                </label>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="tel"
                  id="alternativephonenumber"
                  className="form-control"
                  placeholder="alternative phone Number"
                />
                <label className="form-label" for="alternativephonenumber">
                  Alternative phone number
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="password"
                />
                <label className="form-label" for="password">
                  Password
                </label>
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input
                  type="password"
                  id="confirmpassword"
                  className="form-control"
                  placeholder="confirm password"
                />
                <label className="form-label" for="confirmpassword">
                  Confirm password
                </label>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">Back</Link>
      </>
    );
}

export default SignUp;
