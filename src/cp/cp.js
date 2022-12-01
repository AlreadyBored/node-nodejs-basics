import path from "path";
import cp from 'node:child_process'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.resolve(__dirname, 'files', 'script.js')

const spawnChildProcess = async (args) => {
  const proc = cp.fork(file, args,
    // {silent: true}
  )
  console.log(proc.stdio)
  // process.stdin.pipe(proc.stdin)
  // proc.stdout.pipe(process.stdout)
};

await spawnChildProcess();

// cp.js - implement function spawnChildProcess that receives array of arguments
// args and creates child process from file script.js, passing these args to it.
// This function should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout
