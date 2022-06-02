import os from 'os';
import child_process from 'child_process';
import * as url from 'url';
import fs from 'fs';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const performCalculations = async () => {
  const cpus = os.cpus();
  const workerPath = `${__dirname}worker.js`;
  const outPutPath = `${__dirname}temp.txt`;
  const prepareData = [];

  cpus.forEach((_, index) => {
    const child = child_process.fork(workerPath, [String(10 + index)]);

    child.on('message', (msg) => {
      fs.promises.appendFile(outPutPath, msg, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        }
      })
        .then(() => prepareData.push(JSON.parse(msg)))
        .then(() => {
          if (prepareData.length === cpus.length) {
            console.log(prepareData);
            return prepareData;
          }
        });
    });
  });
};
