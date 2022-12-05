import {__dirnameGet, log} from "../fs/utils.mjs";
import {spawn} from 'child_process';


const spawnChildProcess = async (args = []) => {
  const dir = __dirnameGet(import.meta.url);
  const processFile = `${dir}/files/script.js`;

  const script = spawn(`node`, [processFile, ...args]);
  script.on('close', () => process.exit(0));
  script.stdout.on('data', (data) => {
    log(data.toString());
    process.stdin.pipe(script.stdin);
  });
};

spawnChildProcess(['Yes', 'or', 'No']);
