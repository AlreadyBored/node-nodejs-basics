import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const subprocess = fork('./script.js', args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
  
    subprocess.on('error', (err) => {
      console.log('Failed to start subprocess.', err);
    });
  
    subprocess.on('exit', (code, signal) => {
      if (code !== null) {
        console.log(`Child process exited with exit code ${code}`);
      }
      if (signal !== null) {
        console.log(`Child process exited due to receipt of signal ${signal}`);
      }
    });
  };
  
  spawnChildProcess(['arg1', 'arg2']);
