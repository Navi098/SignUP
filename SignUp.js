import React from "react";

export default function Read() {
  return (
    <div>
      <section className="bg-light">
        <div className="container p-4 ">
          <div className="row d-flex justify-content-center algin-item-center">
            <div className="col-12">
              <div className="card " style={{ border: "none" }}>
                <h4 className="text-dark px-2" style={{ fontWeight: "600" }}>
                  Untitled UI
                </h4>
                <div className="card-body py-5 ">
                  <div className="row g-0 ">
                    <div className="col-lg-6 ">
                      <h3
                        className="px-3 "
                        style={{ margin: 30, fontWeight: "700" }}
                      >
                        Welcome back,Olivia
                      </h3>
                      <p className="small px-5 ">
                        Welcome back! Please enter your details
                      </p>
                      <div className="form-group px-5">
                        <button
                          className=" btn btn-white col-lg-11 col-md-11 square border"
                          type="button"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFzD69JyIH7WCLKKdrYqCtkMPsko0-PBSnjolfusXQrN1qQrPWaaRLvSxiy9G3F_etqo&usqp=CAU"
                            className="img-fluid"
                            style={{ width: "2rem" }}
                          ></img>
                          Login with Goggle
                        </button>
                      </div>
                      <div className="form-group col-lg-11 col-md-11 px-5 py-3">
                        <input
                          type="Name"
                          className=" form-control "
                          placeholder="Name"
                          style={{
                            borderBottom: "2px solid silver",
                            borderBlockStart: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            fontWeight: "500",
                          }}
                        ></input>
                      </div>
                      <div className="form-group col-lg-11 col-md-11 px-5 py-2">
                        <input
                          type="Email"
                          className=" form-control "
                          placeholder="Email"
                          style={{
                            borderBottom: "2px solid silver",
                            borderBlockStart: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            fontWeight: "500",
                          }}
                        ></input>
                      </div>
                      <div className="form-group col-lg-11 col-md-11 px-5 py-2">
                        <input
                          type="Password"
                          className=" form-control "
                          placeholder="Password"
                          style={{
                            borderBottom: "2px solid silver",
                            borderBlockStart: "none",
                            borderLeft: "none",
                            borderRight: "none",
                            fontWeight: "500",
                          }}
                        ></input>
                      </div>
                      <div className="form-group py-2 px-5 ">
                        <button
                          className="btn btn-dark col-lg-11 col-md-11"
                          type="button"
                          style={{ borderRadius: "8px" }}
                        >
                          Create account
                        </button>
                      </div>
                      <div className="form-group px-5 py-2">
                        <button
                          className=" btn btn-white col-lg-11 col-md-11 square border"
                          type="button"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFzD69JyIH7WCLKKdrYqCtkMPsko0-PBSnjolfusXQrN1qQrPWaaRLvSxiy9G3F_etqo&usqp=CAU"
                            className="img-fluid"
                            style={{ width: "2rem", borderRadius: "8px" }}
                          ></img>
                          Sign up with Google
                        </button>
                      </div>
                      <div className="form-group  py-2">
                        <p
                          className="small text-center"
                          style={{ fontWeight: "600" }}
                        >
                          Already have an account?
                          <a
                            hrefg="#"
                            className="text-link text-dark"
                            style={{ fontWeight: "700" }}
                          >
                            Log in
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6  text-dark px-5">
                      <img
                        src="https://img.freepik.com/premium-photo/winner-little-boy-sitting-with-laptop-isolated-white_58409-11895.jpg?w=360"
                        className="img-fluid "
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
