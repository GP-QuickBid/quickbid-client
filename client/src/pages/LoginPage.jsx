import logo from "../assets/qUICK_bid-B9d0vuFYf-transformed.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let { data } = await axios({
        method: "POST",
        url: import.meta.env.VITE_API_BASE_URL + "/login",
        data: input,
      });

      localStorage.access_token = data.access_token;

      navigate("/");
      Swal.fire({
        title: "Success!",
        text: "Welcome!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center h-[85dvh] overflow-hidden bg-base-100 mt-10">
        <div className="w-full p-6 m-auto rounded-lg shadow-md lg:max-w-lg bg-base-300">
          <div className="flex justify-center mb-5 mr-5">
            <img src={logo} className="w-1/2" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-accent">
            Log In
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
              <button className="btn btn-accent w-full mt-5">Log In</button>
            </div>
          </form>
          <div className="divider divider-accent mt-7">OR</div>
          <p className="text-center">
            Don't have any account ? Click{" "}
            <Link to="/register" className="underline">
              here
            </Link>{" "}
            to register
          </p>
        </div>
      </div>
    </>
  );
}
