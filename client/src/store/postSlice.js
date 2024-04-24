import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import axios from "axios";

export const postSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    posts: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    postValue: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, postValue } =
  postSlice.actions;

export function fetchPosts() {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios({
        method: "GET",
        url: "http://localhost:3000/post",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      dispatch(postValue(data));
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
}

export default postSlice.reducer;
