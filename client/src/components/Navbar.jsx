import logo from "../assets/qUICK_bid-B9d0vuFYf-transformed.png";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar sticky top-0 z-10 p-3 bg-base-100 shadow flex justify-between items-center">
        <div className="navbar-start">
          <Link className="text-2xl font-bold px-3" to="/">
            <img src={logo} className="w-1/2" />
          </Link>
        </div>
        <div className="navbar-center flex items-center">
          <Link className="btn btn-accent btn-sm mx-1" to="/add">
            Add Auction
          </Link>
          <button
            className="btn btn-error btn-sm mx-1"
            onClick={() => {
              localStorage.removeItem("access_token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
        <div className="navbar-end"></div>
      </nav>
    </>
  );
}
