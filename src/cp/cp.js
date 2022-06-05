import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { spawn }from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.splice(2);
console.log(args)
console.log(path.resolve(__dirname, 'files', 'script.js'))


export const spawnChildProcess = async (path, args) => {
  const child = spawn('node', [path, ...args]);

  process.stdin.pipe(child.stdin)

  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });

    // Write your code here
};
//
spawnChildProcess(path.resolve(__dirname, 'files', 'script.js'), args)
