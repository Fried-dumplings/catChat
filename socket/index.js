const socket = app => {
  const io = require('socket.io')(app)
  io.on('connection', socket => {
    socket.on('message', msg => {
      // console.log(socket);
      // console.log(msg)
      console.log(msg)
      socket.broadcast.emit('message', { msg: `${msg.msg}`, name: 'my' })
    })
  })
}

module.exports = socket
