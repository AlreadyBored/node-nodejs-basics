import cp from 'child_process';

const spawnChildProcess = async (args) => {
  const process = cp.fork('./cp/files/script.js', args);
};

spawnChildProcess(['arg1','arg12']);
