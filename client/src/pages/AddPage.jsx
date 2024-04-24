import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddPage() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const price = parseFloat(input.price);

    try {
      let { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/post",
        data: { ...input, price },
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      Swal.fire({
        title: "Success!",
        text: "Auction added successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
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
      <div className="p-10">
        <form className="bg-base-300 p-5 rounded-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="w-full input input-bordered input-accent"
                name="title"
                value={input.title}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Enter Description"
                className="w-full input input-bordered input-accent"
                name="description"
                value={input.description}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Image (URL)</span>
              </label>
              <input
                type="text"
                placeholder="Enter image Url"
                className="w-full input input-bordered input-accent"
                name="imageUrl"
                value={input.imageUrl}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Enter Price"
                className="w-full input input-bordered input-accent"
                name="price"
                value={input.price}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <button className="w-full btn btn-accent mt-10">Submit</button>
        </form>
      </div>
    </>
  );
}
