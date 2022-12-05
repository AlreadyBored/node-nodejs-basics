const { stdin, stdout } = process;
import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const child = child_process.fork(path.join(__dirname, 'files', 'script.js'),args);
  child.send(args);

  child.on('message', (code) => {
    console.log(`Message to parent: `);
    for (let key in code) {
      console.log(`${key} = ${code[key]}`);
    }
      process.exit(0);
  });

};

spawnChildProcess(process.argv.slice(2));
