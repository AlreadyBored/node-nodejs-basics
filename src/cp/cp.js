import path from 'path';
import { stdout, stdin } from 'node:process';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const spawnChildProcess = (args) => {
  const sourcePath = path.resolve(_dirname, 'files', 'script.js');
  const { stdout: childStdout, stderr: childStderr, error: childError } = spawnSync('node', [sourcePath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

  if (childError) {
    console.error(`ERROR: ${childError.message}`);
    return '';
  }

  if (childStderr) {
    console.error(`ERROR: ${childStderr}`);
  }

  return childStdout.toString();
};

const output = spawnChildProcess(['Argument1', 'Argument2']);
stdout.write(output);
stdin.resume();
console.log("1")
