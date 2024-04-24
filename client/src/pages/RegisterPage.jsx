import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import logo from "../assets/qUICK_bid-B9d0vuFYf-transformed.png";

export default function RegisterPage() {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: input,
      });
      let msg = data.message;
      Swal.fire({
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 3000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      let errMsg = error.response.data.message;
      Swal.fire({
        title: "Error",
        text: errMsg,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden bg-base-100 mt-6">
        <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-300">
          <div className="flex justify-center mb-1 mr-5">
            <img src={logo} className="w-1/2" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-accent">
            Register
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter User Name"
                className="w-full input input-bordered input-accent"
                name="userName"
                value={input.email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full input input-bordered input-accent"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full input input-bordered input-accent"
                name="fullName"
                value={input.fullName}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-accent"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <button className="btn btn-accent w-full mt-5">Register</button>
            </div>
          </form>
          <div className="divider divider-accent mt-7">OR</div>
          <p className="text-center">
            Already have an account ? Click{" "}
            <Link to="/login" className="underline">
              here
            </Link>{" "}
            to login
          </p>
        </div>
      </div>
    </>
  );
}
