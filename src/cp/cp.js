import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url))

const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js')
  
  const child = spawn('node', [scriptPath, ...args], { stdio: ["inherit","inherit","inherit", "ipc"] })
};

spawnChildProcess(['someArgument1', 'someArgument2', '111', '222'])

// cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process 
// from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout 
// of master process and child process:

// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout