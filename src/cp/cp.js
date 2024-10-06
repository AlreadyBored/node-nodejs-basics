import cp from 'child_process';

const spawnChildProcess = async (args) => {
  cp.fork('./files/script.js', args);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
