// client.js

const net = require("net");
const { IP, PORT } = require("./constants");
//Added 

const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541, 
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Jerome");
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};
