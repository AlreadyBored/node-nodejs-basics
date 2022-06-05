import child_process from 'child_process';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const spawnChildProcess = async (args) => {
  const filePath = `${__dirname}files/script.js`;
  child_process.fork(filePath, args);
};

spawnChildProcess(process.argv);
