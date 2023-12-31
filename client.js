const net = require('net');
const { IP, PORT } = require('./constants');

// Connecting with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Jerome Garcia');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

//Export
module.exports = { connect };