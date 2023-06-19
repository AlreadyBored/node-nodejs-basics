import path from 'path';
import { stdout, stdin } from 'node:process';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const spawnChildProcess = async (args) => {
  const sourcePath = path.resolve(_dirname, 'files', 'script.js');
  const childProcess = spawn('node', [sourcePath, ...args]);

  childProcess.stdout.on('data', (data) => stdout.write(data));
  stdin.on('data', (data) => childProcess.stdin.write(data));
};

spawnChildProcess(['someArgument1', 'someArgument2']);
