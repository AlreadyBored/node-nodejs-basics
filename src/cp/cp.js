import child_process from "child_process";

const spawnChildProcess = async (args) => {
  const forkProcess = child_process.fork('./src/cp/files/script.js', args);

  forkProcess.on('message', msg => {
    process.stdout.write(msg);
  });

  forkProcess.on('data', data => {
    forkProcess.send(data);
  });
  return null;
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
