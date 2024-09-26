import React from "react";
import "../../App.css";

const SignUp = () => {
  return (
    <div
      className="container-fluid d-flex flex-wrap justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">
        <div className="col">
          <p
            className="text-center text-dark p-2 fw-bold"
            style={{ fontSize: "48px" }}
          >
            User Sign Up
          </p>
          <div
            className="card my-5 shadow"
            style={{ width: "380px", height: "450px", border: "none" }}
          >
            <div className="card-body p-4 rounded">
              <form action="" method="get" className="d-flex flex-column">
                <div className="d-flex flex-column align-items-start my-3 mx-3 fs-5">
                  <label style={{ fontWeight: "500" }}>Email Address</label>
                  <input
                    type="email"
                    name=""
                    style={{ border: "1px solid", borderColor: "#DDDDDD" }}
                    id=""
                    className="p-2 rounded w-100"
                  />
                </div>
                <div className="d-flex flex-column align-items-start my-3 mx-3 fs-5">
                  <label style={{ fontWeight: "500" }}>Password</label>
                  <input
                    type="password"
                    name=""
                    style={{ border: "1px solid", borderColor: "#DDDDDD" }}
                    id=""
                    className="p-2 rounded  w-100"
                  />
                </div>
                <div className="d-flex flex-column align-items-start my-4 mx-3">
                  <button className="btn btn-success w-100 fs-4 p-2 rounded">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
