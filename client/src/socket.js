import { io } from "socket.io-client";

const socket = io("https://quickbid.rezaarga.xyz/");
// , {
//     query: { token: localStorage.getItem("access_token") }
// }

export default socket;
