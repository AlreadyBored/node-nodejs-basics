import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const currentDir = fileURLToPath(import.meta.url);
  const pathToChild = path.join(path.dirname(currentDir), 'files', 'script.js');
  //const childProcess = spawn(pathToChild, [...args], {});
  const child = execFile(pathToChild, args, (error, stdout, stderr) => {
    if (error) {
      console.log('err');
    }
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([25, 56, 778]);
