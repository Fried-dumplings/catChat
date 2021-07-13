import io from 'socket.io-client'
const protocol = window.location.protocol
const host = window.location.host
const port = window.location.port
console.log(protocol)
console.log(host)
// console.log(port)

const socket = io(`${protocol}//${host}` || 'http://localhost:3000/')

export default socket
