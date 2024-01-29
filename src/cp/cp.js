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
