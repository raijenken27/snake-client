const net = require("net");

// Function to establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.33.161", // Replace with the actual IP address of your server
    port: 50541, // Replace with the actual port number of your server
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for the "connect" event
  conn.on("connect", () => {
    console.log("Successfully connected to the server");
  });

  // Event handler for the "data" event
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
const conn = connect();
