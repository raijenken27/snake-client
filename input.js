// input.js

let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === '1') {
      connection.write("Say: Hello, this is a Snake!");
    } else if (key === '2') {
      connection.write("Say: Watch out!");
    } else if (key === '3') {
      connection.write("Say: I'm the longest!");
    } else if (key === '\u0003') {
      process.exit(); // Ctrl + C exits the game
    }
  });

  return stdin;
};

module.exports = {
  setupInput,
};
