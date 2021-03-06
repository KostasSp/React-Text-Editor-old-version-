const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-change", (delta) => {
    //broadcasting to all client instances
    socket.broadcast.emit("receive-change", delta);
  });
  console.log("connected");
});
