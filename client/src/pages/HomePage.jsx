import loading from "../assets/Gear-0.2s-264px.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { fetchPosts } from "../store/postSlice";

export default function HomePage() {
  // const posts = useSelector((state) => {
  //   return state.posts;
  // });
  // const dispatch = useDispatch();
  // console.log(posts);

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, []);

  const handleDelete = async (id) => {
    try {
      let { data } = await axios({
        method: "DELETE",
        url: "http://localhost:3000/delete/" + id,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      dispatch(fetchGames());
      Swal.fire({
        title: "Success!",
        text: "Game deleted successfully",
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
      {/* {games.length === 0 ? (
        <>
          <div className="flex justify-center items-center h-full">
            <img src={loading} alt="" />
          </div>
        </>
      ) : (
        <></>
      )} */}
      <div id="PAGE-HOME" className="p-3">
        <main className="grid grid-cols-2 gap-5 px-10 my-8">
          {/* Card Section*/}
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-accent btn-sm w-full mt-2">Bid</button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-accent btn-sm w-full mt-2">Bid</button>
              <button
                className="btn btn-error btn-sm w-full mt-2"
                // onClick={() => {
                //   handleDelete();
                // }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-accent btn-sm w-full mt-2">Bid</button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
          <div className="card bg-base-300 shadow flex flex-row">
            <figure className="flex flex-col">
              <img
                src="https://www.dexerto.com/cdn-cgi/image/width=800,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/08/kda-return-new-song-the-baddest-announce-ep.png"
                alt="product image"
                className="max-w-xs h-3/4 rounded-lg shadow ml-5"
              />
            </figure>
            <div className="card-body flex-1">
              <b>Title</b>
              <hr />
              <div>
                <i className="fa-solid fa-user" /> fullName
              </div>
              <div>
                <i className="fa-solid fa-book" /> Description
              </div>
              <div>
                <i className="fa-solid fa-circle" /> Status
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign" /> Price
              </div>
              <button className="btn btn-accent btn-sm w-full mt-2">Bid</button>
              <button className="btn btn-error btn-sm w-full mt-2">
                Delete
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
