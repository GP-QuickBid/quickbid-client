import { io } from 'socket.io-client'

const socket = io("http://localhost:3000")
// , {
//     query: { token: localStorage.getItem("access_token") }
// }

export default socket;