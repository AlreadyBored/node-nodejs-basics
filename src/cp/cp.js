import child_process from 'child_process';

const spawnChildProcess = async (args) => {
  child_process.fork('src/cp/files/script.js', args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,3]);
