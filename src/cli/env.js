const os = require('os');

const envConfig = {
  homeDir: os.homedir(),
  eol: os.EOL
};

module.exports = envConfig;
