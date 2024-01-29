import path from "path";
import { fileURLToPath } from "url";
import { spawn } from 'child_process';

const processScript = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/script.js');

const spawnChildProcess = async (args) => {
  const subProcess = spawn('node', [processScript, ...args]);

  subProcess.stdout.on('data', (data) => process.stdout.write(data));

  process.stdin.on('data', (data) => subProcess.stdin.write(data));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["one", "two"]);
