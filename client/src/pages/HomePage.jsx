import loading from "../assets/Gear-0.2s-264px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import socket from "../socket";
import { useDispatch, useSelector } from "react-redux";
import { postValue } from "../store/postSlice";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch()
  // const posts = useSelector(state => state.posts) 

  const handleDelete = async (id) => {
    try {
      let { data } = await axios({
        method: "DELETE",
        url: "http://localhost:3000/post/" + id,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      Swal.fire({
        title: "Success!",
        text: "Auction deleted successfully",
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


  useEffect(() => {
    socket.emit('getAllUsers');
    socket.on('allData', (newData) => {
      // console.log(newData, "newData");
      setPosts(newData);
    });
    socket.on('allUsers', (data) => {
      // console.log(data, '<<<<<');
      setPosts(data);
    });
    socket.on('dataCreated', (newData) => {
      setPosts((prevPosts) => [...prevPosts, newData]);
    });
    return () => {
      socket.off('allUsers');
      socket.off('allData');
      socket.off('dataCreated')
    };
  }, []);

  return (
    <>
      <div id="PAGE-HOME" className="p-3">
        <main className="grid grid-cols-2 gap-5 px-10 my-8">
          {posts.map((post) => {
            return (
              <div key={post.id} className="card bg-base-300 shadow flex flex-row">
                <figure className="flex flex-col">
                  <img src={post.imageUrl} className="max-w-xs h-3/4 rounded-lg shadow ml-5" alt="Post" />
                </figure>
                <div className="card-body flex-1">
                  <b>{post.title}</b>
                  <hr />
                  <div><i className="fa-solid fa-user" /> {post.User.fullName}</div>
                  <div><i className="fa-solid fa-book" /> {post.description}</div>
                  <div><i className="fa-solid fa-circle" /> {post.status}</div>
                  <div><i className="fa-solid fa-dollar-sign" /> Rp {post.price}</div>
                  <button className="btn btn-accent btn-sm w-full mt-2">Bid</button>
                  <button className="btn btn-error btn-sm w-full mt-2" onClick={() => { handleDelete(post.id); }}>Delete</button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}
