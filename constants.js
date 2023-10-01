const IP = '192.168.1.79';
const PORT = 50541;
const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const MESSAGES = {
  '1': 'Say: Hello, I am Snake',
  '2': 'Say: Sssss!',
  '3': 'Say: BITE!',
  '4': 'Say: 🐍🐍🐍',
  '5': 'Say: GAME OVER!'
};

//Export
module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES
};