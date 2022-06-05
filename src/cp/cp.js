const spawnChildProcess = async (args) => {
  const { sayHi } = require('./files/script');

  return sayHi(args);
};

spawnChildProcess(process.argv.slice(2));

