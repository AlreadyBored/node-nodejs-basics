import { fork, spawn } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const childPath = path.join(dirName, "files", "script.js");

const spawnChildProcess = async (args) => {
  let child = fork(childPath, args);

  process.stdin.on('message', (data) => child.send(data));
  child.on('message', (data) => console.log(`Received from child process to main stdout: ${data}`));

  // If we used spawn or {options.stdio : 'pipe'/'inherit'} we would have stoud/stdin in child process
  // process.stdin.pipe(child.stdin);
  // child.stdout.pipe(process.stdout);
  // child.stdout.on('data', (data) => {
  //   console.log(`from child to master stdout:\n ${data.toString()}`);
  // });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['one', 'two']);
