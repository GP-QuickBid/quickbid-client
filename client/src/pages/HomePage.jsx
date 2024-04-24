import loading from "../assets/Gear-0.2s-264px.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { fetchPosts } from "../store/postSlice";

export default function HomePage() {
  const posts = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="card bg-base-300 shadow flex flex-row"
              >
                <figure className="flex flex-col">
                  <img
                    src={post.imageUrl}
                    className="max-w-xs h-3/4 rounded-lg shadow ml-5"
                  />
                </figure>
                <div className="card-body flex-1">
                  <b>{post.title}</b>
                  <hr />
                  <div>
                    <i className="fa-solid fa-user" /> {post.fullName}
                  </div>
                  <div>
                    <i className="fa-solid fa-book" /> {post.description}
                  </div>
                  <div>
                    <i className="fa-solid fa-circle" /> {post.status}
                  </div>
                  <div>
                    <i className="fa-solid fa-dollar-sign" /> {post.price}
                  </div>
                  <button className="btn btn-accent btn-sm w-full mt-2">
                    Bid
                  </button>
                  <button className="btn btn-error btn-sm w-full mt-2">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}
