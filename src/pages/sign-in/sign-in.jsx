import React from "react";
import { Link } from "react-router-dom";
import "./sign-in.scss";

const SignIn = () => {
  return (
    <>
      <div className=" mb-1 bg-light-slate text-center justify-content-around ">
        <span className=" display-1 mb-2 fw-bold " style={{ color: "#6322a5", backgroundColor:"#f4eafd" , height: "40vh", display: 'flex' ,alignItems: 'center',
        justifyContent: 'center', }}>
          E N I B L A
        </span>
      </div>
      <div>
        <div className="form-floating mb-3 row  justify-content-center ">
          <input
            type="email"
            id="email"
            className="  text-slate  form-control  w-25"
            placeholder="email"
          />
          <label className="form-label text-center" for="Email">
            Email address
          </label>
        </div>

        <div className=" form-floating row mb-3 d-flex justify-content-center ">
          <input
            type="password"
            id="password"
            className="  text-slate form-control me-2 w-25  "
            placeholder="password"
          />
          <label className="form-label text-center" for="Email">
            Password
          </label>
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkbox"
                checked
              />
              <label className="form-check-label" for="checkout">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <button type="button" className="btn btn-outline-slate mb-4 w-25">
            Sign in
          </button>
        </div>
        <div className="text-center">
          <p>
            Not a member?{" "}
            <a href="#!" className="text-decoration-none ">
              Sign up
            </a>
            <br />
          </p>
          <Link to="/" className="text-decoration-none">
            Back
          </Link>
        </div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
        
      }}>
      <p>Copyright &copy; 2022 ENIBLA. All rights reserved. </p>
      </div>
    </>
  );
};

export default SignIn;
